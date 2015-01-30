/**
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jst
 *
 */

module.exports = function(grunt) {

	var users = require('../pipeline')
		, config = {
			dev: {
				files: {}
			}
		};

	for (var key in users) {
		var jst = '.tmp/public/js/' + key + '/jst.js'
			, dir = users[key].templates;

		config.dev.files[jst] = dir
	}
	
	grunt.config.set('jst', config);

	grunt.loadNpmTasks('grunt-contrib-jst');
};
