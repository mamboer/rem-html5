module.exports = function(){
    var gulp = this.gulp,
        $ = this.opts.$;

    return gulp.src('sass/*.scss')  // only compile the entry file
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error',$.sass.logError))
        .pipe($.autoprefixer("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
    
};


