'use strict';

const reading = require('./reader');
const Bmp = require('./bitmap');
const trans = require('./transform.js');

let filenamein = process.argv[2];
let filenameout = process.argv[3];
let transform = process.argv[4];



//write code like "node, filename, image name, new file name, function to call'
reading.read('../assets/' + filenamein + '.bmp', (err, fileData) => {
  if (err) {
    console.error(err);
    return err;
  }
  trans[transform](new Bmp(fileData), (err, bmp) => {
    if (err) {
      console.error(err);
      return err;
    }
    reading.write(bmp.allData, '../assets/' + filenameout + '.bmp', (err) => {
      if (err) {
        console.error(err);
        return err;
      }
      return 'file was writen';
    });
  }
  );
});
