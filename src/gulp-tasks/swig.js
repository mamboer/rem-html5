//set encoding
//http://paularmstrong.github.io/swig/docs/loaders/#builtin

module.exports = function(){
    var gulp = this.gulp,
        $ = this.opts.$;

    var swigOpts = {
        defaults: { cache: false,locals:{date:function(){return new Date().getTime()}}},
        data: this.opts.pkg
    };

    //dev html    
    swigOpts.data.release = false;
    gulp.src(['*.html'])
        .pipe($.swig(swigOpts))
        .pipe($.rename({
            suffix:'-dev'    
        }))
        .pipe(gulp.dest('dist'));

    //release
    //.pipe(rename({suffix: '.min'}))
    swigOpts.data.release = true;
    gulp.src(['*.html'])
        .pipe($.swig(swigOpts))
        //.pipe($.replace(/\"img\//g, '"'+imgPrefix))
        //.pipe($.replace(/\(img\//g, '('+imgPrefix))
        //.pipe($.convertEncoding({to: 'GBK'}))
        .pipe(gulp.dest('dist'));
   
    

};
