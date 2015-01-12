var gulp = require('gulp');
var paths = require('../config').paths;
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('minify:css', function(){
  gulp.src(paths.css_files)
    .pipe(concat('css/app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.build_dir));
});
