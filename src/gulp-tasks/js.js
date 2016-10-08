module.exports = function(){
    var gulp = this.gulp,
        $ = this.opts.$;

    return gulp.src( 'dist/js/all.js')
        .pipe($.uglify({preserveComments:'some'}))
        .pipe($.rename( 'all.min.js' ))
        .pipe(gulp.dest('dist/js'));
   
    
};

module.exports.dependencies = ['lint','concat'];
