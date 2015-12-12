var app = (function(){
    var $win = $(window),
        $body = $('body'),
        pkg = new PKG(),
        winH = $win.height(),
        remBasePXSize =  100;
    //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    var helper = {
        fakeElement:document.createElement("fakeelement1"),
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
            }
            if (plusTimeStamp) {
                s += new Date().getTime();
            }
            return s;
        }
    };

    helper.CONST_TransitionEnd = helper.getTransitionEnd();
    helper.CONST_AnimationEnd = helper.getAnimationEnd(true);

    var px2REM = function(px){
        var rem = (px/remBasePXSize)/2 + 'rem';
        return rem;
    };

    var preventDefault = function(e){
        e.preventDefault();
        return false;
    };    

    //loader
    pkg.define('loader',{
        init:function(){
            this.$el = $('#loader');
            this.$num = this.$el.find('.loader-num');
        },
        load:function(res, opts){
            opts.loadingTip = opts.loadingTip || '';
            
            if(!opts.backgroundLoading){            
                $body.addClass('loading');
                this.progress('0.0');
                this.show();
            }

            var onLoading = opts.onLoading || pkg.loader.progress;
            var onComplete = opts.onComplete || function(){};

            new mo.Loader(res,{
                minTime:opts.minTime||500,
                onLoading : function(count,total){
                    onLoading.call(pkg.loader, (count/total*100).toFixed(1), opts.loadingTip);
                },
                onComplete: function(time){
                    onComplete.call(pkg.loader, time);
                }
            });
        },
        hide:function(){
            $body.removeClass('loading');
            this.$el.addClass('hidden');
        },
        show:function(){
            this.$el.removeClass('hidden');
        },
        progress:function(n, tip){
            tip = tip || '';
            if(tip === '') {
                tip = n+'%';
            }else {
                tip = tip.replace('$', n+'%');
            }
            this.$num.html(tip);
        }
    });
    //!scenes
    pkg.define('scenes', {
        init:function(opts){
            this.opts = opts;
            this.isAnimating = false;
            //$body.on('touchmove',function(e){
            //    e.preventDefault();
            //});
        },
        bootup:function(){
            var opts = this.opts;
            var res1 = [
                opts.mediaRoot + 'go.mp3',
                opts.imgRoot + 'sprite.png',
                opts.imgRoot + 'slogan_01.png',
                opts.imgRoot + 'ball.png',
                opts.imgRoot + 'btn-down.png',
                opts.imgRoot + 'bg_01.jpg',
                opts.imgRoot + 'bg_02.jpg',
                opts.imgRoot + 'bg_03.jpg',
                opts.imgRoot + 'bg_04.jpg',
                opts.imgRoot + 'bg_05.jpg',
                opts.imgRoot + 'bg_06.jpg'
            ];
            pkg.loader.load(res1, {
                onComplete:function(time){
                    pkg.scenes.show();
                }
            });
        },
        show:function(){
            $body.prepend(document.querySelector('#tplScenes').innerHTML);           
            this.$el = $('#slide');
			this.slide = new mo.Slide({
				target: this.$el.find('li')
			});

            pkg.loader.hide();
            $win.trigger('res:ready');
        }
        
    });

    pkg.define('appaudio', {

        init:function(opts){
			this.opts = opts;
            this.$el = $('#appAudio');
            this.audio = document.querySelector('#appAudioItem');
            if(this.$el.length === 0) return;
            this.initEvents();	

        },
        initEvents: function(){
            var me = this;

			$win.on('res:ready', function(e){
				me.audio.src = me.opts.mediaRoot + 'go.mp3';
				me.play(); 
			});            

            this.$el.on('tap',function(e){
                if(me.$el.hasClass('playing')){
                    me.stop();   
                }else {
                    me.play();
                }
            });

        },
        play:function(){
            // play sound
            this.audio.play();
            this.$el.addClass('playing');
        },
        stop:function(){
            this.audio.pause();
            this.$el.removeClass('playing');
        }

    });
    //public api
    var api = {
        init:function(opts){
            pkg.init(opts);
            pkg.scenes.bootup();
        },
        hottag:function(tag){
            window['pgvSendClick']&&window['pgvSendClick']({hottag:tag});
        },
        showQRCode:function(){
            pkg.qrcode.show();
        }
    };

    return api;

})();
