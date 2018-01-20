'use strict';


const reading = module.exports = {};
// const Bmp = require('./bitmap');

reading.reverseImage = function(bmp, callback) {
  let test = bmp.pixelArray.reverse();
  bmp.pixelArray = test;
  // console.log(newImage);
  callback(null, bmp);
};

reading.randomImage = function(bmp, callback) {
  // console.log(bmp.pixelArray);
  let orginal = bmp.pixelArray;
  let food = [];
  for (let i = 0; i < 3; i++) {
    food = orginal.swap64();
  }
  bmp.pixelArray = food;
  callback(null, bmp);
};

reading.testRandom = function(bmp, callback) {
  console.log('start',bmp);
  let orginal = new Uint8Array(bmp.pixelArray);
  // console.log('old', orginal);
  for (let i in orginal) {
    let newNum = Math.floor(Math.random() * (100 - 1) + 1);
    orginal[i] = newNum;
  }
  let final = Buffer.from([...orginal]);
  bmp.pixelArray = final;
  console.log(bmp);
  callback(null, bmp);
};

reading.removesColors = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp.pixelArray[i] = bmp.pixelArray[i + 2];
    bmp.pixelArray[i + 1] = bmp.pixelArray[i + 2];
  }
  callback(null, bmp);
};

reading.removeBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp.pixelArray[i] = bmp.pixelArray[i + 1];
    bmp.pixelArray[i + 1] = bmp.pixelArray[i + 1];
  }
  callback(null, bmp);
};

reading.boostBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i] = 255;
  }
  callback(null, bmp);
};

reading.boostGreen = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 1] = 255;
  }
  callback(null, bmp);
};

reading.boostRed = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 2 ] = 255;
  }
  callback(null, bmp);
};

reading.testApla = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 5 ] = 0.1;
  }
  callback(null, bmp);
};
