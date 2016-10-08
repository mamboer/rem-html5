var jshintStylish   = require('jshint-stylish');

module.exports = function(){

    return this.gulp.src('js/app.js')
        .pipe(this.opts.$.jshint())
        .pipe(this.opts.$.jshint.reporter(jshintStylish));	

};
