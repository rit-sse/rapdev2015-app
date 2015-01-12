var gulp = require('gulp');
var paths = require('../config').paths;
var del = require('del');

gulp.task('clean', function(cb){
  del([paths.build_dir], cb);
});