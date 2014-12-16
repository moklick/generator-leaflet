# generator-leaflet

> [Yeoman](http://yeoman.io) generator that scaffolds out a very basic [leaflet](http://leafletjs.com) map application.

## Features
* Basic map with a [stamen](http://maps.stamen.com) layer as default
* [TopoJSON](https://github.com/mbostock/topojson) support (optional)
* Dev environment managed with [gulp](http://gulpjs.com/)
* Auto reload (gulp-connect)

### Requirements

You need Yeoman in order to run the leaflet generator.
Install Yeoman with `npm install -g yo`

## Getting Started

- Install: `npm install -g generator-leaflet`
- Create Folder: `mkdir my-map-app && cd my-map-app`
- Scaffold App: `yo leaflet`
- Run `gulp` for building and `gulp watch` for preview

## Example

This is what you get, after building the app [Example Map Application](http://leaf-gen.moritzklack.com/) (the header is optional). Moreover you can enable [TopoJSON](https://github.com/mbostock/topojson) support and jQuery if you need it.

## License

The MIT License (MIT)

Copyright (c) [2014] [Moritz Klack]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
