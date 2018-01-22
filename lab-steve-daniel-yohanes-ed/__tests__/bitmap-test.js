'use strict';

const fs = require('fs');
const Bitmap = require('../lib/bitmap');
require('jest');


describe('Bitmap Module', function () {
  describe('#Bitmap', function () {
    it('Should return null if not provided a buffer', function () {
      expect(Bitmap()).toBeNull();
    });
    it('Should return a valid instance of Bitmap', function (done) {
      fs.readFile('assets/bitmap.bmp', (err, data) => {
        if (err) console.error(new Error(err));
        let bmp = Bitmap(data);
        expect(bmp).toBeInstanceOf(Bitmap);
        done();
      }, 25000);
    });
    it('Should return a valid instance of Bitmap', function (done) {
      fs.readFile('assets/bitmap.bmp', (err, data) => {
        if (err) console.error(new Error(err));
        let bmp = Bitmap(data);
        expect(bmp.allData).not.toBeNull();
        done();
      }, 25000);
    });
  });
});