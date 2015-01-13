var gulp = require('gulp');
var paths = require('../config').paths;
var handleError = require('../util/handleError');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('build:less', function(){
  gulp.src([paths.normalize_css, paths.less_files])
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ paths.material_less ]
    }))
    .on('error', handleError)
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(concat('css/app.css'))
    .pipe(gulp.dest(paths.build_dir));
});