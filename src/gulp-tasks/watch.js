var path = require('path');

module.exports =  function() {

    var gulp = this.gulp;

    gulp.watch(['*.html'], ['swig']);
    gulp.watch(['js/*.js'], ['js']);
    gulp.watch(['sass/**/*.scss'],['css']);
    gulp.watch(['img/**'],['imagemin']);
    gulp.watch(['sprites/**'],['sprites']);
    gulp.watch(['dist/**']).on('change', this.opts.bs.reload);
};