'use strict';


const fs = require('fs');
const Bmp = require('./bitmap');
const trans = require('./transform.js');

const reading = module.exports = {};

reading.readWrite = function(filenamein, filenameout, transform) {

  fs.readFile(`${filenamein}`, (err, data) => {
    if (err) {
      console.error(err);
    }
    let bmp = new Bmp(data);
    // console.log('start',bmp);
    // console.log(bmp.colorArray);

    // if (transform ==='testRandom') {
    //   trans.reverseImage(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }
    if (transform ==='testRandom') {
      trans.randomImage(bmp, (err, data) => {
        fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
      });
    }

    // if (transform ==='boostRed') {
    //   trans.boostRed(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }
    //
    // if (transform ==='boostGreen') {
    //   trans.boostGreen(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err): undefined);
    //   });
    // }
    //
    // if (transform === 'removeBlue') {
    //   trans.removeBlue(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err): undefined);
    //   });
    // }
    //
    // if (transform === 'randomImage') {
    //   trans.randomImage(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }
    //
    // if (transform === 'test') {
    //   trans.test(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }
    //
    // if(transform ==='testAlpha') {
    //   trans.testAlpha(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }
    //
    // if(transform ==='mirror') {
    //   trans.mirror(bmp, (err, data) => {
    //     fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
    //   });
    // }

  });
};

// reading.readWrite();
