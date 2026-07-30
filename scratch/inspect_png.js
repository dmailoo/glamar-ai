import fs from 'fs';
import zlib from 'zlib';

function removeWhiteBg(inputPath, outputPath) {
  const buffer = fs.readFileSync(inputPath);
  
  // Find IDAT chunks
  let pos = 8; // Skip PNG header
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (pos < buffer.length) {
    const length = buffer.readUInt32BE(pos);
    const type = buffer.toString('ascii', pos + 4, pos + 8);
    
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(pos + 8);
      height = buffer.readUInt32BE(pos + 12);
      bitDepth = buffer[pos + 16];
      colorType = buffer[pos + 17];
    } else if (type === 'IDAT') {
      idatChunks.push(buffer.subarray(pos + 8, pos + 8 + length));
    }
    pos += 12 + length;
  }

  console.log({ width, height, bitDepth, colorType });
}

removeWhiteBg('src/imports/devices-mockup.png', 'src/imports/devices-mockup-transparent.png');
