var browserify = require('browserify');
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var app = require('./server/server');
var sequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  client_root: './app/',
  js_root: './app/js/',
  js_files: './app/**/*.@(js|jsx)',
  js_entrypoint: './js/main.js',
  other_files: './app/**/*.!(js|jsx|css|less)',
  less_files:'./app/**/*.@(css|less)',
  material_less: './node_modules/material-ui/src/less/', 
  build_dir: './dist/',
  test_files: './test/**/*-test.js'
};

gulp.task('build:scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    debug: true
  });
  b.transform(reactify); // use the reactify transform
  b.add('./' + path.join(paths.client_root, paths.js_entrypoint));
  return b.bundle()
    .pipe(source(paths.js_entrypoint))
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('copy', function(){
  gulp.src([paths.other_files])
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('clean', function(cb){
  del([paths.build_dir], cb);
});

gulp.task('minify:css', function(){
  gulp.src(paths.css_files)
    .pipe(concat('css/app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('start-server', function(){
  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});

gulp.task('test', function() {
  function onError(err) {
    console.log(err.toString());
    this.emit('end');
  } // http://stackoverflow.com/a/21678601

  gulp.src(paths.test_files)
    .pipe(mocha())
    .on('error', onError);
});

gulp.task('build:less', function(){
  gulp.src(paths.less_files)
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ paths.material_less ]
    }))
    .on('error', console.log.bind(console))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('build', ['build:scripts', 'build:less', 'copy']);

gulp.task('watch', function(){
  gulp.watch(paths.js_files, ['build:scripts', 'test']);
  gulp.watch(paths.test_files, ['test']);
  gulp.watch([paths.other_files, '!./app/bower_components/**/*'], ['copy']);
  gulp.watch(paths.less_files,['build:less']);
});


gulp.task('default', ['build'], function(){
  sequence(['start-server', 'watch']);
});

