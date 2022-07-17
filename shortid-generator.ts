const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const randomNumber = 1422498999669;

export function generateLongUrlId(n: number) {
  let shortId = '';

  let shiftedId = (n * randomNumber) % Math.pow(base.length, 7);

  while (shiftedId) {
    shortId = base[shiftedId % base.length] + shortId;
    shiftedId = parseInt((shiftedId / base.length).toString());
  }

  return shortId.padStart(7, base[0]);
}
