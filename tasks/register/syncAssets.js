module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'sass:dev',
		'sync:dev',
		'coffee:dev',
    'jade:dev',
    'jst:dev'
	]);
};
