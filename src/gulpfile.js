var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    path        = require('path'),
    browserSync = require('browser-sync').create();

require('gulp-task-loader')({
    $: $,
    bs: browserSync,
    EXPRESS_PORT : 4000,
    EXPRESS_ROOT : __dirname,
    actFolder: path.join(__dirname,'..'),
    pkg: require('./package.json'),
    svnCfg: require('./svnconf.json')
});

gulp.task('build', ['swig', 'js', 'css', 'imagemin']);
gulp.task('default',['build', 'watch'], function() {
    browserSync.init({
        server: {
            baseDir: path.join(__dirname, './dist')
        }
    });
});
gulp.task('release',['build','copy']);
