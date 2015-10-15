var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename');

module.exports = function(){

    return gulp.src( 'dist/js/all.js')
        .pipe(uglify({preserveComments:'some'}))
        .pipe(rename( 'all.min.js' ))
        .pipe(gulp.dest('dist/js'));
   
    
};

module.exports.dependencies = ['lint','concat'];
