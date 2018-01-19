'use strict';

const transform = module.exports = {};
const fs = require('fs');

transform.black = function(input, callback) {
  //gain?
  for (let x = 0; x < input.pixelArray.length; x++) {
    if (input.pixelArray[x]>50) {
      input.pixelArray[x]=input.pixelArray[x] - 50;
    }
  };
  // //gain?
  // for (let x = 0; x < input.pixelArray.length; x++) {
  //     input.pixelArray[x]=input.pixelArray[x]-100;
  // }
  // //invert
  // for (let x = 0; x < input.pixelArray.length; x++) {
  //     input.pixelArray[x]=255-input.pixelArray[x];
  // }
  //noise
  // for (let x = 0; x < input.pixelArray.length; x++) {
  //     input.pixelArray[x]=input.pixelArray[x]-Math.floor(256*Math.random());
  // }

  fs.writeFile('./limitedchange.bmp', input.allData, (err, data) => {
    if (err) console.log(err);
    return data;
  });
  callback(null, input);
};
