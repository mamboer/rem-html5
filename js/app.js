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

    //!film
    var film = function($el, cfg){
        this.$el = $el;
        this.$img = $('<img/>');
        this.opts = $.extend({},{
            duration:2000,
            pics:[],
            onAnimated:function(){}
        },cfg||{});
        this.init();
    };

    film.prototype = {
        init:function(){
            this.size = this.opts.pics.length;    
            this.$el.append(this.$img);
            this.playSingle(0);
        },
        play:function(){
            var interval = parseInt(this.opts.duration/this.size),
                me = this;
            this.timer = setInterval(function(){
                me.playSingle(me.idx+1);
            }, interval);
        },
        playSingle:function(idx){
            if(idx === this.size){
                clearInterval(this.timer);
                this.opts.onAnimated.call(this);
                this.$el.trigger('film:anidone');
                return;
            }
            this.idx = idx;
            this.$img[0].src = this.opts.pics[idx];
        }
    };

    /**
     * whether the element is in view
     */
    var visibleTracker = function($el){
        this.$el = $el;
        this.height = $el.height();
        this.winH = winH;
        this.offset = $el.offset();
        this.offsetHeight = this.offset.top + this.height;
        this.visibleHeight = this.winH + this.height;
        this.centerValue = this.visibleHeight/2;
        this.value = this.val();
    };
    visibleTracker.prototype = {
        isVisible:function(){
            var val = this.val(),
                yep = (val > 0) && (val < this.visibleHeight);           

            return yep;
        },
        /**
         * visible height value
         */
        val:function(){
            var val = this.offsetHeight - window.scrollY;
            this.isStepInTop = (val - this.value)>0 && val < this.centerValue;
            this.isStepOutBottom = (val - this.value)>0 && val > this.centerValue;
            this.isStepInBottom = (val - this.value)<0 && val > this.centerValue;
            this.isStepOutTop = (val - this.value)<0 && val < this.centerValue;
            this.value = val;
            return val;
        }
    };

    /**
     * scrolling point
     */
    var scrollPoint = function(name, opts){
        this.opts = opts = $.extend({},{
            onAsserted:function(){},
            onScrolled:function(){}
        },opts||{});
        this.name = name;
        this.scrollY = window.scrollY;
        this.init();
    };
    scrollPoint.prototype = {
        init:function(){
            var me = this;
            this.onScroll = function(e){
                var data = {
                    scrollY0:me.scrollY,
                    scrollY1:window.scrollY,
                    diff:window.scrollY - me.scrollY
                };
                var asserted = me.opts.onAsserted.call(me, data);
                if(asserted){
                    me.opts.onScrolled.call(me, data);
                }
                me.scrollY = window.scrollY;
            };
            $win.on('scroll', this.onScroll);
        },
        die:function(){
            $win.off('scroll', this.onScroll);
            this.onScroll = null;
        }
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
            this.isS5Animating = false;
            this.isS6Animating = false;
            $body.on('swipeUp',debounce(function(e){

                if($body.hasClass('active-4')){
                    pkg.scenes.active('active-4', true);
                    return;
                }

                if($body.hasClass('active-3')){
                    pkg.scenes.active('active-3', true);
                    return;
                }

                if($body.hasClass('active-2')){
                    pkg.scenes.active('active-2', true);
                    return;
                }
            }, 500)).on('swipeDown', debounce(function(e){
               
                if($body.hasClass('back-5')){
                    $body.removeClass('back-5');
                }

                if($body.hasClass('active-3')){
                    pkg.scenes.active('active-4');
                    return;
                }

                if($body.hasClass('active-2')){
                    pkg.scenes.active('active-3');
                    return;
                }

            }, 500)).on('touchmove',function(e){
                e.preventDefault();
            });
        },
        active:function(sceneFlag, revert, cbk){
            if(this.isAnimating || this.isS5Animating || this.isS6Animating) return;
            cbk = cbk || function(){};
           
            $body.removeClass('revert-active-1 revert-active-2 revert-active-3 revert-active-4');

            app.hottag('a20150817rock.scene.'+sceneFlag);

            if(sceneFlag === 'active-1' || sceneFlag === 'active-2'){ 
                this.isAnimating = true;
                this.$el.on(helper.CONST_TransitionEnd, function(e){
                    if(e.target !== pkg.scenes.$el[0]) return false;
                    //我们利用transform来移动场景，这里需要判断是transitionEnd是否是transform触发的
                    //propertyName可能是transform、-webkit-transform等等
                    if(e.propertyName.indexOf('transform') === -1) return false;
                    pkg.scenes.isAnimating = false;
                    cbk();
                    cbk = null;
                    pkg.scenes.$el.off(helper.CONST_TransitionEnd);
                });
            }
            
            if(sceneFlag === 'active-2'){
                this.isS5Animating = true;
                this.$s5.on(helper.CONST_TransitionEnd, function(e){
                    if(e.target !== pkg.scenes.$s5[0]) return false;
                    pkg.scenes.isS5Animating = false;
                    pkg.scenes.$s5.off(helper.CONST_TransitionEnd);
                });
            }

            if(sceneFlag === 'active-3'){
                this.isS5Animating = true;
                this.$s5Platform.on(helper.CONST_TransitionEnd, function(e){
                    if(e.target!== pkg.scenes.$s5Platform[0]) return false;
                    pkg.scenes.isS5Animating = false;
                    pkg.scenes.$s5Platform.off(helper.CONST_TransitionEnd);
                });
            }

            if(sceneFlag === 'active-4'){
                this.isS6Animating = true;
                this.$s6.on(helper.CONST_TransitionEnd, function(e){
                    if(e.target!== pkg.scenes.$s6[0]) return false;
                    pkg.scenes.isS6Animating = false;
                    pkg.scenes.$s6.off(helper.CONST_TransitionEnd);
                });
            }
            
            if(revert === true){
                $win.trigger('revert-scenes:'+sceneFlag);
                $body.removeClass(sceneFlag);
                $body.addClass('revert-'+sceneFlag);
                return;
            }
            $win.trigger('scenes:'+sceneFlag);
            $body.addClass(sceneFlag);
        },
        bootup:function(){
            var opts = this.opts;
            var res1 = [
                opts.imgRoot + 'sprite.png',
                opts.imgRoot + 'scene1-bgl.png',
                opts.imgRoot + 'scene1-bgr.png',
                opts.imgRoot + 'scene1-jijia.png',
                opts.imgRoot + 'scene1-taizi.png', 
                opts.imgRoot + 'scene1-bg.jpg', 
                //opts.imgRoot + 'cloud1.png',
                opts.imgRoot + 'cloud2.png',
                opts.imgRoot + 'qrcode_wx.jpg',
                opts.imgRoot + 'qrcode_qq.jpg',
                opts.imgRoot + 'qrcode_yuyue_qq.jpg',
                opts.imgRoot + 'qrcode_yuyue_wx.jpg'
            ];
            var res = pkg.scene3.res.concat(pkg.scene4.res); 
            pkg.loader.load(res1.concat(res), {
                onComplete:function(time){
                    pkg.scenes.show();
                }
            });
        },
        show:function(){
            $body.prepend(document.querySelector('#tplScenes').innerHTML);           
            this.$el = $('#scenes');
            this.$s5 = $('#scene5');
            this.$s5Platform = $('#s5Platform');
            this.$s6 = $('#scene6');
            //set height
            var $s1x = this.$el.find('.s'),
                $s2x = this.$el.find('.s2x');

            $s1x.height( winH + 'px');
            $s2x.height( winH*2 + 'px');

            $s1x.on('touchmove',function(e){
                e.preventDefault();
            });
            $s2x.on('touchmove',function(e){
                e.preventDefault();
            });

            this.$el.height( $s1x.size()*winH + $s2x.size()*2*winH + 'px' );

            pkg.loader.hide();
            $win.trigger('res:ready');
        }
        
    });

    pkg.define('appaudio', {

        init:function(){

            this.$el = $('#appAudio');
            this.audio = document.querySelector('#appAudioItem');
            if(this.$el.length === 0) return;

            this.initEvents();

        },
        initEvents: function(){
            var me = this;
            
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

    //!scrollTip
    pkg.define('scrollTip',{
        init:function(){
            var me = this;
            $win.on('res:ready',function(e){
                me.$el = $('#scrollTip');
                me.$el.on('swipeUp',function(e){
                    e.preventDefault();
                    return false;
                }).on('swipeDown',function(e){
                    pkg.scenes.active('active-2');
                    me.$el.removeClass('active');
                    return false;
                });
            });
        },
        timer:null,
        show:function(autoHide){
            autoHide = autoHide || 3000;
            var me = this;
            clearTimeout(this.timer);
            this.$el.addClass('active');
            this.timer = setTimeout(function(){
                me.hide();
            }, autoHide);
        },
        hide:function(){
            this.$el.removeClass('active');
        }

    });

    pkg.define('qrcode',{
        init:function(){

            this.$el = $('#popQRCode');
            this.$el.on('touchmove',function(e){
                e.preventDefault();
            }).on('tap',function(e){
                if(e.target === document.querySelector('#popQRCodeBG')){
                    pkg.qrcode.hide();
                }
            });
        },
        show:function(){
            this.$el.removeClass('hide');
        },
        hide:function(){
            this.$el.addClass('hide');
        }
    });

    //!scene1
    pkg.define('scene1',{
        init:function(opts){
            this.opts = opts;
            this.isAnimating = false;
            this.initEvts();
        },
        initEvts:function(){
            $body.on('tap', '.spr-chuji',function(e){
                pkg.scene1.exit();
            }); 
            $win.on('res:ready',function(e){
                pkg.scene1.show();
            });

        },
        transform:function(){
            this.$el.addClass('leaving');
            var ani = new mo.Animation({
                target: this.$jijiaAvatar,
                duration:1500,
                delay:1000, 
                easing:'ease-in-out',
                fillMode:'forwards',
                keyframes:{
                    100: {'opacity': 0}
                }
            }).on('end',function(e){
                ani.off('end');
                pkg.scene1.isAnimating = false;
                pkg.scene1.close();        
            });
        },
        exit:function(){
            if(this.isAnimating) return;
            this.isAnimating = true;
            pkg.appaudio.play();
            $body.removeClass('back-0 revert-active-1');
            this.transform();
        },
        close:function(){
            this.$el.addClass('closing');
            pkg.scenes.active('active-1');
        },
        show:function(){
            this.$el = $('#scene1').addClass('playing');
            this.$jijiaAvatar = $('#s1JijiaAvatar');
        },
        reset:function(){
           
            pkg.scenes.active('active-1', true, function(){
                pkg.scene1.$el.removeClass('leaving closing');
                $body.addClass('back-0');
                pkg.scene1.$jijiaAvatar.removeClass('mo-animation').attr('style','');
            });

        }
    });

    
    //!scene3
    pkg.define('scene3', {
        init:function(opts){
            this.opts = opts;
            //static resources
            //it will be loaded in scene1
            this.res = [
                opts.imgRoot + 'city_01_01.jpg',
                opts.imgRoot + 'city_02_01.jpg',
                opts.imgRoot + 'blackhole.png',
                opts.imgRoot + 'blackhole-edge.png',
                opts.imgRoot + 'flying-robot.png',
                opts.imgRoot + 'scene3-slogan.png'
            ];
            this.initEvts();
        },
        initEvts:function(){
            $win.on('res:ready',function(e){
                pkg.scene3.show();
            });
        },
        show:function(){
            this.$el = $('#scene3');
            this.$slogan = $('#s3Slogan');
            this.$bg = $('#s3BG');
            this.$bg1 = $('#s3BG1');
            this.$bg2 = $('#s3BG2');
            this.$blackhole = $('#s3Blackhole');

            this.$bg.find('.s3-bg-inst').css('height', winH+'px');
            this.$bg1.css('height', winH+'px');
            this.$bg2.css('height', winH+'px');
            
            this.$bg2.on('swipeUp',function(e){
                pkg.scrollTip.show();
                return false;
            }).on('swipeDown',function(e){
                pkg.scenes.active('active-2');
                return false;
            });

            $('#s3Jijia').one(helper.CONST_TransitionEnd,function(e){
                if($body.hasClass('active-1')){
                    pkg.scrollTip.show();
                }
            });

        }
        
    });

    pkg.define('scene4', {
        init:function(opts){
            this.opts = opts;
            this.initEvts();
            this.res = [
                opts.imgRoot + 'blackhole-bg.jpg',
                opts.imgRoot + 'blackhole-lights.png',
                opts.imgRoot + 's6-bg.jpg',
                opts.imgRoot + 's5-bg1.jpg',
                opts.imgRoot + 'bg-header.png',
                opts.imgRoot + 'bg-header1.png',
                opts.imgRoot + 'slogan.png',
                opts.imgRoot + 'menus.png',
                opts.imgRoot + 'scene5-slogan.png',
                opts.imgRoot + 'scene4-slogan.png',
                opts.imgRoot + 'platform_01.png',
                opts.imgRoot + 'platform_02.png',
                opts.imgRoot + 'platform_03.png',
                opts.imgRoot + 'platform_04.png',
                opts.imgRoot + 's5-rock1.png'
            ];
        },
        initEvts:function(){
            $win.on('res:ready',function(e){
                pkg.scene4.show();
            });
        },
        show:function(){
            this.$el = $('#scene4');
        }
       
    });

    //!scene5
    pkg.define('scene5', {
        init:function(opts){
            this.opts = opts;
            this.isAnimating = false;
            this.initEvts();
        },
        initEvts:function(){
            $win.on('res:ready',function(){
                pkg.scene5.show();
            }).on('scenes:active-4',function(e){
                pkg.scene5.animate(); 
            }).on('revert-scenes:active-4',function(e){
                pkg.scene5.reset();    
            });
        },
        show:function(){
            this.$el = $('#scene5');
            this.$bg = $('#s5BG'); 
            this.$robot = $('#s5Jijia');
            this.$platform = $('#s5Platform');
        },
        exit:function(){

            this.isAnimating = false;
            this.$el.addClass('transformed');
        
            $win.trigger('scene5:exit');
        
        },
        animate:function(){
            if(this.isAnimating) return;
            this.isAnimating = true;
            this.$el.addClass('transforming');
            
            this.exit();

        },
        reset:function(){
            this.$el.removeClass('transforming transformed');    
        }
        
    });

    pkg.define('scene6', {
        init:function(opts){
            this.opts = opts;
            this.initEvts();
        },
        initEvts:function(){
            $win.on('res:ready',function(){
                pkg.scene6.show();
            }).on('scene5:exit',function(){
                pkg.scene6.play();
            }).on('revert-scenes:active-4',function(){
                pkg.scene6.reset();    
            });
        },
        show:function(){
            this.$el = $('#scene6');
            $('#s6QRCode').on('tap',function(e){
                app.showQRCode();
            });
        },
        play:function(){
            this.$el.addClass('playing');
        },
        reset:function(){
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
