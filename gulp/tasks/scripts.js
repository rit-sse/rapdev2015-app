var gulp = require('gulp');
var paths = require('../config').paths;
var browserify = require('browserify');
var reactify = require('reactify');
var path = require('path');
var source = require('vinyl-source-stream');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleError');

var logName = 'main scripts';

gulp.task('build:scripts', function(){
  bundleLogger.start(logName);
  var b = browserify({
    extensions: ['.jsx'],
    debug: true
  });
  b.transform(function(f){ return reactify(f, {es6: true})}); // use the reactify transform
  b.add('./' + path.join(paths.client_root, paths.js_entrypoint));
  return b.bundle()
    .on('error', handleErrors)
    .pipe(source(paths.js_entrypoint))
    .pipe(gulp.dest(paths.build_dir))
    .on('end', function() {
      bundleLogger.end(logName);
    });
});
