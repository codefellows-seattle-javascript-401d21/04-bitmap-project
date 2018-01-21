'use strict';

const fs = require('fs');
const build = require('../index');
const transform = require('../lib/transform');
const Bmp = require('../lib/bitmap');
require ('jest');

// let setup = new Date();
// let time = setup.toUTCString();

let newPath = `${__dirname}/../assets/changed.bmp`;
let startPath = `${__dirname}/../assets/bitmap.bmp`;

describe('index.js module', function() {
  //these are good
  it('test to see if anything was passed into the function', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(transform.reverseImage()).toBe(null);
    expect(transform.removeBlue()).toBe(null);
    expect(transform.boostBlue()).toBe(null);
    expect(transform.randomImage()).toBe(null);
    expect(Bmp()).toBe(null);
    done();
  });
  it('test to see if the function worked and finished', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue'])).toBe('file was writen');
    done();
  });
  it('test to see if a file was made and if it matches what i called it', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(fs.existsSync(newPath)).toBe(true);
    done();
  });
  it('test to see if a file is there that am calling to be referenced', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(fs.existsSync(startPath)).toBe(true);
    done();
  });
});

describe('reader.js module', function() {
  // //these are good
  // it('test to see if anything was passed into the function', (done) => {
  //   build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
  //   expect(transform.reverseImage()).toBe(null);
  //   expect(transform.removeBlue()).toBe(null);
  //   expect(transform.boostBlue()).toBe(null);
  //   expect(transform.randomImage()).toBe(null);
  //   done();
  // });
  // it('test to see if the function worked and finished', (done) => {
  //   build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
  //   expect(build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue'])).toBe('file was writen');
  //   done();
  // });
  // it('test to see if a file was made and if it matches what i called it', (done) => {
  //   build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
  //   expect(fs.existsSync(newPath)).toBe(true);
  //   done();
  // });
  // it('test to see if a file is there that am calling to be referenced', (done) => {
  //   build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
  //   expect(fs.existsSync(startPath)).toBe(true);
  //   done();
  // });
});
