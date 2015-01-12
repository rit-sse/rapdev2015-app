var gulp = require('gulp');
var handleError = require('../util/handleError');
var paths = require('../config').paths;
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src(paths.test_files)
    .pipe(mocha())
    .on('error', handleError);
});
