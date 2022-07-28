const table = require('./crc-table');
const xor = require('./binaryxor');

module.exports.crcAlgorithm = (dataBuf) => {
  const crcLookUpTable = table.crcTable();

  let crcValue = 0;

  for (let byteIndex = 0; byteIndex < dataBuf.length; byteIndex++) {
    let binaryData = xor.binaryXor(dataBuf[byteIndex].toString(2), crcValue.toString(2), true);

    while (binaryData.length > 8) {
      binaryData = binaryData.slice(0, -1);
    }

    const data = parseInt(binaryData, 2);

    crcValue = crcLookUpTable[data];
  }

  return crcValue.toString(16);
};
