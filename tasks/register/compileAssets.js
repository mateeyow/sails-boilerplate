module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:dev',
    'sass:dev',
		'copy:dev',
    'jst:dev',
		'coffee:dev'
	]);
};
