var gulp        = require('gulp'),
    svn         = require('gulp-asvn'),
    path        = require('path'),
    actFolder   = path.join(__dirname,'..','..'),
    svnCfg      = require('../svnconf.json');    

require('shelljs/global');

var svnConf = {
    svnDir : actFolder
}

var svnAdd = function(cbk){
    svn.add (svnConf.svnDir, function(err){
        cbk(err);
    });

};

var svnCommit = function(cbk){
    svn.commit (svnConf.svnDir, function(err){
        if(err) throw err;
        cbk&&cbk(null);
    });
};

var svnDeleteMissings = function(){
    if (!which('svn')) {
        echo('Sorry, this script requires svn');
        exit(1);
    }   
    cd(svnConf.svnDir);
    var cmdTxt = 'svn st | grep ^! | awk \'{print " --force "$2}\' | xargs svn rm --username ' + svnCfg.user + ' --password ' + svnCfg.password;
    // Run external tool synchronously
    if (exec(cmdTxt).code !== 0) {
        echo('Error: SVN delete missing files failed');
        exit(1);
    }
    svnCommit();
};

module.exports = function(){

    svnAdd(function(err){
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
