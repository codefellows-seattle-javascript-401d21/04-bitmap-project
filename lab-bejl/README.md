# BEJL (Bitmap Project)

**Author**: Bill, Ender, Jordan, Liza
**Version**: 1.0.0

## Overview
This is a bitmap transformer CLI. It reads a bitmap, transforms then writes it out in a new file.

### Operation:
To use the `transformBmp` node command:
$ node transformBmp <bmp origin filepath> <transformation> <bmp destination filepath>

Valid transformations include:
 +neon
 +invert
 +black
 +darkenDarks

For help, type: $ node transformBmp help

## Modules
Bitmap.js
--Number of parameters: 1 (buffer)
--Expected data: object constructor
--Behavior: create a bitmap

Reader.js
--Number of parameters: 3 (path, transformation, destination)
--Expected data: to be required in transformBMP.js
--Behavior: returns an error if path, transformation or destination is incorrect. Requires in fs, bitmap.js and transform.js.

Transform.js
--Number of parameters: 2 (bitmapData, transformation)
--Expected data: transforms bitmap to a new bitmap that is either black, inverted, neon, or darkenDarks
--Behavior: manipulates bitmap data. Requires in bitmap.js.

TransformBmp.js
--Number of parameters: none
--Expected data: this is the CLI, using node the user can passing an path, transformation type and destination path.
--Behavior: To use the 'transformBmp' node command:\n node transformBmp <bmp origin filepath> <transformation> <bmp destination filepath> - this will create a new bitmap.

## Architecture
Javascript
Node
Jest

## Change Log

01-20-2018 5:00pm - Application now has a fully-functional
