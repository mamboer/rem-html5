var gulp = require('gulp');
var path = require('path');

var cfg = {
    EXPRESS_PORT : 4000,
    EXPRESS_ROOT : path.join(__dirname, '..')
};

module.exports =  function() {
    var express = require('express');
    var app = express();
    app.use(express.static(cfg.EXPRESS_ROOT));
    app.listen(cfg.EXPRESS_PORT);
};
