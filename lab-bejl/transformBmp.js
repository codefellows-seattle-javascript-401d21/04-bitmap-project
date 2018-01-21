'use strict';

const reader = require ('./lib/reader.js');
const transform = require ('./lib/transform.js');

function cliInput() {
  if (process.argv.length < 5) {
    console.log(`
HELP: To use the 'transformBmp' node command:\n
> node transformBmp <bmp origin filepath> <transformation> <bmp destination filepath>\n
Transformations:\n\t${transform.validTransformations.join('\n\t')}
    `);
    return;
  }

  reader.readFile(`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`);
}

cliInput();
//node transformBmp ./__test__/assets/bitmap.bmp black ./__test__/assets/limitedchange.bmp
