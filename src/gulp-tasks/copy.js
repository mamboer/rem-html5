module.exports = function(){

    //copy to gh-pages
    return this.gulp.src(['dist/**/*'])
        .pipe(this.gulp.dest('../dist/'));

};
