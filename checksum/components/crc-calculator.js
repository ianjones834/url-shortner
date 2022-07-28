const xor = require('./binaryxor');
const divisor = '100000100110000010001110110110111';

module.exports.crcCalculator = (byte) => {
  let byteString = byte.toString(2);
  const byteLength = byteString.length;

  let count = 0;

  while (count < byteLength) {
    if (byteString[0] === '0') {
      byteString = byteString.slice(1);
      count++;
    }
    else {
      byteString = xor.binaryXor(byteString, divisor, false);
    }

  }

  while (byteString.length < 32) {
    byteString = byteString + '0';
  }

  const crcByte = parseInt(byteString, 2);

  return crcByte;
};
