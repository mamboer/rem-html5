/**
 * easy usage of animate.css
 */

;(function($){

    var helper = {
        fakeElement:document.createElement("fakeelement"),
        detectEvtName:function( obj, removeFakeElement){
            var t,
                el = this.fakeElement; 

            for (t in obj){
                if (el.style[t] !== undefined){
                    if(removeFakeElement){
                        el = null;
                        delete this.fakeElement;
                    }
                    return obj[t];
                }
            }
        },
        getTransitionEnd:function(removeCache){
            var transitions = {
                "transition"      : "transitionend",
                "OTransition"     : "oTransitionEnd",
                "MozTransition"   : "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            };
            return this.detectEvtName( transitions, removeCache );
        },
        getAnimationEnd: function( removeCache ){
            var animations = {
                "animation"      : "animationend",
                "OAnimation"     : "oAnimationEnd",
                "MozAnimation"   : "animationend",
                "WebkitAnimation": "webkitAnimationEnd"
            };
            return this.detectEvtName ( animations, removeCache );
        },
        randomStr : function (size, plusTimeStamp) {
            var size0 = 8;
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            size = size || size0; size = size < 1 ? size0 : size; size = size > chars.length ? size0 : size;
            var s = '';
            for (var i = 0; i < size; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                s += chars.substring(rnum, rnum + 1);
            };
            if (plusTimeStamp) {
                s += new Date().getTime();
            };
            return s;
        },
        cache:{},
        addCache:function(id,inst){
            this.cache[id] = inst;
        },
        getCache:function(id){
            return this.cache[id];
        }
    };

    

    var model = function($d,opts) {
        this.$d = $d;
        this.opts = opts;
        this.init();
    };

    model.prototype = {
        //event binding entry
        _initEvts:function(){
            var me = this,
                $dom = this.$d,
                opts = this.opts;

            var classes = 'animated ' + this.opts.classes;
            if(opts.one){
                $dom.one(opts.EVT.animationEnd,function(e){
                    $dom.removeClass( classes );
                    if(opts.onAnimationEnd){
                        opts.onAnimationEnd.call(me);
                    }
                });
            } else {
                $dom.on(opts.EVT.animationEnd,function(e){
                    if(opts.onAnimationEnd){
                        opts.onAnimationEnd.call(me);
                    }
                });
            }
            $dom.addClass( classes );
        },
        init:function () {
            this.opts = $.extend({
                classes:'flash',
                one:true
            }, this.opts||{});

            this._initEvts();
        },
        update:function(opts,reInit){
            this.opts = $.extend(this.opts,opts||{});
            if(reInit){
                this.init();
            }
        }//updateOpts
    };

    $.fn.ani = function(opts) {
        // Set the options.
        var optsType = typeof(opts),
            opts1 = optsType!=='string'?$.extend(true,{}, $.fn.ani.defaults, opts||{}):$.fn.ani.defaults,
            args = arguments;
        
        // Go through the matched elements and return the jQuery object.
        return this.each(function () {
            var $me = $(this),
                instance = $me.data("ani");
            if(instance) {
                instance = helper.getCache(instance);
                instance.update(opts1, true);
            }else {
                instance = helper.randomStr(8,true);
                helper.addCache(instance, new model($me, opts1));
                $me.data("ani", instance);
            }
        });
    };

    $.fn.ani.defaults = {
        EVT:{
            animationEnd: helper.getAnimationEnd(),
            transitionEnd: helper.getTransitionEnd(true)
        },
        one:true
    };

    $.fn.aniClass = function(aniName, cbk, one){
        return this.ani({
            classes: aniName,
            onAnimationEnd: cbk,
            one: (one === false ? false : true)
        });
    };

})(Zepto);
