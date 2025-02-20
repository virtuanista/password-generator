#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { generatePassword } from './utils/passwordGenerator.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Generador de contraseñas seguras')
  .option('-l, --length <number>', 'longitud de la contraseña', '12')
  .option('-n, --numbers', 'incluir números')
  .option('-s, --symbols', 'incluir símbolos especiales')
  .parse(process.argv);

const options = program.opts();

const password = generatePassword({
  length: parseInt(options.length),
  useNumbers: options.numbers,
  useSymbols: options.symbols
});

console.log(chalk.green('\nContraseña generada:'));
console.log(chalk.yellow(password));
console.log();
