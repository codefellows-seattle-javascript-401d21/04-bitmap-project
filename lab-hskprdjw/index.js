'use strict';

// read before doing anything!
// to run a test, navagate to the base file(lab-hskprdjw) and then run 'npm test' and it should build the file and do the tests
// you can also do the CLI by doing this "node index.js bitmap test randomImage"
// in that set up, change only the 'test' as its the NEW FILE NAME and "randomImage" to a new transform function.


const build = module.exports = {};
const reading = require('./lib/reader');
const Bmp = require('./lib/bitmap');
const trans = require('./lib/transform.js');


build.buildImage = function(inputs) {
  if (!inputs) return null;
  let filenamein = inputs[2];
  let filenameout = inputs[3];
  let transform = inputs[4];

  reading.read(`${__dirname}/assets/${filenamein}.bmp`, (err, fileData) => {
    if (err) {
      console.error(err);
      return err;
    }
    trans[transform](new Bmp(fileData), (err, bmp) => {
      if (err) {
        console.error(err);
        return err;
      }
      reading.write(bmp.allData, `${__dirname}/assets/${filenameout}.bmp`, (err) => {
        if (err) {
          console.error(err);
          return err;
        }
      });
    }
    );
  });
  console.log('image was built');
  return 'file was writen';
};

//write code like "node, filename, image name, new file name, function to call'
build.buildImage(process.argv);
