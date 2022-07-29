const byteOperations = require('./byte-operations');
const divisor = '100000100110000010001110110110111';

module.exports.crcCalculator = (decimal) => {
  let byteString = byteOperations.decimalToBinary(decimal);
  let count = 0;

  byteString = byteOperations.byteCompletion(byteString);
  byteString = byteOperations.byteStringRightLengthen(byteString, divisor.length);

  while (count < 8) {
    if (byteString[0] === '0') {
      byteString = byteString.slice(1);
      count++;
    }
    else {
      byteString = byteOperations.byteStringRightLengthen(byteString, divisor.length);
      byteString = byteOperations.binaryXor(byteString, divisor);
    }
  }

  byteString = byteOperations.byteStringRightLengthen(byteString, 32);
  byteString = byteOperations.byteStringRightShorten(byteString, 32);

  const crcTableElement = byteOperations.binaryToHex(byteString);

  return crcTableElement;
};
