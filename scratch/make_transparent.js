import fs from 'fs';
import zlib from 'zlib';

function createCrcTable() {
  const cTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    cTable[n] = c;
  }
  return cTable;
}

const crcTable = createCrcTable();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function processPng(inputPath, outputPath) {
  const buffer = fs.readFileSync(inputPath);
  
  let pos = 8;
  let width = 0, height = 0;
  const idatBuffers = [];

  while (pos < buffer.length) {
    const length = buffer.readUInt32BE(pos);
    const type = buffer.toString('ascii', pos + 4, pos + 8);
    
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(pos + 8);
      height = buffer.readUInt32BE(pos + 12);
    } else if (type === 'IDAT') {
      idatBuffers.push(buffer.subarray(pos + 8, pos + 8 + length));
    }
    pos += 12 + length;
  }

  const idatCombined = Buffer.concat(idatBuffers);
  const uncompressed = zlib.inflateSync(idatCombined);

  const bytesPerPixel = 4;
  const stride = width * bytesPerPixel + 1; // 1 byte filter type per row

  // Filter 0 assumption or process rows
  const newRaw = Buffer.alloc(uncompressed.length);
  
  // Reconstruct un-filtered rows
  const prevRow = Buffer.alloc(width * bytesPerPixel);
  const currRow = Buffer.alloc(width * bytesPerPixel);

  for (let y = 0; y < height; y++) {
    const rowStart = y * stride;
    const filterType = uncompressed[rowStart];
    newRaw[rowStart] = 0; // Force None filter for output

    for (let x = 0; x < width * bytesPerPixel; x++) {
      const val = uncompressed[rowStart + 1 + x];
      let recon = val;
      const bpp = bytesPerPixel;

      if (filterType === 1) { // Sub
        recon = (val + (x >= bpp ? currRow[x - bpp] : 0)) & 0xff;
      } else if (filterType === 2) { // Up
        recon = (val + prevRow[x]) & 0xff;
      } else if (filterType === 3) { // Average
        const a = x >= bpp ? currRow[x - bpp] : 0;
        const b = prevRow[x];
        recon = (val + Math.floor((a + b) / 2)) & 0xff;
      } else if (filterType === 4) { // Paeth
        const a = x >= bpp ? currRow[x - bpp] : 0;
        const b = prevRow[x];
        const c = x >= bpp ? prevRow[x - bpp] : 0;
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = c;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        recon = (val + pr) & 0xff;
      }

      currRow[x] = recon;
    }

    // Now process pixels in currRow: if RGB > 240, set alpha = 0
    for (let px = 0; px < width; px++) {
      const idx = px * 4;
      const r = currRow[idx];
      const g = currRow[idx + 1];
      const b = currRow[idx + 2];
      const a = currRow[idx + 3];

      let newA = a;
      if (r > 240 && g > 240 && b > 240) {
        newA = 0;
      }

      newRaw[rowStart + 1 + idx] = r;
      newRaw[rowStart + 1 + idx + 1] = g;
      newRaw[rowStart + 1 + idx + 2] = b;
      newRaw[rowStart + 1 + idx + 3] = newA;
    }

    prevRow.set(currRow);
  }

  const newIdatData = zlib.deflateSync(newRaw);

  // Write new PNG
  const chunks = [];
  chunks.push(buffer.subarray(0, 8)); // PNG signature

  // IHDR chunk (pos 8 to pos 8 + 12 + 13)
  const ihdrLen = buffer.readUInt32BE(8);
  chunks.push(buffer.subarray(8, 8 + 12 + ihdrLen));

  // New IDAT chunk
  const idatHeader = Buffer.alloc(8);
  idatHeader.writeUInt32BE(newIdatData.length, 0);
  idatHeader.write('IDAT', 4, 4, 'ascii');
  
  const idatCrcBuf = Buffer.alloc(4);
  const idatTypeAndData = Buffer.concat([Buffer.from('IDAT', 'ascii'), newIdatData]);
  idatCrcBuf.writeUInt32BE(crc32(idatTypeAndData), 0);

  chunks.push(idatHeader);
  chunks.push(newIdatData);
  chunks.push(idatCrcBuf);

  // IEND chunk
  const iendBuf = Buffer.from([0, 0, 0, 0, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  chunks.push(iendBuf);

  fs.writeFileSync(outputPath, Buffer.concat(chunks));
  console.log('Successfully created transparent PNG:', outputPath);
}

processPng('src/imports/devices-mockup.png', 'src/imports/devices-mockup-transparent.png');
