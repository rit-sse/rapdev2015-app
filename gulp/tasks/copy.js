var gulp = require('gulp');
var paths = require('../config').paths;

gulp.task('copy', function(){
  gulp.src([paths.other_files])
    .pipe(gulp.dest(paths.build_dir));
});
