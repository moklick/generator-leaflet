# generator-leaflet

> [Yeoman](http://yeoman.io) generator that scaffolds out a very basic [leaflet](http://leafletjs.com) map application.

## Features
* basic map with a [stamen](http://maps.stamen.com) layer as default
* [TopoJSON](https://github.com/mbostock/topojson) support
* ready to go dev environment managed with gulp
* auto reload (gulp-connect)
* css, js and image minification (gulp-ccso, gulp-uglify, gulp-imagemin)

### Requirements

You need Yeoman in order to run the leaflet generator.
Install Yeoman with `npm install -g yo`

## Getting Started

- Install: `npm install -g generator-leaflet`
- Create Folder: `mkdir my-map-app && cd my-map-app`
- Scaffold App: `yo leaflet`
- Run `gulp` for building and `gulp watch` for preview

## Example

This is what you get, after building the app [Example Map Application](http://leaf-gen.moritzklack.com/). Moreover you can enable [TopoJSON](https://github.com/mbostock/topojson) support and jQuery if you need it.

## License

MIT
