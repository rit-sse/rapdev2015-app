var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');


var paths = {
	client_root: './app/',
	js_root: './app/js/',
	js_files: './app/**/*.js',
	js_entrypoint: './app/js/main.js',
	build_dir: './dist/',
	react_root: './app/bower_components/react',
	fluxxor_root: './app/bower_components/fluxxor'
}

gulp.task('compile-scripts', function(){
  var b = browserify({
  	paths: [paths.react_root, paths.fluxxor_root]
  });
  b.transform(reactify); // use the reactify transform
  b.add(paths.js_entrypoint);
  return b.bundle()
    .pipe(source(paths.js_entrypoint))
    .pipe(gulp.dest(paths.build_dir));
});


gulp.task('watch-scripts', function(){
	gulp.watch(paths.js_files, ['compile-scripts']);
});

gulp.task('default', ['watch-scripts']);