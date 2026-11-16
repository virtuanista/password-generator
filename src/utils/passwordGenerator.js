import { randomInt } from 'node:crypto';

const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * Genera una contraseña con el generador criptográfico de Node (crypto.randomInt),
 * no con Math.random, que es predecible.
 * Garantiza al menos un carácter de cada grupo elegido.
 */
export function generatePassword({ length = 12, useNumbers = false, useSymbols = false } = {}) {
  const groups = [LETTERS];
  if (useNumbers) groups.push(NUMBERS);
  if (useSymbols) groups.push(SYMBOLS);

  if (!Number.isInteger(length) || length < groups.length || length > 1024) {
    throw new RangeError(`La longitud debe ser un entero entre ${groups.length} y 1024.`);
  }

  const all = groups.join('');
  const chars = groups.map((g) => g[randomInt(g.length)]);
  while (chars.length < length) chars.push(all[randomInt(all.length)]);

  // Mezcla de Fisher-Yates para que los caracteres obligatorios no queden al principio.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

/** Entropía aproximada en bits: longitud × log2(tamaño del alfabeto). */
export function entropyBits({ length = 12, useNumbers = false, useSymbols = false } = {}) {
  const size = LETTERS.length + (useNumbers ? NUMBERS.length : 0) + (useSymbols ? SYMBOLS.length : 0);
  return Math.round(length * Math.log2(size));
}
