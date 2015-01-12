var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('default', ['build'], function(){
  sequence(['start-server', 'watch']);
});
