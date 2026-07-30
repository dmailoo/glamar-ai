try {
  const sharp = require('sharp');
  console.log('Sharp module is available!');
} catch (e) {
  console.log('Sharp module is NOT installed:', e.message);
}
