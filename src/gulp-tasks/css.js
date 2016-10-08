module.exports = function(){
    var gulp = this.gulp,
        $ = this.opts.$;

    return gulp.src('dist/css/style.css',{base:'./'})
        .pipe($.cssmin({
            //* for keeping all (default), 1 for keeping first one only, 0 for removing all
            keepSpecialComments:1
        }))
        .pipe($.rename( 'style.min.css' ))
        .pipe(gulp.dest('dist/css'))
        .pipe(this.opts.bs.stream());
};

module.exports.dependencies = ['sass'];
