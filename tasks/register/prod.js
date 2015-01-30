module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'sails-linker:prodJsJade',
		'sails-linker:prodStylesJade'
		// 'sails-linker:devTplJade'
	]);
};
