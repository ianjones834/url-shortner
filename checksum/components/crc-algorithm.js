const table = require('./crc-table');
const byteOp = require('./byte-operations');

module.exports.crcAlgorithm = (dataBuf) => {
  const crcTable = table.crcTable();

  let crcValue = 0;
  let newByte = 0;

  for (let byteIndex = 0; byteIndex < dataBuf.length; byteIndex++) {
    newByte = byteOp.byteCompletion(byteOp.decimalToBinary(dataBuf[byteIndex]));
    crcValue = byteOp.byteCompletion(byteOp.decimalToBinary(crcValue));

    newByte = byteOp.byteStringRightLengthen(newByte, 32);
    crcValue = byteOp.byteStringLeftLengthen(crcValue, 32);

    const remainder = byteOp.binaryXor(newByte, crcValue);

    const remainderSignificantByte = byteOp.byteStringRightShorten(remainder, 8);
    const crcTableIndex = byteOp.binaryToDecimal(remainderSignificantByte);

    let crcTableValue = byteOp.byteCompletion(byteOp.hexToBinary(crcTable[crcTableIndex]));

    let crcShortened = byteOp.byteStringLeftShorten(crcValue, 24);
    crcShortened = byteOp.byteCompletion(crcShortened);

    crcTableValue = byteOp.byteStringLeftLengthen(crcTableValue, 32);
    crcShortened = byteOp.byteStringRightLengthen(crcShortened, 32);

    crcValue = byteOp.binaryXor(crcShortened, crcTableValue);
  }

  return '0x' + byteOp.binaryToHex(crcValue).toUpperCase();
};
