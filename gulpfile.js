var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var app = require('./server/server');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

var paths = {
  client_root: './app/',
  js_root: './app/js/',
  js_files: './app/**/*.@(js|jsx)',
  other_files: './app/**/*.!(js|jsx|css)',
  js_entrypoint: './app/js/main.js',
  css_files: './app/css/**/*.css',
  build_dir: './dist/',
  react_root: './app/bower_components/react',
  fluxxor_root: './app/bower_components/fluxxor',
}

gulp.task('compile-scripts', function(){
  var b = browserify({
    extensions: ['.jsx'],
    paths: [paths.react_root, paths.fluxxor_root]
  });
  b.transform(reactify); // use the reactify transform
  b.add(paths.js_entrypoint);
  return b.bundle()
    .pipe(source(paths.js_entrypoint))
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('copy', function(){
  gulp.src([paths.other_files, '!./app/bower_components/**/*'])
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('minify:css', function(){
  gulp.src(paths.css_files)
    .pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.build_dir));
});

gulp.task('start-server', function(){
  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});

gulp.task('watch-scripts', function(){
  gulp.watch(paths.js_files, ['compile-scripts']);
  gulp.watch([paths.other_files, '!./app/bower_components/**/*'], ['copy']);
  gulp.watch(paths.css_files,['minify:css']);
});

gulp.task('default', ['compile-scripts', 'copy', 'minify:css', 'start-server', 'watch-scripts']);
