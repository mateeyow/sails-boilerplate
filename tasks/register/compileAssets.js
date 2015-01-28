module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:dev',
		'jst:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
