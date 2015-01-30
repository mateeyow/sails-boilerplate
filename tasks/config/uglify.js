/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

  var users = require('../pipeline')
    , uglify = {};

  for (var key in users) {
    var js = 'css'+key;

    uglify[js] = {
      src: ['.tmp/public/concat/' + key + '.js'],
      dest: '.tmp/public/min/' + key + '.min.js'
    }
  };

	grunt.config.set('uglify', uglify);

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
