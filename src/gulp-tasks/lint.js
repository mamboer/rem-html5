var gulp            = require('gulp'),
    jshint          = require('gulp-jshint'),
    jshintStylish   = require('jshint-stylish');

module.exports = function(){

    return gulp.src('js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));	

};
