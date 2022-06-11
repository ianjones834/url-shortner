const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let randomNumber = 1422498999669;

module.exports = () => {
  let shortIds = [];

  for (let i = 1; i <= 100; i++) {
    let shortId = generateShortId(i);
    shortIds.push(shortId);
  }

  return shortIds
};

function generateShortId(id) {
  let shortId = '';

  let shiftedId = (id * randomNumber) % Math.pow(base.length, 7);

  while (shiftedId) {
    shortId = base[shiftedId % base.length] + shortId;
    shiftedId = parseInt(shiftedId / base.length);
  };

  return shortId.padStart(7, base[0]);
};