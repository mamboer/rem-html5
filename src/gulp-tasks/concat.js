var gulp            = require('gulp'),
    concat          = require('gulp-concat');

module.exports = function(){

    return gulp.src([
            './js/motion.js', 
            './js/animate.js', 
            './js/detect.js',
            './js/rAF.js',
            './js/pkg.js',
            './js/app.js'
        ])
        .pipe(gulp.dest('dist/js'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));

};
