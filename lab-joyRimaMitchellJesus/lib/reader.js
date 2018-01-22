'use strict';

const fs = require('fs');
const bitmap = require('./bitmap');
const trans = require('./transform');
const reader = module.exports = {};


reader.read = (inputPath, outputPath, transformName) => {

  // check if passing arguments are all strings
  if (typeof(inputPath) !== 'string' || typeof(outputPath) !== 'string' || typeof(transformName) !== 'string') {
    return 'ERROR: Invalid Input - only string inputs are accepted';
  }

  try{
    // read a file
    var data = fs.readFileSync(inputPath);
  } catch (err) {
    return 'ERROR: Invalid Input Path'; 
  }

  // read BMP
  let bmp = new bitmap.bitmap(data);

  // setup and error validation for transform
  let transformBmp;
  if (transformName === 'invert' || transformName === 'inverse') transformBmp = trans.invert(bmp);
  else if (transformName === 'greyscale' || transformName === 'grayscale') transformBmp = trans.greyscale(bmp);
  else if (transformName === 'randomize' || transformName === 'random') transformBmp = trans.randomize(bmp);
  else {
    console.log('You have entered an invalid transform name. The parameters to this function are inputPath, outputPath, and transformName, where valid transform names are invert, greyscale, and randomize.');
    return 'ERROR: Invalid Transform Name';
  }

  try{
    // write a new file
    fs.writeFileSync(outputPath, transformBmp.allData);
    console.log(`Your bitmap at ${inputPath} has been modified using our ${transformName} function. The modified bitmap has been written to ${outputPath}.`);
    return 'SUCCESS: Transformed file created';
  } catch (err) {
    return 'ERROR: Invalid Output Path';
  }
};
