module.exports.binaryXor = (dividend, divisor, lookUp) => {

  if (lookUp) {
    while (dividend.length < 8) {
      dividend = '0' + dividend;
    }

    while (dividend.length < 32) {
      dividend = dividend + '0';
    }

    while (divisor.length < 32) {
      divisor = '0' + divisor;
    }
  }
  else {
    while (dividend.length < divisor.length) {
      dividend = dividend + '0';
    }
  }

  const divisorArray = divisor.split('');
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
};
