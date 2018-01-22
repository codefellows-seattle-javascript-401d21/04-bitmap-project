# BITMAP APP

By: Joy, Rima, Mitchell, & Jesus

Code Fellows JavaScript 401

## HOW TO

1. Git clone this repository.

2. In your terminal, navigate to the lab-joyRimaMitchellJesus folder and run:

```npm install```

3. In your terminal, run:

```node```

4. In the node REPL run the following line:

```const reader = require('./lib/reader');```

5. Transform bitmap images using the following format:

```reader.read(input-path, output-path, transform-name);```

**AVAILABLE TRANSFORM NAMES**: invert, greyscale, randomize

All arguments should be strings. Example:

```reader.read('./asset/bitmap.bmp', './asset/inverted-bitmap.bmp', 'invert');```

6. Your transformed photo will be at your output path!

## MODULES

### reader.js

#### reader.read(input-path, output-path, transform-name)

* Takes in three arguments: input path of the image, output path of the transformed image, and the type of transform

* Type error validation and input path validation

* Passes data from input path image to bitmap.bitmap, returns the pixel array to modify

* Validates for valid transform name

* Writes the file using the transform module to the output path

* Logs success message or output path error validation

### bitmap.js

#### bitmap.bitmap(data)

* Takes in buffer data from the reader module and initializes variables with the data object

* The image object has the following properties: 

  * allData: raw buffer data from the image

  * sig: the bitmap signature

  * fileSize: the file size in bytes

  * offset: denotes the end location of the color table and where the pixel array begins

  * pixelArray: creates a shortcut to directly modify the color table

### transform.js

#### transform.invert(data)

* Takes in the pixel array data passed in through the reader function 

* Modifies the RGB value to its inverse in the color spectrum

* Returns the modified object

#### transform.greyscale(data)

* Takes in the pixel array data passed in through the reader function 

* Averages the RGB value of each pixel and assigns the averaged value to the RGB of each pixel in order to make the image greyscale

* Returns the modified object

#### transform.randomize(data)

* Takes in the pixel array data passed in through the reader function 

* Modifies the RGB value of each pixel in the color table to a random value

* Returns the modified image object

## TESTS

### reader.test.js

* Test 1: Checks to make sure all arguments are strings

* Test 2: Checks for valid input paths

* Test 3: Checks for a valid output path

* Test 4: Checks for a valid transform name

* Test 5: Checks checks that new file is written to the output path

### bitmap.test.js

* Test 1: Checks that bmp is not undefined

* Test 2: Checks that bmp is not NULL

* Test 3: Checks that bmp is an object

* Test 4: Checks that bmp.allData is an object

* Test 5: Checks that bmp.AllData.sig is a string

* Test 6: Checks that bmp.fileSize is a number

* Test 7: Checks that bmp.offset is a number

* Test 8: Checks that bmp.width is a number

* Test 9: Checks that bmp.height is a number

* Test 10: Checks that bmp.pixelArray is an object

### transform.test.js

* Test 1: Checks to make sure  the invert method works correctly

* Test 2: Checks to make sure the pixel array data is a bitmap

* Test 3: Checks to throw error if bitmap has no pixel array

* Test 4: Checks to make sure the grayscale method works correctly

* Test 5: Checks to make sure the randomize method has valid inputs

* Test 6: Checks to make sure the bitmap data has a pixel array