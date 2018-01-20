'use strict';

const reader = require ('./lib/reader.js');

function cliInput() {
  if (process.argv.length < 5) {
    console.log(`
      HELP:  To use the 'transformBmp' node command:\n
      > node transformBmp <bmp origin filepath> <transformation> <bmp destination filepath>
    `);
    return;
  }

  reader.readFile(`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`);
}

cliInput();

// node transformBmp ./assets/bitmap.bmp black ./limitedchange.bmp
