'use strict';

const reader = require ('./lib/reader.js');

reader.readFile(`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`);
// node reader.js ../assets/bitmap.bmp black ./limitedchange.bmp

