#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { generatePassword, entropyBits } from './utils/passwordGenerator.js';

const program = new Command();

program
  .name('password-generator')
  .version('1.1.0')
  .description('Generador de contraseñas seguras')
  .option('-l, --length <número>', 'longitud de la contraseña', '12')
  .option('-n, --numbers', 'incluir números')
  .option('-s, --symbols', 'incluir símbolos especiales')
  .option('-c, --count <número>', 'cuántas contraseñas generar', '1')
  .parse(process.argv);

const options = program.opts();
const config = {
  length: Number(options.length),
  useNumbers: Boolean(options.numbers),
  useSymbols: Boolean(options.symbols),
};
const count = Number(options.count);

try {
  if (!Number.isInteger(count) || count < 1 || count > 100) throw new RangeError('--count debe estar entre 1 y 100.');
  const passwords = Array.from({ length: count }, () => generatePassword(config));
  console.log(chalk.green(`\nContraseña${count > 1 ? 's' : ''} generada${count > 1 ? 's' : ''}:`));
  for (const p of passwords) console.log(chalk.yellow(p));
  const bits = entropyBits(config);
  const nivel = bits >= 100 ? chalk.green('muy fuerte') : bits >= 70 ? chalk.green('fuerte') : bits >= 50 ? chalk.yellow('aceptable') : chalk.red('débil');
  console.log(chalk.gray(`\nEntropía: ~${bits} bits (${nivel}${chalk.gray(')')}\n`));
} catch (err) {
  console.error(chalk.red(`Error: ${err.message}`));
  process.exit(1);
}
