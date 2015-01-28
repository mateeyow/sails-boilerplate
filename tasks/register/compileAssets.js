module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:dev',
    'sass:dev',
		'jst:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
