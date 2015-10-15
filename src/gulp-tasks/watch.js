var gulp        = require('gulp'),
    livereload  = require('gulp-livereload');

module.exports =  function() {
    livereload.listen();
    gulp.watch(['js/*.js','*.html'],['reload']);  // livereload not works for js file, so we have to reload the whole page
    gulp.watch(['sass/**/*.scss'],['reloadCss']);  // livereload not works for js file, so we have to reload the whole page
    gulp.watch(['img/**'],['imagemin']);
    gulp.watch(['sprites/**'],['sprites']);
};

module.exports.dependencies = ['express'];
