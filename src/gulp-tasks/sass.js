var gulp                = require('gulp'),
    plumber             = require('gulp-plumber'),
    prefix              = require('gulp-autoprefixer'),
    sourcemaps          = require('gulp-sourcemaps'),
    sass                = require('gulp-sass');

module.exports = function(){

    return gulp.src('sass/*.scss')  // only compile the entry file
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
    
};


