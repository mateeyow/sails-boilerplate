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
      'public/**/*.css'
    ],
    js: [
      'public/**/*.js'
    ],
    templates: [
      'public/**/*.html'
    ]
  }
};

for (var key in users) {
  users[key].css = users[key].css.map(function (path) {
    return '.tmp/public/styles/' + path;
  }); 

  users[key].js = users[key].js.map(function (path) {
    return '.tmp/public/js/' + path;
  });

  users[key].templates = users[key].templates.map(function (path) {
    return '.tmp/public/templates/' + path;
  });
}

module.exports = users