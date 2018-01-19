'use strict';

const transform = module.exports = {};
const fs = require('fs');

transform.black = function(input, callback) {
//   for (const value of input.allData.values()) {
//     // input[value] = 0;
//     console.log(input.allData[value]);
//   }
//   console.log('alldata',input);
  //   console.log('offset',input.offset);
  //   console.log('length',input.length);
  //   console.log('width',input.width);
  input.allData.fill(250, input.offset, input.length);
  fs.writeFile('./test2.bmp',input.allData, (err, data) => {
    if (err) console.log(err);
    return data;
  });
  callback(null, input);
};

