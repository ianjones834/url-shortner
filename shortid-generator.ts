const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const randomNumber = 1422498999669;

export function generateLongUrlId(n: number) {
  const shiftedId = (n * randomNumber) % Math.pow(base.length, 7);
  const longUrlId = _generateLongUrlId(shiftedId).padStart(7, base[0]);

  return longUrlId;
}

function _generateLongUrlId(n: number): string {
  if (n === 0) {
    return '';
  }

  const char = base[n % base.length];
  n = parseInt((n / base.length).toString());

  return _generateLongUrlId(n) + char;
}
