const fs = require('fs');
const path = require('path');

const importsDir = path.resolve(__dirname, '../src/imports');
const files = fs.readdirSync(importsDir);

console.log('Files in imports directory:');
files.forEach(f => {
  const stat = fs.statSync(path.join(importsDir, f));
  if (stat.isFile()) {
    console.log(`- ${f}: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  }
});
