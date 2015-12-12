var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var newer = require('gulp-newer');

module.exports = function () {


    gulp.src('media/**/*')
        .pipe(gulp.dest('dist/media'));
    
    return gulp.src('img/*')
        .pipe(newer('dist/img'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
};
