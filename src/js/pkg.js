(function(exports, $){

    /**
     * package manager for manage your module code snippets
     */
    var pkg = function(){};
    
    pkg.prototype = {
        define:function(name,mod){
            this[name] = mod;
        },
        init:function(opts){
            var me = this;
            for(var m in me){
                if(m === 'define' || m === 'init'){
                    continue;    
                }
                m = me[m];
                if(m.init){
                    m.init.call(m,opts);
                    delete m.init;
                }
            }
        }
    };

    exports.PKG = pkg;

})(window, Zepto);
