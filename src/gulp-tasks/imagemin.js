var pngquant = require('imagemin-pngquant');

module.exports = function () {
    var gulp = this.gulp,
        $ = this.opts.$;

    gulp.src('media/**/*')
        .pipe(gulp.dest('dist/media'));
    
    return gulp.src('img/*')
        .pipe($.newer('dist/img'))
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
};
