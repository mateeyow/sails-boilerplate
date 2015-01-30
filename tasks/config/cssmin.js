/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

  var users = require('../pipeline')
    , cssmin = {};

  for (var key in users) {
    var css = 'css'+key;

    cssmin[css] = {
      src: ['.tmp/public/concat/' + key + '.css'],
      dest: '.tmp/public/min/' + key + '.min.css'
    }
  };

  grunt.config.set('cssmin', cssmin);

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
