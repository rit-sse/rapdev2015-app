var gulp = require('gulp');
var paths = require('../config').paths;
var handleError = require('../util/handleError');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:less', function(){
  gulp.src(paths.less_files)
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ paths.material_less ]
    }))
    .on('error', handleError)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build_dir));
});