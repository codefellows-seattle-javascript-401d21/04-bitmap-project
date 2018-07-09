## 04-bitmap-project
This project is a bitmap (.bmp) transformer CLI. It reads a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file. This project can perform 4 transformations.

This project using a modular pattern  The entry point is the index.js file. Navigate to the "lib' folder to run the project.  The CLI (comand line interface) format is "node index.js 'source filename w/o extension' 'output filename w/o extension'.  The source and target files must be .bmp files.

There are three modules:
1. Reader.js which reads the source file and writes the output file.  The read function - read.read - takes in two parameters - path and a callback, to use with fs.readFile .  The write function - read.write - takes in three parameters -  newData, newFilePath and a callback, to use with fs.writeFile.
bitmap.js which reads the image
2. Bitmap.js has one function which takes in one parameter - the buffer from the source file - and builds an object with 8 key-value pairs.  The keys are allData, sig, fileSize, offset, width, height, pixelArray and colorArray. The keys are reference this image of the bitmap file format. https://en.wikipedia.org/wiki/BMP_file_format#/media/File:BMPfileFormat.png
3. Transform.js which performs the transformations with 4 difference functions, each with two parameters - bmp, callback.
- The reverseImage function - transform.reverseImage - "reverses" the image so that the botton left corner become the top right.
- The removeBlue function - transform.removeBlue - takes the blue out of the image by setting every fourth position in the color table to 0.
- The boostBlue function - transform.boostBlue - increases the blue values of the image by setting every fourth position in the color table to 200.
- The randomImage function - transform.randomImage - creates an "impressionistic" image by replacing each of the values in the pixelArray with a random number between 0-31.

###Getting Started
To get use this project, fork this repository.  Running this project requires use of NodeJS.  A download may be downloaded at nodejs.org.

###Prerequisites
This project requires NodeJS.
Use npm (Node Package Manger) to manager dependencies. Type "npm init" to initialize the project.
Testing for this project requires Jest and eslint.  Use npm (Node Package Manager) to install 'npm i jest, eslint'.

###Running the tests
Tests are run using jest. Documentation is available at https://facebook.github.io/jest/Explain.

Navigate to the lab-hskprdjw folder.  Run tests with "npm test".

The following tests are run"
- 'test to see if anything was passed into the function' for the transform function input.
- 'test to see if the function worked and finished' for transform function output.
- 'test to see if a file was made and if it matches what i called it' for the reader function output.
- 'test to see if a file is there that am calling to be referenced' for the reader function input.


###Versioning
1.0.0

###Authors
Heath Smith, Roger Davenport, Joe Waine, Karen Perez

###License
This project is licensed under the MIT License.

###Acknowledgments
