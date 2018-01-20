'use strict';

const read = require('./reader');
console.log(process.argv[2]);
let filenamein = process.argv[2];
let filenameout = process.argv[3];
let transform = process.argv[4];


//write code like (node, filename, image name to look at, result will be this image name, function to call)
read.readWrite('../assets/' + filenamein + '.bmp', '../assets/' + filenameout + '.bmp', transform);


//use this line to use any file path
// read.readWrite(filenamein, filenameout, transform);
