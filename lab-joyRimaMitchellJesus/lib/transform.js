'use strict';


function invert(data) {
  for (let i = 0; i < data.pixelArray.length; i++) {
    data.pixelArray[i] = 255 - data.pixelArray[i];            
  }

  return data;
}

function greyscale(data) {
  for (let i = 0; i < data.pixelArray.length / 4; i += 4) {
    let grey = (data.pixelArray[i] + data.pixelArray[i + 1] +data.pixelArray[i + 2]) / 3;
    data.pixelArray[i] = grey;
    data.pixelArray[i + 1] = grey;
    data.pixelArray[i + 2] = grey;
  }
  return data;
}

function randomize(data) {
  for (let i = 0; i < data.pixelArray.length; i++) {
    data.pixelArray[i] = Math.floor(Math.random() * Math.floor(255));
  }
  return data;
}

module.exports = {invert, greyscale, randomize};
