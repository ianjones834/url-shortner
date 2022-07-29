const r = require('./range');
const calculator = require('./crc-calculator');

module.exports.crcTable = () => {

  const byteArray = r.range(0, 255);
  const crcLookUpTable = [];

  for (const byte in byteArray) {
    crcLookUpTable[byte] = calculator.crcCalculator(byteArray[byte]);
  }

  return crcLookUpTable;
};
