var gulp        = require('gulp'),
    livereload  = require('gulp-livereload');


module.exports = function(){

    return gulp.src(['dist/css/*.css'])
        .pipe(livereload());

};
module.exports.dependencies = ['css'];
