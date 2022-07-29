module.exports.binaryXor = (dividend, divisor) => {
  const dividendArray = dividend.split('');
  const divisorArray = divisor.split('');

  for (const i in dividendArray) {

    if (divisorArray[i] === dividendArray[i]) {
      dividendArray[i] = '0';
    }
    else {
      dividendArray[i] = '1';
    }
  }

  dividend = dividendArray.join('');

  return dividend;
};

module.exports.hexToBinary = (hex) => {
  return parseInt(hex, 16).toString(2);
};

module.exports.binaryToHex = (binary) => {
  return parseInt(binary, 2).toString(16);
};

module.exports.decimalToBinary = (decimal) => {
  return decimal.toString(2);
};

module.exports.decimalToHex = (decimal) => {
  return decimal.toString(16);
};

module.exports.binaryToDecimal = (binary) => {
  return parseInt(binary, 2);
};
module.exports.byteCompletion = (byteString) => {
  while (byteString.length < 8) {
    byteString = '0' + byteString;
  }

  return byteString;
};

module.exports.byteStringRightLengthen = (byteString, len) => {
  while (byteString.length < len) {
    byteString = byteString + '0';
  }

  return byteString;
};

module.exports.byteStringLeftLengthen = (byteString, len) => {
  while (byteString.length < len) {
    byteString = '0' + byteString;
  }

  return byteString;
};

module.exports.byteStringRightShorten = (byteString, len) => {
  while (byteString.length > len) {
    byteString = byteString.slice(0, -1);
  }

  return byteString;
};

module.exports.byteStringLeftShorten = (byteString, len) => {
  while (byteString.length > len) {
    byteString = byteString.slice(1);
  }

  return byteString;
};
