import assert from 'node:assert/strict';
import { generatePassword, entropyBits } from './src/utils/passwordGenerator.js';

for (let i = 0; i < 500; i++) {
  const p = generatePassword({ length: 8, useNumbers: true, useSymbols: true });
  assert.equal(p.length, 8);
  assert.match(p, /[a-zA-Z]/);
  assert.match(p, /[0-9]/);
  assert.match(p, /[^a-zA-Z0-9]/);
}
assert.match(generatePassword({ length: 30 }), /^[a-zA-Z]{30}$/);
assert.throws(() => generatePassword({ length: 2, useNumbers: true, useSymbols: true }), RangeError);
assert.throws(() => generatePassword({ length: 0 }), RangeError);
assert.equal(entropyBits({ length: 16 }), 91);
console.log('Todas las pruebas pasan ✔');
