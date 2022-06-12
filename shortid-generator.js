const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let randomNumber = 1422498999669;

module.exports = (n) => {
  let shortId = '';

  let shiftedId = (n * randomNumber) % Math.pow(base.length, 7);

  while (shiftedId) {
    shortId = base[shiftedId % base.length] + shortId;
    shiftedId = parseInt(shiftedId / base.length);
  };

  return shortId.padStart(7, base[0]);
};