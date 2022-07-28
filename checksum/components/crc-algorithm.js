const table = require('./crc-table');
const xor = require('./binaryxor');

module.exports.crcAlgorithm = (dataBuf) => {
  const crcTable = table.crcTable();

  let crcValue = 0;

  for (let byteIndex = 0; byteIndex < dataBuf.length; byteIndex++) {
    const newDividendBinary = xor.binaryXor(dataBuf[byteIndex].toString(2), crcValue.toString(2), true);

    const mostSignifianctDividend = mostSignificantByte(newDividendBinary);
    const crcValueBinary = bitShiftLeft(crcValue.toString(2));

    const crcIndex = parseInt(mostSignifianctDividend, 2);
    crcValue = xor.binaryXor(crcTable[crcIndex].toString(2), crcValueBinary, true);
  }

  return parseInt(crcValue, 2).toString(16);
};

function mostSignificantByte(byte) {
  while (byte.length > 8) {
    byte = byte.slice(0, -1);
  }

  return byte;
}

function bitShiftLeft(crc) {
  for (let i = 0; i < 8; i++) {
    crc = crc.slice(0, -1);
  }

  return crc;
}
