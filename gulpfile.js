var browserify = require('browserify');
var gulp = require('gulp');
var del = require('del');
var path = require('path');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var app = require('./server/server');
var sequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

var paths = {
  client_root: './app/',
  js_root: './app/js/',
  js_files: './app/**/*.@(js|jsx)',
  js_entrypoint: './js/main.js',
  other_files: './app/**/*.!(js|jsx|css)',
  css_files: './app/**/*.css',
  build_dir: './dist/',
  react_root: './app/bower_components/react',
  fluxxor_root: './app/bower_components/fluxxor/build',
  test_files: './test/**/*-test.js',
}

gulp.task('build:scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    paths: [paths.react_root, paths.fluxxor_root],
    debug: true
  });
  b.transform(reactify); // use the reactify transform
  b.add('./' + path.join(paths.client_root, paths.js_entrypoint));
  return b.bundle()
    .pipe(source(paths.js_entrypoint))
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('copy', function(){
  gulp.src([paths.other_files, '!./app/bower_components/**/*'])
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

gulp.task('build', ['build:scripts', 'minify:css', 'copy']);

gulp.task('watch', function(){
  gulp.watch(paths.js_files, ['build:scripts']);
  gulp.watch([paths.other_files, '!./app/bower_components/**/*'], ['copy']);
  gulp.watch(paths.css_files,['minify:css']);
});


gulp.task('default', ['build'], function(){
  sequence(['start-server', 'watch']);
});

