module.exports = function(){

    return this.gulp.src([
            './js/motion.js', 
            './js/animate.js', 
            './js/detect.js',
            './js/rAF.js',
            './js/pkg.js',
            './js/app.js'
        ])
        .pipe(this.gulp.dest('dist/js'))
        .pipe(this.opts.$.concat('all.js'))
        .pipe(this.gulp.dest('dist/js'));

};
