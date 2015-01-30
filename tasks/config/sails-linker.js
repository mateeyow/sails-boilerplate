/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	var users = require('../pipeline')
		, linker = {};

	linker.devJsJade = {
		options: {
			startTag: '// SCRIPTS',
			endTag: '// SCRIPTS END',
			fileTmpl: 'script(src="%s")',
			appRoot: '.tmp/public'
		},
		files: {}
	};

	linker.devJsRelativeJade = {
		options: {
			startTag: '// SCRIPTS',
			endTag: '// SCRIPTS END',
			fileTmpl: 'script(src="%s")',
			appRoot: '.tmp/public',
			relative: true
		},
		files: {}
	};

	linker.prodJsJade = {
		options: {
			startTag: '// SCRIPTS',
			endTag: '// SCRIPTS END',
			fileTmpl: 'script(src="%s")',
			appRoot: '.tmp/public'
		},
		files: {}
	};

	linker.prodJsRelativeJade = {
		options: {
			startTag: '// SCRIPTS',
			endTag: '// SCRIPTS END',
			fileTmpl: 'script(src="%s")',
			appRoot: '.tmp/public',
			relative: true
		},
		files: {}
	};

	linker.devStylesJade = {
		options: {
			startTag: '// STYLES',
			endTag: '// STYLES END',
			fileTmpl: 'link(rel="stylesheet", href="%s")',
			appRoot: '.tmp/public'
		},
		files: {}
	};

	linker.devStylesRelativeJade = {
		options: {
			startTag: '// STYLES',
			endTag: '// STYLES END',
			fileTmpl: 'link(rel="stylesheet", href="%s")',
			appRoot: '.tmp/public',
			relative: true
		},
		files: {}
	};

	linker.prodStylesJade = {
		options: {
			startTag: '// STYLES',
			endTag: '// STYLES END',
			fileTmpl: 'link(rel="stylesheet", href="%s")',
			appRoot: '.tmp/public'
		},
		files: {}
	};

	linker.prodStylesRelativeJade = {
		options: {
			startTag: '// STYLES',
			endTag: '// STYLES END',
			fileTmpl: 'link(rel="stylesheet", href="%s")',
			appRoot: '.tmp/public',
			relative: true
		},
		files: {}
	};

	// Bring in JST template object
	// linker.devTplJade = {
	// 	options: {
	// 		startTag: '// TEMPLATES',
	// 		endTag: '// TEMPLATES END',
	// 		fileTmpl: 'script(type="text/javascript", src="%s")',
	// 		appRoot: '.tmp/public'
	// 	},
	// 	files: {}
	// };

	for (var key in users) {
		var jade = 'views/' + key + '.jade'
		for (var link in linker) {
			if (link.indexOf('prod') > -1) {
				if (link.indexOf('Styles') > -1) {
          var dir = ['.tmp/public/min/' + key + '.min.css']
					linker[link].files[jade] = dir
				} else {
          var dir = ['.tmp/public/min/' + key + '.min.js']
					linker[link].files[jade] = dir
				}
			} else {
				if (link.indexOf('Styles') > -1) {
          var dir = users[key].css
					linker[link].files[jade] = dir
				} else {
          var dir = users[key].js
					linker[link].files[jade] = dir
				}
			}
		}
	};

	grunt.config.set('sails-linker', linker);

	grunt.loadNpmTasks('grunt-sails-linker');
};
