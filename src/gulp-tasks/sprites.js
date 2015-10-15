var gulp        = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    cssmin      = require('gulp-cssmin'),
    rename      = require('gulp-rename');
    

module.exports = function(){

    var spriteData = gulp.src('sprites/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '../img/sprite.png',
        padding: 10,
        cssTemplate:'scss.template.handlebars'
    }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('img/'));

    var cssStream = spriteData.css
        .pipe(gulp.dest('sass/includes/'));

};
