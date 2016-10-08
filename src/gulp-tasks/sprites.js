var spritesmith = require('gulp.spritesmith');

module.exports = function(){

    var gulp = this.gulp,
        $ = this.opts.$;

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
