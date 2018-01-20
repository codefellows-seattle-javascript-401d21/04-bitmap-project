'use strict';

const read = require('./reader');
console.log(process.argv[2]);
let filenamein = process.argv[2];
let filenameout = process.argv[3];
let transform = process.argv[4];


console.log('filename in index before function call', filenamein);
read.readWrite(filenamein, filenameout, transform);
