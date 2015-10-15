var gulp        = require('gulp'),
    livereload  = require('gulp-livereload');


module.exports = function(){

    return gulp.src(['*.html','dist/*.html'])
        .pipe(livereload());

};
module.exports.dependencies = ['swig','js','css'];
