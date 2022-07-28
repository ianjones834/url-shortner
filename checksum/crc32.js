const fs = require('fs');

const divisor = '100011101';

module.exports.checksumFinder = (string) => {
  const dataBuffer = fs.readFileSync(string);
  const result = crcAlgorithm(dataBuffer);

  return result;
};

console.log(this.checksumFinder('./test.txt'));

function crcAlgorithm(dataBuf) {
  const crcLookUpTable = crcTable();

  let byteIndex = 0;
  let crcValue = '00000000';

  while (dataBuf[byteIndex]) {
    crcValue = binaryXor(crcLookUpTable[dataBuf[byteIndex]].toString(2), crcValue.toString(2));
    byteIndex++;
  }

  return parseInt(crcValue, 2).toString(16);
}

function crcTable() {

  const byteArray = range(0, 255);
  const crcLookUpTable = [];

  for (const byte in byteArray) {
    crcLookUpTable.push(crcCalculator(byteArray[byte]));
  }

  return crcLookUpTable;
}

function crcCalculator(byte) {
  let byteString = byte.toString(2);
  const byteLength = byteString.length;

  let count = 0;

  while (count < byteLength) {
    if (byteString[0] === '0') {
      byteString = byteString.slice(1);
      count++;
    }
    else {
      byteString = binaryXor(byteString, divisor);
    }
  }

  while (byteString.length < 8) {
    byteString = byteString + '0';
  }

  while (byteString.length > 9) {
    byteString = byteString.slice(1);
  }

  const crcByte = parseInt(byteString, 2);

  return crcByte;
}

function range(start, end) {
  const rangeArray = [];

  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}

function binaryXor(dividend, divisor) {
  const divisorArray = divisor.split('');

  while (dividend.length < divisorArray.length) {
    dividend = dividend + '0';
  }

  const dividendArray = dividend.split('');

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
}
