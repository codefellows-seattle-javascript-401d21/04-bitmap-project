'use strict';

/* const reader = require('./lib/reader'); */
console.log(`
====================== BITMAP APP ======================
            By: Joy, Rima, Mitchell, & Jesus
               Code Fellows JavaScript 401

                       [ HOW TO ]
1. From the lab-joyRimaMitchellJesus folder,
   run node in your terminal and enter the following line:
    const reader = require('./lib/reader');

2. Transform bitmap images using the following format:
    reader.read(input-path, output-path, transform-name);

   All arguments should be strings.

              [ AVAILABLE TRANSFORM NAMES ]
              invert, greyscale, randomize
`);

//#!/usr/bin/env node

/**
 * Module dependencies.
 */

/*
var program = require('commander');

program
  .version('1.1.0')
  .option('-i, --input <path>', 'Add a file path you want to transform')
  .option('-o, --output <path>', 'Add a file path you want to output')
  .option('-t, --transform <transform>', 'Add invert or greyscale or randomize')
  .parse(process.argv);

console.log('We are going to ');
if (program.transform === 'invert') console.log('invert ');
if (program.transform === 'greyscale') console.log('greyscale ');
if (program.transform === 'randomize') console.log('randomize ');
if (program.input) console.log(program.input);
if (program.output) console.log(program.output);

reader.read(program.input, program.output, program.transform);
*/