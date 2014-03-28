'use strict';
var util = require('util'),
  path = require('path'),
  yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  fse = require('fs-extra'),
  exec = require('child_process').exec;

var LeafletGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          callback : function(){
            this.emit('depsInstalled');
          }.bind(this)
        });
      }
    });

    
    this.on('depsInstalled', function(){
      console.log('copy leaflet dependencies ...');
      this.spawnCommand('cp' , ['node_modules/leaflet/dist/leaflet.js', 'app/lib/scripts/leaflet.js']);
      this.spawnCommand('cp' , ['node_modules/leaflet/dist/leaflet.css', 'app/lib/styles/leaflet.css']);
      fse.copy('node_modules/leaflet/dist/images', 'app/lib/images', function(err){
        if (err) return console.error(err);
        // successfully copied leaflet files
      });

    }.bind(this));
 
  },


  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.leafletWelcome());

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Leaflet generator.'));

    var prompts = [{
      name: 'appName',
      message: 'What\'s the name of your application?',
      default: 'Map Application'
    },{
      type: 'confirm',
      name: 'showHeader',
      message: 'Do you want to display a header above the map?',
      default: true
    },{
      type: 'confirm',
      name: 'topoJson',
      message: 'Do you want to add TopoJSON support?',
      default: true
    },{
      type: 'confirm',
      name: 'jquery',
      message: 'Do you want to include jQuery?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.showHeader = props.showHeader;
      this.topoJson = props.topoJson;
      this.jquery = props.jquery;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/lib');
    this.mkdir('app/styles');
    this.mkdir('app/scripts');
    this.mkdir('app/images');
    /* folders for leaflet stuff */
    this.mkdir('app/lib/styles');
    this.mkdir('app/lib/scripts');
    this.mkdir('app/lib/images');
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('index.html', 'app/index.html');
    this.template('style.css', 'app/styles/main.css');
    this.template('script.js', 'app/scripts/main.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
    this.copy('robots.txt', 'app/robots.txt');
  },

  leafletWelcome : function(){
    return  '\n    _              _   _   ' +
            '\n \\_|_)            | | | |  ' +
            '\n   |     _   __,  | | | |  _ _|_ ' + 
            '\n  _|    |/  /  |  |/  |/  |/  |' +
            '\n (/\\___/|__/\\_/|_/|__/|__/|__/|_/' +
            '\n                  |\\            ' +
            '\n                  |/             ' +
            '\n';
  }
});

module.exports = LeafletGenerator;