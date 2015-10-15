var gulp = require('gulp');

require('gulp-task-loader')();

gulp.task('default',['js','css','swig','imagemin','watch']);
gulp.task('release',['swig','imagemin','copy']);
