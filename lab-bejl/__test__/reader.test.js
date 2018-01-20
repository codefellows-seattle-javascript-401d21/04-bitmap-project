'use strict';

const reader = require ('../lib/reader.js');

describe('Reader Module', function() {
  describe('#reader', function() {
    it(`should return an error if original file is not .bmp`, () => {
      function ender(){
        reader.readFile('./assets/bitmap.js','darkenDarks','./assets/test.bmp');
      };
      expect(ender).toThrow();
    });
    it('should return an error if transform type does not exist', (done) => {
      function bill(){
        reader.readFile('./assets/bitmap.bmp','darkenDarkslll','./assets/test.bmp');
      };
      expect(bill).toThrow();
      done();
    });
    it(`should return an error if destination file is not .bmp`, () => {
      function liza(){
        reader.readFile('./assets/bitmap.js','darkenDarks','./assets/test.bmp');
      };
      expect(liza).toThrow();
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
