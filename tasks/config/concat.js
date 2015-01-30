/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	var users  = require('../pipeline')
		, concat = {};

	for (var key in users) {
		var js  = 'js' + key
			, css = 'css' + key;

		concat[js] = {
			src: users[key].js,
			dest: '.tmp/public/concat/' + key + '.js'
		};

		concat[css] = {
			src: users[key].css,
			dest: '.tmp/public/concat/' + key + '.css'
		};
	};
	grunt.config.set('concat', concat);

	grunt.loadNpmTasks('grunt-contrib-concat');
};
