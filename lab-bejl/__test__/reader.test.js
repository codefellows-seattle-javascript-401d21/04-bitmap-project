'use strict';

const reader = require ('../lib/reader.js');

describe('Reader Module', function() {
  describe('#reader', function() {
    // it('expects the reader module path and transformation type to be a string', function() {
    //   expect(reader.readFile([123])).toBe(null);
    // });

    it('expects the reader module to return an error if transform type does not exist', (done) => {
      function bill(){
        reader.readFile('./assets/bitmap.bmp','darkenDarkslll','./assets/test.bmp');
      }
      expect(bill()).toThrowError();
      done();
    });
  });

  // it('expects the reader module to return image path if error null', (done) => {
  //   reader.readFile((err,data) => {
  //     if(
  //     expect('../assets/bitmap.bmp','transform.blue').toThrowError();
  //     done();
  //   });
  // });

  // it('expects the reader module when given appropriate arguments should return a null argument for error ', (done) => {
  //   reader.readFile(path, transform, (err,data) => {
  //     expect(err).toBeNull();
  //     done();
  //  });
  //});
  //});
});