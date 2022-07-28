const fs = require('fs');
const algorithm = require('./components/crc-algorithm');

module.exports.checksumFinder = (string) => {
  const dataBuffer = fs.readFileSync(string);
  const result = algorithm.crcAlgorithm(dataBuffer);

  return result;
};

console.log(this.checksumFinder('./test.txt'));
