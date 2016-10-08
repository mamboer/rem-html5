var gulp        = require('gulp'),
    svn         = require('gulp-asvn'),
    path        = require('path');

require('shelljs/global');

var svnAdd = function(opts, cbk){
    svn.add (opts.svnCfg.actFolder, function(err){
        cbk(err);
    });

};

var svnCommit = function(opts, cbk){
    svn.commit (opts.svnCfg.actFolder, function(err){
        if(err) throw err;
        cbk && cbk(null);
    });
};

var svnDeleteMissings = function(opts){
    if (!which('svn')) {
        echo('Sorry, this script requires svn');
        exit(1);
    }   
    cd(opts.svnCfg.actFolder);
    var cmdTxt = 'svn st | grep ^! | awk \'{print " --force "$2}\' | xargs svn rm --username ' + opts.svnCfg.user + ' --password ' + opts.svnCfg.password;
    // Run external tool synchronously
    if (exec(cmdTxt).code !== 0) {
        echo('Error: SVN delete missing files failed');
        exit(1);
    }
    svnCommit(opts);
};

module.exports = function(){

    svnAdd(this.opts, function(err){
        if(err){
            console.log(err);
        }
        svnCommit(function(err1){
            if(!err1){
                svnDeleteMissings();
            }
        });
    }); 

};
