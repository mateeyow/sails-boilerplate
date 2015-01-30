module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuild', [
		'sails-linker:devJsRelativeJade',
		'sails-linker:devStylesRelativeJade'
		// 'sails-linker:devTplJade'
	]);
};
