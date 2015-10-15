var gulp                = require('gulp'),
    swig                = require('gulp-swig'),
    rename              = require('gulp-rename'),
    pkg                 = require('../package.json'),
    path                = require('path'),
    convertEncoding     = require('gulp-convert-encoding'),
    actFolder           = path.join(__dirname,'..','..'),
    replace             = require('gulp-replace'),
    swig1               = require('swig');

var swigOpts = {
    defaults: { cache: false,locals:{date:function(){return new Date().getTime()}}},
    data:pkg
};

//set encoding
//http://paularmstrong.github.io/swig/docs/loaders/#builtin

module.exports = function(){


    //dev html    
    swigOpts.data.release = false;
    gulp.src(['*.html'])
        .pipe(swig(swigOpts))
        .pipe(rename({
            suffix:'-dev'    
        }))
        .pipe(gulp.dest('dist'));

    //release
    //.pipe(rename({suffix: '.min'}))
    swigOpts.data.release = true;
    gulp.src(['*.html'])
        .pipe(swig(swigOpts))
        //.pipe(replace(/\"img\//g, '"'+imgPrefix))
        //.pipe(replace(/\(img\//g, '('+imgPrefix))
        //.pipe(convertEncoding({to: 'GBK'}))
        .pipe(gulp.dest('dist'));
   
    

};
