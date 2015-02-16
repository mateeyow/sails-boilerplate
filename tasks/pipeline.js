/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

var users = {
  public: {
    css: [
      'lib/angular-material/angular-material.min.css',
      'lib/angular-material/default-theme.css',
      'styles/public/**/*.css'
    ],
    js: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      'lib/angular-aria/angular-aria.min.js',
      'lib/angular-messages/angular-messages.min.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-resource/angular-resource.js',
      'lib/angular-touch/angular-touch.js',
      'lib/hammerjs/hammer.min.js',
      'lib/angular-material/angular-material.js',
      'lib/lodash.min.js',
      'js/public/**/*.js'
    ],
    templates: [
      'public/**/*.html'
    ]
  }
};

for (var key in users) {
  users[key].css = users[key].css.map(function (path) {
    return '.tmp/public/' + path;
  }); 

  users[key].js = users[key].js.map(function (path) {
    return '.tmp/public/' + path;
  });

  users[key].templates = users[key].templates.map(function (path) {
    return '.tmp/public/templates/' + path;
  });
}

module.exports = users