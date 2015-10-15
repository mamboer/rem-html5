var gulp = require('gulp');

module.exports = function(){

    //copy to gh-pages
    return gulp.src(['dist/**/*'])
        .pipe(gulp.dest('../dist'));

};
