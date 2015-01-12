var gulp = require('gulp');
var paths = require('../config').paths;

gulp.task('watch', function(){
  gulp.watch(paths.js_files, ['build:scripts', 'test']);
  gulp.watch(paths.test_files, ['test']);
  gulp.watch([paths.other_files], ['copy']);
  gulp.watch(paths.less_files, ['build:less']);
});