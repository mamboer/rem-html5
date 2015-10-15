(function(){
/*===================filePath:[src/main/motion/motion.js]======================*/
/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-06-13
 * @description tg核心功能
 * @example
		var tab1 = new mo.Tab({
			target: $('#slide01 li')
		}); 
 * @name mo
 * @namespace
 */
(function(){

	(function(){
		
		if(window.Motion) {
			return;
		}

		var Motion = /** @lends mo */{
			/**
			 * tg版本号
			 * @type {string}
			 */
			version: '1.1',

			/**
			 * 命令空间管理 eg. Motion.add('mo.Slide:mo.Tab', function(){})
			 * @param {string} name 
			 * @param {object} obj 
			 */

			add: function(name, obj){
				var target = window;
				var me = arguments.callee;
				var parent = null;
				var isMatch = /^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(name);
				var objNS = RegExp.$1.split('.');
				var parentNS = RegExp.$2.split('.');
				var name = objNS.pop();
				var isClass = /[A-Z]/.test(name.substr(0,1));
				var constructor = function(){
					var mainFn = arguments.callee.prototype.init;
					if (typeof(mainFn) == 'function' && arguments.callee.caller != me) {
						mainFn && mainFn.apply(this, arguments);
					}
				};

				for(var i = 0; i < objNS.length; i++) {
					var p = objNS[i];
					target = target[p] || (target[p] = {});
				}

				if (parentNS[0] != '') {
					parent = window;
					for (var i = 0; i < parentNS.length; i ++) {
						parent = parent[parentNS[i]];
						if(!parent) {
							parent = null;
							break;
						}
					}
				}


				if(isClass && typeof(obj) == 'function') {
					if(parent) {
						constructor.prototype = new parent();
						constructor.prototype.superClass = parent;
					} 
					target[name] = constructor;
					constructor.prototype.constructor = constructor;
					obj.call(target[name].prototype);
				} else {
					target[name] = obj;
				}

			}

		};

		window.Motion = window.mo = Motion;
	})();

})();
/*===================filePath:[src/main/base/base.js]======================*/
/**
 * @version 1.0
 * @date 2014-06-15
 * @description mo
 * @name mo
 * @namespace
*/

/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-06-18
 * @description 基础类
 * @name mo.Base
 * @class
*/
(function(){
	
	
	Motion.add('mo.Base', function() {
		/**
		 * public 作用域
		 * @alias mo.Base#
		 * @ignore
		 */
		var _public = this;
		/**
		 * public static作用域
		 * @alias mo.Base.
		 * @ignore
		 */
		var _static = this.constructor;
		/**
		 * private static作用域
		 * @alias mo.Base~
		 * @ignore
		 */
		var _self = {};
		/**
		 * 构造函数
		 */
		_public.constructor = function() {
			// private作用域
			var _private = {};
		};


		/**
		 * 绑定事件
		 */
		
		_public.on = function(name, fn) {
			box = Zepto(this);
			return box.on.apply(box, arguments);
		};


		/**
		 * 绑定事件
		 */
		_public.off = function(name, fn) {
			box = Zepto(this);
			return box.off.apply(box, arguments);
		};

		/**
		 * 触发事件
		 */
		_public.trigger = function(name, data) {
			var box = Zepto(this);
			return box.triggerHandler.apply(box, arguments);
		};


	});

})();
/*===================filePath:[src/main/animation/animation.js]======================*/
/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-11-25
 * @description CSS3动画生成器 <br/> 一、提供javascript方法控制动画；二、提供事件接口监听动画；三、自动完成各平台兼容；四、提供大量内置动画，未使用时不插入。
 * @extends mo.Base
 * @name mo.Animation
 * @requires lib/zepto.js
 * @param {object} config.target 目标元素
 * @param {string} config.keyframes 动画关键帧设置，如果参数effect为空，该参数为必选
 * @param {string} [config.effect=''] 选择内置效果，也可以继续设置keyframes与内置效果叠加 <br/> 内置效果：flash, shake, swing, wobble, bounceIn, bounceInLeft, bounceInRight, bounceOut, bounceOutLeft, bounceOutRight, fadeIn, fadeOut, flip, flipInX, flipInY, flipOutX, flipOutY, rollIn, rollOut, zoomIn, zoomOut
 * @param {number} [config.duration=2000] 动画时间，单位ms
 * @param {string} [config.easing='swing'] 动画缓冲类型
 * @param {boolean} [config.autoPlay=true] 是否自动播放
 * @param {boolean} [config.fillMode='none'] none：默认值。不设置对象动画之外的状态<br/> forwards：设置对象状态为动画结束时的状态<br/> backwards：设置对象状态为动画开始时的状态<br/> both：设置对象状态为动画结束或开始的状态
 * @param {number} [config.delay=0] 设置对象动画延迟的时间，单位ms
 * @param {number|string} [config.iteration=1] 设置对象动画的循环次数。infinite为无限循环。
 * @param {string} [config.direction='normal'] 设置对象动画在循环中是否反向运动。<br/>normal：正常方向<br/> alternate正常与反向交替
 * @example
new mo.Animation({
	target: $(elem),
	effect: 'shake'
});	
 * @see animation/demo1.html 内置效果
 * @see animation/demo2.html 加载效果
 * @see animation/demo3.html 方法与事件
 * @class
*/
(function(){
	




	Motion.add('mo.Animation:mo.Base', function() {

		/**
		 * public 作用域
		 * @alias mo.Animation#
		 * @ignore
		 */
		var _public = this;

		var _private = {};

		/**
		 * public static作用域
		 * @alias mo.Animation.
		 * @ignore
		 */
		// var _static = arguments.callee;
		var _static = this.constructor;

		var head = document.getElementsByTagName('head')[0] || document.documentElement;
		var styleElem = document.createElement('style');
		head.appendChild(styleElem);



		// 插件默认配置
		_static.config = {
			duration : 2000,
			easing: 'swing',
			autoPlay: true,
			fillMode: 'none',
			delay: 0,
			iteration: 1,
			direction: 'normal',
			effect: '',
			apply: true,
			keyframes: {}
		};

		_private.effect = {
			'flash': {
				'0,50,100': {opacity: 1},
				'25,75': {opacity: 0}
			},
			'shake': {
				'0,100': {transform: 'translate3d(0, 0, 0)'},
				'10, 30, 50, 70, 90': {transform: 'translate3d(-10px, 0, 0)'},
				'20, 40, 60, 80': {transform: 'translate3d(10px, 0, 0)'}
			},
			'swing':{
				'20': {transform: 'rotate3d(0, 0, 1, 15deg)'},
				'40': {transform: 'rotate3d(0, 0, 1, -10deg)'},
				'60': {transform: 'rotate3d(0, 0, 1, 5deg)'},
				'80': {transform: 'rotate3d(0, 0, 1, -5deg)'},
				'100': {transform: 'rotate3d(0, 0, 1, 0deg)'}
			},
			'wobble':{
				'0': {transform: 'none'},
				'15': {transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'},
				'30': {transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'},
				'45': {transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'},
				'60': {transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'},
				'75': {transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'},
				'100': {transform: 'none'}
			},
			'bounceIn':{
				'0':{opacity: 0, transform: 'scale3d(.3, .3, .3)'},
				'20':{transform: 'scale3d(1.1, 1.1, 1.1)'},
				'40':{transform: 'scale3d(.9, .9, .9)'},
				'60':{opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)'},
				'80':{transform: 'scale3d(.97, .97, .97)'},
				'100':{opacity: 1, transform: 'scale3d(1, 1, 1)'}
			},
			'bounceInLeft':{
				'0':{opacity: 0, transform: 'translate3d(-3000px, 0, 0)'},
				'60':{opacity: 1, transform: 'translate3d(25px, 0, 0)'},
				'75':{transform: 'translate3d(-10px, 0, 0)'},
				'90':{transform: 'translate3d(5px, 0, 0)'},
				'100':{transform: 'none'}
			},
			'bounceInRight':{
				'0':{opacity: 0, transform: 'translate3d(3000px, 0, 0)'},
				'60':{opacity: 1, transform: 'translate3d(-25px, 0, 0)'},
				'75':{transform: 'translate3d(10px, 0, 0)'},
				'90':{transform: 'translate3d(-5px, 0, 0)'},
				'100':{transform: 'none'}
			},
			'bounceOut':{
				'0':{transform: 'scale3d(.9, .9, .9)'},
				'50,55':{transform: 'scale3d(1.1, 1.1, 1.1)'},
				'100':{opacity: 0, transform: 'scale3d(.3, .3, .3)'}
			},			
			'bounceOutLeft':{
				'20':{opacity:1,transform: 'translate3d(20px, 0, 0)'},
				'100':{opacity: 0, transform: 'translate3d(-2000px, 0, 0)'}
			},			
			'bounceOutRight':{
				'20':{opacity:1,transform: 'translate3d(-20px, 0, 0)'},
				'100':{opacity: 0, transform: 'translate3d(2000px, 0, 0)'}
			},
			'fadeIn':{
			  '0': {opacity: 0},
			  '100': {opacity: 1}
			},
			'fadeOut':{
			  '0': {opacity: 1},
			  '100': {opacity: 0}
			},
			'flip':{
				'0':{transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)'},
				'40':{transform: 'perspective(400px) rotate3d(0, 1, 0, -190deg)'},
				'60':{transform: 'perspective(400px) rotate3d(0, 1, 0, -170deg)'},
				'80':{transform: 'perspective(400px) scale3d(.95, .95, .95)', 'animation-timing-function': 'ease-in'},
				'100':{transform: 'perspective(400px)', 'animation-timing-function': 'ease-in'}
			},
			'flipInX':{
				'0':{transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)'},
				'40':{transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)'},
				'60':{transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)'},
				'80':{transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)'},
				'100':{transform: 'perspective(400px)'}
			},
			'flipInY':{
				'0':{transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)'},
				'40':{transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)'},
				'60':{transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)'},
				'80':{transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)'},
				'100':{transform: 'perspective(400px)'}
			},
			'flipOutX':{
				'0':{transform: 'perspective(400px)'},
				'30':{transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1},
				'100':{transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0}	
			},
			'flipOutY':{
				'0':{transform: 'perspective(400px)'},
				'30':{transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 1},
				'100':{transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0}	
			},
			'rollIn':{
				'0':{transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0},
				'100':{transform: 'none', opacity: 1}	
			},
			'rollOut':{
				'0':{transform: 'none', opacity: 1},
				'100':{transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0}
			},
			'zoomIn':{
				'0':{transform: 'scale3d(.3, .3, .3)', opacity: 0},
				'50':{opacity: 1}
			},
			'zoomOut':{
				'0':{opacity: 1},
				'50':{transform: 'scale3d(.3, .3, .3)', opacity: 0},
				'100':{opacity: 0}
			}
		};


		/***
		 * 初始化
		 * @description 参数处理
		 */
		_public.init = function(config){

			this.config = Zepto.extend({}, _static.config, config); // 参数接收

			/**
			 * @alias mo.Animation#
			 * @ignore
			 */
			var self = this;
			var config = self.config;

			/**
			 * 目标动画元素
			 * @type {Object}
			 */
			self.target = Zepto(config.target);

			/**
			 * 关键帧
			 * @type {Object}
			 */

			self.keyframes = {};
			if(config.effect) {
				Zepto.extend(self.keyframes, _private.effect[config.effect]);
			}
			if(config.keyframes) {
				Zepto.extend(self.keyframes, config.keyframes);
			}


			if(self.target.length < 1 || !self.keyframes) {
				return;
			}


			// event binding
			// self.effect && self.on(self.effect);
			config.event && self.on(config.event);

			self.percent = 0;

			self.__setup();

			// attach events
			self.__attach();

			if(config.autoPlay) {
				self.play();
			}
			
		};

		_public.__setup = function(){
			var self = this;
			var config = self.config;
			var prefix = '', eventPrefix,
		    vendors = {webkit: 'webkit', moz: '', O: 'o'},
		    testEl = document.createElement('div'),
		    // supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		    transform,
		    formatTime = function(n){return /^\d+$/.test(n) ? n + 'ms' : n.toString()};
		    

		    for(var key in vendors) {
				if (testEl.style[vendors[key] + 'Animation'] !== undefined) {
					prefix = '-' + key.toLowerCase() + '-';
					eventPrefix = key;
				}
		    }

		    _static.__prefix = prefix;
		    _static.__eventPrefix = eventPrefix;


			// create animate style
			var animateName = 'mo-' + parseInt(Math.random()*1000000);
			var cssText = '@' + prefix + 'keyframes ' + animateName + '{';
			for(var key in self.keyframes) {
				var css = '{';
				var obj = self.keyframes[key];
				for(var prop in obj) {
					var val = obj[prop];
					prop = prop.replace(/([A-Z])/g, function(a,b){return '-' + b.toLowerCase()});
					prop = prop.replace(/easing/g, 'animation-timing');
					prop = prop.replace(/^(?=transform|perspective|transition|animation)/g, prefix);
					css += prop + ':' + val + ';';
				}
				css += '}'
				key = key.replace(/%/g, '');
				key = key.split(',');
				for(var i = 0; i < key.length; i++) {
					cssText += key[i] + '%';
					cssText += css;
				}

			}
			cssText += '}';
			styleElem.appendChild(document.createTextNode(cssText));

			// apply animate
		    var style = self.animationStyle = {};
			if(config.apply) style[prefix + 'animation-name'] = animateName;
			style[prefix + 'animation-duration'] = formatTime(config.duration);
			style[prefix + 'animation-timing-function'] = config.easing;
			style[prefix + 'animation-delay'] = formatTime(config.delay);
			style[prefix + 'animation-direction'] = config.direction;
			style[prefix + 'animation-fill-mode'] = config.fillMode;
			style[prefix + 'animation-play-state'] = config.autoPlay ? 'running' : 'paused';
			style[prefix + 'animation-iteration-count'] = config.iteration.toString();
			self.target.css(style);

			self.animateName = animateName;
			self.target.data('animation-name', animateName);

			self.target.addClass('mo-animation');

		}

		_public.__attach = function(){
			var self = this;
			var config = self.config;


			self.target[0].addEventListener(_static.__eventPrefix + 'AnimationStart', function(e){
				if(e.target == self.target[0]) {
					self.__startTime = new Date();
					self.__runtime = 0;
					window.clearInterval(self.__timer);
					self.__timer = window.setInterval(function(){
				// console.log(self.target[0].className);
				// console.log( self);
						if(self.playing) {
							if(config.iteration === 1) {
								var now = new Date();
								self.__runtime += now - self.__startTime;
								self.__startTime = new Date();
								self.percent =  Math.round(self.__runtime * 100/config.duration);
								self.percent = self.percent > 100 ? 100 : self.percent;
							}
							/**
							 * @event mo.Animation#running: 动画播放时
							 * @property {object} event 事件对象
							 */
							self.trigger('running');

						}
					}, 20);

					/**
					 * @event mo.Animation#start: 动画开始时
					 * @property {object} event 事件对象
					 */
					self.trigger('start');
				}
			});
			self.target[0].addEventListener(_static.__eventPrefix + 'AnimationIteration', function(e){
				if(e.target == self.target[0]) {
					/**
					 * @event mo.Animation#iteration: 动画重复时
					 * @property {object} event 事件对象
					 */	
					self.trigger('iteration')
				}
			});
			self.target[0].addEventListener(_static.__eventPrefix + 'AnimationEnd', function(e){
				if(e.target == self.target[0]) {
					self.percent = 100;
					self.trigger('running');

					/**
					 * @event mo.Animation#end: 动画结束时
					 * @property {object} event 事件对象
					 */	
					self.trigger('end');
					window.clearInterval(self.__timer);			
				}		
			});
		};


		/**
		 * 播放动画
		 */
		_public.play = function(self){

			this.playing = true;
			this.__startTime = new Date();
			this.target.css(_static.__prefix + 'animation-play-state', 'running');

		};

		_public.getState = function(){
			return this.target.css(_static.__prefix + 'animation-play-state');
		};

		/**
		 * 重新播放动画
		 */		
		_public.rePlay = function(){
			this.__setup();
		};

		/**
		 * 暂停动画播放
		 */
		_public.stop = function(){
			/**
			 * 动画是否正在播放
			 * @type {boolean}
			 */
			this.playing = false;
			this.target.css(_static.__prefix + 'animation-play-state', 'paused');
		};

		/**
		 * 应用动画
		 */
		_public.apply = function(){
			this.target.css(_static.__prefix + 'animation-name', this.animateName);
		};

		/**
		 * 撤消动画
		 */
		_public.revoke = function(){
			this.target.css(_static.__prefix + 'animation-name', '');
		};

		/**
		 * 通过class自动触发动画
		 */
		_static.parse = function(context){
			var container = Zepto(document);
			if(context) {
				container = Zepto(context);
			}
			var animElems = container.find('.mo-animation');
			animElems.each(function(i, elem){
				elem = Zepto(elem);
				var pars = {
					target: elem
				};
				for(var prop in _static.config) {
					var val = elem.data(prop);
					
					if(val !== null) {
						pars[prop] = val;
					}
					
				}
				new mo.Animation(pars);
			});
		}


		/**
		 * 应用动画
		 */
		_static.apply = function(context){
			var container = Zepto(document);
			if(context) {
				container = Zepto(context);
			}
			var animElems = container.find('.mo-animation');
			animElems.each(function(i, elem){
				elem = Zepto(elem);
				elem.css(_static.__prefix + 'animation-name', elem.data('animation-name'));
				console.log(_static.__prefix + 'animation-name', elem.data('animation-name'));
			});
		};

		/**
		 * 撤消动画
		 */
		_static.revoke = function(context){
			var container = Zepto(document);
			if(context) {
				container = Zepto(context);
			}
			var animElems = container.find('.mo-animation');
			animElems.css(_static.__prefix + 'animation-name', '');
		};





	});

})();
/*===================filePath:[src/main/film/film.js]======================*/
/**
 * @author Aidenxiong
 * @version 1.0
 * @date 2014-08-20
 * @description 图片帧（逐帧）动画控制，支持sprite图及序列图片两种方式
 * @extends mo.Base
 * @name mo.Film
 * @requires ../../resource/zepto/zepto.js
 * @param {HTMLElement} node 帧动画播放的节点
 * @param {object} [config] 帧动画配置参数
 * @param {array|string} config.resource 帧资源图片，可以是数组也可以是单张图片，单张图片会被认为是sprite图
 * @param {number} [config.totalFrame=10] 总帧数
 * @param {number} [config.spriteDirect=0] 使用sprite图片的时候，可以指明sprite平铺方向  1为横向  2为纵向    如果值为0   那么根据长宽比进行判断
 * @param {number} [config.index=0] 默认显示第几帧
 * @param {number} [config.playTime=1000] 滚动执行时间
 * @param {string} [config.aniType=linear] 运算轨迹
 * @param {function} [config.onLoading] 资源加载时的回调
 * @param {function} [config.onComplete] 资源加载完成后的回调
 * @param {function}  [config.onPlaying] 每次完成一张图片切换时的回调 
 * @param {function}  [config.aniComplete] 每次自动完成一次动画播放后的回调 
 * @example
		var film = new mo.Film(document.getElementById('test'), {
			resource: []
		});
 * @see film/multiple.htm 多图形式
 * @see film/sprite.htm   雪碧图形式
 * @class
*/

(function(){
	
	
	Motion.add('mo.Film:mo.Base', function() {
		/**
		 * public 作用域
		 * @alias mo.Film#
		 * @ignore
		 */
		var _public = this;

		var _private = {
		/**
			 * 空函数  什么也不干
			 * @return {[type]} [description]
			 */
			empty : function(){},
			/**
			 * 单张图片加载
			 * @param  {String}   src 图片地址
			 * @param  {Function} cb  加载完成后的回调
			 * @return {undefined}
			 */
			imgSingleLoader : function(src, cb){
				var img = new Image();
				img.onload = function(){
					cb({
						width : img.width,
						height : img.height
					});
					img.onload = null;
				}
				img.src = src;
			},
			/**
			 * 批量图片加载
			 * @param  {Array|String} res            资源地址
			 * @param  {Function}     singleComplete 单个资源加载完成的回调
			 * @param  {Function}     allComplete    所有资源加载完成后的回调
			 * @return {undefined}
			 */
			resLoader : function(res, singleComplete, allComplete){
				var len = res.length, count = 0;
				$.each(res, function(index, item){
					_private.imgSingleLoader(item, function(size){
						singleComplete(++count, len, size);
						if(count == len){
							allComplete(size);
						}
					});
				});
			},
			/**
			 * RequestAnimationFrame兼容写法
			 * @return {Object} cancel和request方法
			 */
			animation : function(){
				var lastTime = 0;
				var vendors = ['ms', 'moz', 'webkit', 'o'];
				var request, cancel;
				for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
					request = window[vendors[x]+'RequestAnimationFrame'];
					cancel = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
				}

				if (!request) {
					request = function(callback, element) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function() { 
							callback(currTime + timeToCall); 
						},timeToCall);
						lastTime = currTime + timeToCall;
						return id;
					};
				}

				if (!cancel) {
					cancel = function(id) {
						clearTimeout(id);
					};
				}

				return {
					"request" : request,
					"cancel" : cancel
				}
			}(),
			/**
			 * 动画类型
			 * @type {Object}
			 */
			aniType : {
				'linear' : function(t,b,c,d){ return c*t/d + b; },
				'easeIn': function(t,b,c,d){
					return c*(t/=d)*t + b;
				},
				'easeOut': function(t,b,c,d){
					return -c *(t/=d)*(t-2) + b;
				},
				'easeInOut': function(t,b,c,d){
					if ((t/=d/2) < 1) return c/2*t*t + b;
					return -c/2 * ((--t)*(t-2) - 1) + b;
				}
			},
			/**
			 * dom指定唯一标识
			 * @return {String} 唯一标识
			 */
			uniqueID : (function(){
				var _loadTime = (new Date()).getTime().toString(), _i = 1;
				var getUniqueKey = function(){
					return _loadTime + (_i++);
				}
				return function(dom){
					return dom && (dom.uniqueID || (dom.uniqueID = getUniqueKey()));
				}
				
			})()
		}
		/**
		 * public static作用域
		 * @alias mo.Film.
		 * @ignore
		 */
		var _static = this.constructor;


		// 插件默认配置
		_static.config = {
			resource : [],  //如果传递的为一张图片，那么认为是采用sprite的形式进行
			perload : true, //是否需要预加载资源
			totalFrame : 10,  //帧数
			spriteDirect : 0, //使用sprite图片的时候，可以指明sprite平铺方向  1为横向  2为纵向    如果值为0   那么根据长宽比进行判断
			index : 0, //默认显示第几帧
			playTime : 1000, //滚动执行事件
			aniType : 'linear', //运算轨迹
			onLoading : _private.empty, //资源加载时的回调
			onComplete : _private.empty,  //资源加载完成后的回调
			onPlaying : _private.empty,  //每次完成一张图片切换时的回调
			aniComplete : _private.empty //每次自动完成一次动画播放后的回调
		};

		/***
		 * 初始化
		 * @description 参数处理
		 */
		_public.init = function(node, config) {
			if (!node) {
				return;
			}
			this.config = Zepto.extend(true, {}, _static.config, config); // 参数接收
			var _config = this.config;
			var _self = this;

			//属性处理
			Zepto.extend(_self, /** @lends mo.Film.prototype*/ {
				/**
				 * 需要加载的资源
				 * @type {Array}
				 */
				resource: [].concat(_config.resource),
				/**
				 * 当前停留在的帧序号
				 * @type {Number}
				 */
				curIndex : 0,
				/**
				 * 是否正在加载
				 * @type {Boolean}
				 */
				isLoading : true,
				/**
				 * 帧数
				 * @type {Number}
				 */
				totalFrame : _config.totalFrame,
				/**
				 * 帧动画的尺寸(宽高)
				 * @type {Object}
				 */
				filmSize : {},
				/**
				 * 真正执行帧动画的节点
				 * @type {[type]}
				 */
				filmNode : node,
				/**
				 * 每帧对应的样式/src
				 * @type {Array}
				 */
				frameStyles : [],
				/**
				 * 播放动画ID
				 * @type {[type]}
				 */
				animationId : null
			});

			var loadComplete = function(size){
				_self.isLoading = false;

				var _totalFrame = _self.totalFrame, _contSize = _self.filmSize, _frameStyles = _self.frameStyles;
				//雪碧图形式 资源数量为1
				if(_self.resource.length == 1){
					//横向
					var lateral = function(){
						_contSize.width = size.width/_totalFrame;
						_contSize.height = size.height;
						for (var i = 0; i < _totalFrame; i++) {
							_frameStyles.push("url(" + _self.resource[0] + ") -" + (_contSize.width*i) + "px 0 no-repeat;");
						};
					}
					//纵向
					var portrait = function(){
						_contSize.width = size.width;
						_contSize.height = size.height/_totalFrame;
						for (var i = 0; i < _totalFrame; i++) {
							_frameStyles.push("url(" + _self.resource[0] + ") 0 -" + (_contSize.height*i) + "px no-repeat;")
						};
					}
					if(config.spriteDirect == 1){ //横向
						lateral();
					}else if(config.spriteDirect == 2){ //纵向
						portrait();
					}else{
						size.width > size.height ? lateral() : portrait();
					}
				}else{  //如果资源数超过两个，那么配置参数中的totalFrame不起作用，已实际传入的资源数为准
					_totalFrame = _self.totalFrame = _self.resource.length;
					_self.filmSize = size;

					_self.filmNode = document.createElement('img');
					node.appendChild(_self.filmNode);
					for (var i = 0; i < _totalFrame; i++) {
						_frameStyles.push(_self.resource[i]);
					};
				}
				_config.onComplete(size);
				_self.jumpTo(_config.index);
			}
			if(_config.preload){
				//资源预加载
				_private.resLoader(_self.resource, _config.onLoading, loadComplete);
			}else{
				//不用预加载
				_private.imgSingleLoader(_self.resource[0], loadComplete);
			}
		}

		/**
		 * 参数格式化
		 * @param  {[type]} opt [description]
		 * @return {[type]}     [description]
		 */
		_private.formatOpt = function(config, opt){
			var tempObj = {}
			if(typeof opt == 'string'){
				opt = {
					'direction' : opt
				};
			}
			tempObj = Zepto.extend(true, {}, config, opt);
			tempObj.direction = tempObj.direction == 'backward' ? 'backward' : 'forward';
			return tempObj
		}

		/**
		 * @function jumpTo
		 * @description 跳转至的帧数
		 * @param  {[type]} index 需要跳转到的帧数
		 * @return {Object}       film对象
		 */
		_public.jumpTo = function(index){
			var _self = this;
			if(_self.isLoading) return;

			if(index < 0){  //负数的情况从后面往前数
				index = index - Math.floor(index/_self.totalFrame) * _self.totalFrame;
			}else{
				index = index % _self.totalFrame;
			}
			if(_self.resource.length == 1){
				Zepto(_self.filmNode).css({
					width : _self.filmSize.width,
					height : _self.filmSize.height,
					background : _self.frameStyles[index]
				})
			}else{
				_self.filmNode.src = _self.frameStyles[index];
			}
			_self.curIndex = index;
			_self.config.onPlaying(_self.curIndex);
			return _self;
		}
		/**
		 * 跳转到下一帧
		 * @return {object} film对象
		 */
		_public.next = function(){
			var _self = this;
			_self.jumpTo(_self.curIndex + 1);
			return _self;
		};
		/**
		 * 跳转到上一帧
		 * @return {object} film对象
		 */
		_public.prev = function(){
			var _self = this;
			_self.jumpTo(_self.curIndex - 1);
			return _self;
		};
		/**
		 * 通过告诉停留在第几个位置上来定位滑动位置
		 * @param  {Number} index 需要播放到的位置
		 * @param  {String} opt   播放的方向   向前：forward  向后：backward
		 * @return {object} film对象
		 */
		_public.playByIndex = function(index, opt){
			var _self = this;
			opt = _private.formatOpt(_self.config, opt);
			var playNum = 0;
			index = index % _self.totalFrame;
			if((opt.direction == 'forward' && _self.curIndex >= index) || (opt.direction == 'backward' && _self.curIndex <= index)){
				playNum = _self.totalFrame - _self.curIndex + index;
			}else{
				playNum = index - _self.curIndex;
			}
			_self.playByNum(playNum, opt);
			return _self;
		};
		/**
		 * 通过规定播放的帧数来滑动
		 * @param  {Number} num 需要播放的帧数
		 * @param  {String} opt 播放的方向   向前：forward  向后：backward
		 * @return {object} film对象
		 */
		_public.playByNum = function(num, opt){
			var _self = this;
			_self.aid && _self.pause();
			opt = _private.formatOpt(_self.config, opt);
			var startTime = new Date().getTime();
			var endTime = startTime + opt.playTime;
			var aniFunc = typeof opt.aniType == 'function' ? opt.aniType : (_private.aniType[opt.aniType] || _private.aniType['linear']);
			var hasPlayedNum = 0, nextPlayTime = aniFunc(hasPlayedNum + 1, startTime, opt.playTime, num);
			(function loop(cTime){
				if(cTime >= nextPlayTime){
					hasPlayedNum++;
					nextPlayTime = aniFunc(hasPlayedNum + 1, startTime, opt.playTime, num);
					opt.direction == 'forward' ? _self.next() : _self.prev();
				}
				if(cTime <= endTime){
					_self.aid = _private.animation.request(loop);
				}else{
					_self.aid = null;
					opt.aniComplete(_self.curIndex);
				}
			})(startTime);
			return _self;
		}
		/**
		 * 播放帧动画
		 * @param  {number} t   每帧之间的时间间隔
		 * @param  {[type]} dir 播放方向 支持forward和backward
		 * @return {object} film对象
		 */
		_public.play = function(t, dir){
			var _self = this;
			_self.aid && _self.pause();
			var startTime = new Date().getTime(), lastTime = startTime;
			(function loop(cTime){
				if(cTime > lastTime + t){
					lastTime = cTime;
					dir == 'forward' ? _self.next() : _self.prev();
				}
				_self.aid = _private.animation.request(loop);
			})(startTime);
			return _self;
		}
		/**
		 * 暂停播放
		 * @return {object} film对象
		 */
		_public.pause = function(){
			var _self = this;
			_private.animation.cancel(_self.aid);
			_self.aid = null;
			return _self;
		}
		
	})
})();
/*===================filePath:[src/main/loader/loader.js]======================*/
/**
 * @author AidenXiong
 * @version 1.1
 * @date 2014-09-16
 * @description 图片懒加载
 * @extends mo.Base
 * @name mo.Loader
 * @requires lib/zepto.js
 * @param {Array} [res=[]] 需要加载的资源列表
 * @param {object} [opts] 配置参数
 * @param {Function} [opts.onLoading] 当个资源加载完成后的回调
 * @param {Function} [opts.onComplete] 所有资源加载完成后的回调
 * @param {Number} [opts.loadType=0] 0为并行加载  1为串行加载
 * @param {Number} [opts.minTime=0] 加载单个资源需要耗费的最少时间(毫秒)
 * @param {Strnig} [opts.dataAttr=preload] Dom元素需要预加载资源的dom属性默认：data-preload
 * @example
 		var sourceArr = []; //需要加载的资源列表
		new mo.Loader(sourceArr,{
			onLoading : function(count,total){
				console.log('onloading:single loaded:',arguments)
			},
			onComplete : function(time){
				console.log('oncomplete:all source loaded:',arguments)
			}
		})
 * @see loader/loader.html 资源预加载
 * @see loader/byselector.html 通过选择器的方式预加载
 * @see loader/mixed.html 混合加载方式
 * @update 
 * 	2015/01/28 增加支持并行和串行两种加载方式，且可设置加载单个资源所需的最少时间
 * 	2015/04/13 增加通过选择器方式定义加载图片/背景资源的方式
 * @class
*/
(function(){
	
	
	Motion.add('mo.Loader:mo.Base', function() {
		/**
		 * public 作用域
		 * @alias mo.Loader#
		 * @ignore
		 */
		var _public = this;

		var _private = {
			/**
			 * 空函数  什么也不干
			 * @return {[type]} [description]
			 */
			'empty' : function(){},
			/**
			 * 图片加载
			 * @param  {string}   src 需要加载的图片路径
			 * @param  {Function} fn  加载完图片的回调
			 * @return {undefined}       
			 */
			'imgLoader' : function(src, fn){
				var img = new Image(), sTime = new Date();
				img.onload = img.onerror = function(){ //加载错误也认为是加载完成
					fn(src, img, new Date()-sTime);
					img.onload = null;
				}
				img.src = src;
			},
			/**
			 * 脚本加载
			 * @param  {string}   src 需要加载的脚本路径
			 * @param  {Function} fn  加载完图片的回调
			 * @return {string} charset 脚本编码       
			 */
			'jsLoader' : function(){
				var firstScript = document.getElementsByTagName('script')[0];
				var scriptHead = firstScript.parentNode;
				var re = /ded|co/;
				var onload = 'onload';
				var onreadystatechange = 'onreadystatechange'; 
				var readyState = 'readyState';
				return function(src, fn, charset){
					charset = charset || 'gb2312';
					var script = document.createElement('script'), sTime = new Date();
					script.charset = charset;
					script[onload] = script[onreadystatechange] = function(){
						if(!this[readyState] || re.test(this[readyState])){
							script[onload] = script[onreadystatechange] = null;
							fn && fn(src, script, new Date() - sTime);
							script = null;
						}
					};
					script.async = true;
					script.src = src;
					scriptHead.insertBefore(script, firstScript);
				}
			}(),
			/**
			 * css样式文件加载
			 * @param  {string}   href 样式文件路径
			 * @param  {Function} fn   加载完成后的回调
			 * @return {undefined}     
			 */
			'cssLoader' : function(href,fn){
				var head = document.head || document.getElementsByTagName('head')[0];
				var sTime = new Date();
				node = document.createElement('link');
				node.rel = 'stylesheet';
				node.href = href;
				head.appendChild(node);
				fn && fn(href, node, new Date() - sTime);
			},
			/**
			 * [description]
			 * @param  {string}   src 音频文件路径
			 * @param  {Function} fn  加载完成的回调
			 * @return {undefined}    
			 */
			'audioLoader' : function(src, fn){
				var aud = new Audio(), sTime = new Date();
				$(aud).bind('canplaythrough', function() { // totally loaded
					fn(src, aud, new Date() - sTime);
				});
				aud.src = src;
				aud.load();
			},
			/**
			 * 根据url获取扩展名
			 * @param  {string} url url路径
			 * @return {string}     扩展名
			 */
			getExt : function(url){
				return url.match(/\.([^\.]*)$/)[0].substr(1).match(/^[a-zA-Z0-9]+/)[0];
			},
			/**
			 * 根据url获取资源类型
			 * @param  {string} url 文件路径
			 * @return {string}     文件类型
			 */
			getType : function(url){
				var ext = _private.getExt(url);
				var types = {
					'img' : ['png','jpg','gif'],
					'css' : ['css'],
					'js' : ['js'],
					'audio' : ['mp3','ogg','wav']
				}
				for(var k in types){
					if(types[k].indexOf(ext) > -1){
						return k
					}
				}
				return false;
			}
		};

		/**
		 * public static作用域
		 * @alias mo.Loader.
		 * @ignore
		 */
		var _static = this.constructor;



		_public.constructor = function(res, config) {
			if (!res) {
				return;
			}
			this.init(res, config);
		}

		// 插件默认配置
		_static.config = {
			'onLoading' : _private.empty,
			'onComplete' : _private.empty,
			'loadType' : 0, //0为并行加载  1为串行加载
			'minTime' : 0, //单个资源加载所需的最小时间数（毫秒）
			'dataAttr' : 'preload'
		};

		/***
		 * 初始化
		 * @description 参数处理
		 */
		_public.init = function(res, config) {
			var _self = this;
			if(typeof config == 'function'){
				var tempFunc = config;
				config = {
					'onComplete' : tempFunc
				}
			}
			_self.config = Zepto.extend(true, {}, _static.config, config); // 参数接收
			var config = _self.config;
			res = [].concat(res);

			var resourceCache = {}

			//获取页面上配置了预加载的节点
			var resDom = Array.prototype.slice.call(document.querySelectorAll('[data-'+config.dataAttr+']'));
			Zepto(resDom).each(function(index, el){
				var _el = Zepto(el);
				var attr = _el.attr('data-'+config.dataAttr);
				if(resourceCache[attr]){
					resourceCache[attr].push(el);
				}else{
					resourceCache[attr] = [el];
					res.indexOf(attr) < 0 && res.push(attr)
				}
			})

			config.event && _self.on(config.event);
			var len = res.length, loaded = 0;
			Zepto(res).each(function(index, item){
				if(typeof item == 'object'){
					len--;
					for(var k in item){
						len++;
					}
				}
			});
			var sTime = new Date().getTime();
			var replaceSrc = function(src){
				if(resourceCache[src]){ //是从节点上提取到的预加载数据
					Zepto.each(resourceCache[src], function(index, dom){
						dom.removeAttribute('data-'+config.dataAttr);
						var tagName = dom.tagName.toLowerCase();
						switch(tagName){
							case 'link': //css文件节点
								dom.href = src;
								break;
							case 'img':
							case 'script':
							case 'video':
								dom.src = src;
								break;
							default:
								dom.style.backgroundImage = 'url('+src+')';
						}
					})
				}
			}
			var load = function(src, node, durTime, realCompleteBack){
				var loadedFunc = function(){
					config.onLoading(++loaded, len, src, node);
					/**
					 * @event mo.Loader#loading
					 * @property {object} event 单个资源加载完成
					 */
					_self.trigger('loading',[loaded, len, src, node]);
					replaceSrc(src);
					realCompleteBack([loaded, len, src, node]);
					if(loaded == len){ //加载完成
						var times = new Date().getTime() - sTime;
						config.onComplete(times);
						/**
						 * @event mo.Loader#complete
						 * @property {object} event 所有资源加载完成
						 */
						_self.trigger('complete', [times]);
					}
				}
				var timeDiff = config.minTime - durTime;
				timeDiff > 0 ? setTimeout(loadedFunc, timeDiff) : loadedFunc();
			}
			if(res.length){
				var loadOne = function(item, resLoadBack, realCompleteBack){
					var resLoaded = function(item, resLoadBack, realCompleteBack){
						var type = _private.getType(item), realCompleteBack = realCompleteBack || function(){};
						var callFunc = _private[type+'Loader'];
						if(callFunc === undefined){ //不支持的类型默认认为是加载了
							resLoadBack(item, null, 0, realCompleteBack);
						}else{
							callFunc(item, function(){
								var args = Array.prototype.slice.call(arguments,0)
								args.push(realCompleteBack);
								resLoadBack.apply(null, args)
							});
						}
					}
					if(typeof item == 'object'){
						for(var k in item){//传入的为键值对  那么认为是选择器+背景图片资源   加载完成后直接应用
							(function(key, value){
								resLoaded(value, function(){
									var items = Zepto(key)
									if(items.is('img')){
										items.attr('src', value);
									}else{
										items.css('backgroundImage', 'url("'+value+'")');
									}
									var args = Array.prototype.slice.call(arguments,0)
									resLoadBack.apply(null, args);
								}, realCompleteBack);
							})(k, item[k])
						}
					}else{
						resLoaded(item, resLoadBack, realCompleteBack);
					}
				}
				if(config.loadType == 1){//串行加载
					var i = 0;
					(function(){
						var caller = arguments.callee;
						loadOne(res[i], function(){
							load.apply(null, arguments);
						}, function(){
							i++;
							res[i] && caller();
						})
					})()
				}else{ //并行加载
					Zepto.each(res, function(index, item){
						loadOne(item, load)
					});
				}
			}else{
				config.onComplete(0);
				_self.trigger('complete', [0]);
			}
		}
	});
})();
/*===================filePath:[src/main/tab/tab.js]======================*/
/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-06-18
 * @description 切换类中
 * @extends mo.Base
 * @name mo.Tab
 * @requires lib/zepto.js
 * @requires src/base.js
 * @param {object|string} config.target 目标选项卡片，即供切换的 Elements list (Elements.length >= 2)
 * @param {object|string} [config.controller='ul>li*'] 触发器
 * @param {string} [config.direction='x'] 指定方向，仅效果为'slide'时有效
 * @param {boolean}  [config.autoPlay=false] 是否自动播放 
 * @param {number}  [config.playTo=0] 默认播放第几个（索引值计数，即0开始的计数方式） 
 * @param {number}  [config.switchTo=undefined] 切换到第几个（无动画效果） 
 * @param {string}  [config.type='touchend'] 事件触发类型
 * @param {string}  [config.currentClass='current'] 当前样式名称, 多tab嵌套时有指定需求
 * @param {boolean}  [config.link=false] tab controller中的链接是否可被点击
 * @param {boolean}  [config.circle=false] 是否循环滚动
 * @param {number}  [config.stay=2000] 自动播放时停留时间
 * @param {number}  [config.disable] 禁止某屏滚动
 * @param {object|string}  [config.prevBtn] 播放前一张，调用prev()
 * @param {object|string}  [config.nextBtn] 插放后一张，调用next()
 * @param {string}  [config.easing='swing'] 动画方式：默认可选(可加载Zepto.easying.js扩充)：'swing', 'linear'
 * @param {object{string:function}}  [config.event] 初始化绑定的事件
 * @param {object{'dataSrc':Element, 'dataProp':String, 'dataWrap':Element, 'delay': Number}}  [config.title] 初始化绑定的事件
 * @param {boolean}  [config.lazy=false] 是否启用按需加载，需要按需加载的元素设置data-src属性
 * @example
		var tab1 = new mo.Tab({
			target: $('#slide01 li')
		});
 * @see tab/demo1.html 普通切换
 * @see tab/demo2.html 按需加载
 * @see tab/demo3.html 自定义事件
 * @class
*/
(function(){
	
	
	Motion.add('mo.Tab:mo.Base', function() {
		/**
		 * public 作用域
		 * @alias mo.Tab#
		 * @ignore
		 */
		var _public = this;

		var _private = {};

		/**
		 * public static作用域
		 * @alias mo.Tab.
		 * @ignore
		 */
		var _static = this.constructor;


		// 插件默认配置
		_static.config = {
			//target // 目标 tab items
			//controller // tab header(toc?)
			//width // 限定目标宽度
			//height // 限定目标高度
			//disable // 禁止某屏滚动
			//arrow // 指示箭头
			effect: 'base',
			direction: 'x',
			autoPlay: false,
			playTo: 0, // 播放到第几个 tab
			switchTo: window.undefined, // 切换到第几个 tab
			type: 'touchend',
			currentClass: 'current',
			link: false,
			stay: 2000,
			delay: 200,
			touchDis: 20,
			lazy: window.undefined,
			circle: false,
			degradation: 'base',
			animateTime: 300,
			event: {},
			easing: 'ease',
			title: {
				delay: 0
			},
			controlDisabed: false
		};

		_static.effect = {};

		_private.supportTouch = 'ontouchstart' in window;
		_private.e = {
			'touchstart' : _private.supportTouch ? 'touchstart' : 'mousedown',
			'touchmove' : _private.supportTouch ? 'touchmove' : 'mousemove',
			'touchend' : _private.supportTouch ? 'touchend' : 'mouseup'
		}



		/***
		 * 初始化
		 * @description 参数处理
		 */
		_public.init = function(config) {
			this.config = Zepto.extend(true, {}, _static.config, config); // 参数接收

			var self = this;
			var config = self.config;


			// 必选参数处理
			var target = Zepto(config.target);


			// 统计实例
			if(this.constructor.instances) {
				this.constructor.instances.push(this);
			} else {
				this.constructor.instances = [this];
			}

			// 参数处理
			Zepto.extend(self, /** @lends mo.Tab.prototype*/ {
				/**
				 * 目标选项卡片
				 * @type object
				 */
				target: target,

				/**
				 * 目标选项卡片控制器
				 * @type object
				 */
				controller: null,

				/**
				 * 上一个选项卡的索引值
				 * @type number|undefined
				 */
				prevPage: window.undefined,

				/**
				 * 当前播放第几个的索引值
				 * @type number|undefined
				 */
				curPage: window.undefined,

				/**
				 * 目标选项卡片容器
				 * @type object
				 */
				container: target.parent(), // 包裹容器

				//length: target.length, // 元素数目
				prevBtn: Zepto(config.prevBtn),
				nextBtn: Zepto(config.nextBtn),

				/**
				 * 播放状态
				 * @type boolean
				 */
				isPlaying: config.autoPlay,

				disabledPrevList: [],
				disabledNextList: []
			});

			if (target.length <= 1) {
				return;
			}

			if(config.disable !== window.undefined) {
				self.disable(config.disable);
			}
			if(!config.circle) {
				self.disable(0, 'prev');
				self.disable(self.target.length-1, 'next');
			} 
			

			// 快捷传入自定义事件
			for(var name in config) {
				var result = /^on(.+)/.exec(name);
				if(result && result[1]) {
					config.event[result[1]] = config[name];
				}
			}

			// 效果作为自定义事件绑定
			if(_static.effect[config.effect]['beforechange']) {
				_static.effect[config.effect]['mobeforechange'] = _static.effect[config.effect]['beforechange'];
				delete _static.effect[config.effect]['beforechange'];
			}
			self.on(_static.effect[config.effect]);

			// 自定义事件绑定
			self.on(config.event);


			/**
			 * @event mo.Tab#beforeinit
			 * @property {object} event 开始初始化前
			 */
			if (self.trigger('beforeinit') === false) {
				return;
			}

			// DOM初始化
			_private.initDOM.call(self);

			// DOM绑定事件
			_private.attach.call(self);

			// 延时0s，待init对DOM修改渲染完成后执行
			/**
			 * @event mo.Tab#init
			 * @property {object} event 初始化完成
			 */
			if (self.trigger('init') === false) {
				return;
			}


			// 播放到默认Tab
			if(config.switchTo !== window.undefined) {
				self.switchTo(config.switchTo);
			} else {
				self.switchTo(config.playTo);
			}
			

			// 自动播放
			if (config.autoPlay) self.play();


		};

		// 绑定事件
		_private.initDOM = function() {
			var self = this;
			var config = self.config;

			// 保证 目标层、包裹层、容器层 三层方便控制
			// if (/(:?ul|ol|dl)/i.test(self.container[0].tagName)) {
			// 	self.wrap = self.container;
			// 	self.container = self.wrap.parent();
			// } else {
			// 	config.target.wrapAll('<div class="tab_wrap">'); // 可能带来风险，尽量用用规则保障，不执行到这一步
			// 	self.wrap = self.target.parent();
			// }
			self.wrap = self.container;
			self.container = self.wrap.parent();

			// 如果有控制controller
			if (config.controller !== false) {
				config.controller = Zepto(config.controller);
				if (config.controller.length < 1) {
					var ul = Zepto('<ul class="controller">');
					var str = '';
					for (var i = 0; i < self.target.length; i++) {
						str += '<li>' + (i + 1) + '</li>';
					}
					ul.html(str);
					self.container.append(ul);
					config.controller = ul.children();
				}
				self.controller = config.controller;
			}

			// 移除不需要且只含有document.write的script标签，以防后续操作出错
			var scripts = self.target.find('script');
			scripts.each(function(i, elem) {
				elem = Zepto(elem);
				// 如果script中只执行了document.write，则移出该script标签
				if (/^\s*document\.write\([^\)]+\)[\s;]*$/.test(elem.html())) {
					elem.remove();
				}
			});

			// 获取标题
			var titleSrc = config.title.dataSrc || self.target;
			var titleProp = config.title.dataProp || 'title';
			var titleWrap = Zepto(config.title.dataWrap);
			titleSrc = Zepto(titleSrc);

			// 如果标题容器存在 并且 有标题数据
			if (titleWrap.length > 0 && titleSrc.attr(titleProp)) {
				self.titleWrap = titleWrap;
				self.titleData = [];
				titleSrc.each(function(i, obj) {
					self.titleData.push(Zepto(obj).attr(titleProp));
				});
			}

			// 检测前缀
			self.cssPrefix = '';
			self.propPrefix = '';
			var vendors = {'webkit': 'webkit', 'Moz': 'moz', 'ms': 'ms'};
			var testElem = document.createElement('div');
			for(var key in vendors) {
				if (testElem.style[key + 'Transform'] !== undefined) {
					self.cssPrefix = '-' + vendors[key] + '-';
					self.propPrefix = key;
					break;
				}
			}



		};

		// 绑定事件
		_private.attach = function() {
			var self = this;
			var config = self.config;

			if (self.controller) {
				Zepto.each(self.controller, function(i, elem) {
					var elem = Zepto(elem);
					var delayTimer;
					elem.on(config.type, function() {
						self.playTo(i);
					});
					if (!config.link) {
						Zepto(elem).on(_private.e.touchstart, function(e) {
							e.preventDefault();
						});
					}

				})
			}

			if (self.nextBtn) {
				Zepto(self.nextBtn).on(_private.e.touchend, function(e) {
					self.next();
					e.preventDefault();
				});
			}

			if (self.prevBtn) {
				Zepto(self.prevBtn).on(_private.e.touchend, function(e) {
					self.prev();
					e.preventDefault();
				});
			}

			self.wrap.on(_private.e.touchstart, function() {
				// 如果没在自动播放
				if (self.isPlaying) {
					_private.clearTimer.call(self);
				}
			});
			Zepto('body').on(_private.e.touchend, function() {
				// 如果没在自动播放
				if (self.isPlaying) {
					_private.setTimer.call(self);
				}

			});

			if(config.touchMove) {
				_private.touchMove.call(self);
			}

		};

		/**
		 * 播放到第几个选项卡
		 * @param {number} page 第几页（索引值）
		 */
		_public.playTo = function(page) {
			page = parseInt(page);
			if(page === NaN ) {
				return;
			}
			var self = this;
			var config = self.config;
			var hasCur = self.curPage !== window.undefined;
			var prevPage;

			if(page === self.oriCurPage) {
				self.trigger('mobeforechange');
				return;
			}

			// 临界计算
			self._outBound =  function(i) {
				if (i >= self.target.length) i %= self.target.length;
				if (i < 0) {
					var m = i % self.target.length;
					i = m === 0 ? 0 : (m + self.target.length);
				}
				return i;
			}

			self.oriPrevPage = self.oriCurPage;
			self.oriCurPage = page;


			self.prevPage = self.curPage;
			prevPage = self.curPage;
			page = self.curPage = self._outBound(page);


			if (self.controller && page !== prevPage) {
				var curCtrl = self.controller[page],
					prevCtrl = self.controller[prevPage];
				if (curCtrl) {
					//curCtrl.setAttribute('a', page);
					Zepto(curCtrl).addClass(self.config.currentClass);
				}
				if (prevCtrl) Zepto(prevCtrl).removeClass(self.config.currentClass); //如果正常获取


			}

			if(page !== prevPage) {
				self.target.eq(page).addClass(self.config.currentClass);
				self.target.eq(prevPage).removeClass(self.config.currentClass);	
			}

			// 填充标题
			if (self.titleWrap) {
				window.setTimeout(function() {
					self.titleWrap.html(self.titleData[self.curPage] || '');
				}, config.title.delay);
			}

			// 按需加载
			var curTarget = Zepto(self.target[self.curPage]);
			if (config.lazy === window.undefined) {
				var curChildren = curTarget.children();
				if (curChildren.length === 1 && curChildren[0].tagName.toLowerCase() == 'textarea') {
					config.lazy = true;
				}
			}
			if (config.lazy === true) {
				if (curTarget.length > 0 && !curTarget.data('parsed')) _private.lazyload(curTarget);
				if(self._loaded === window.undefined) {
					self._loaded = [];
				}
				if(self._loaded.indexOf(page) === -1) {
					var curObj = self.target.eq(page);
					var elems = curObj.find('*');
					elems = Zepto(elems.concat(curObj));
					elems.each(function(i, elem){
						elem = Zepto(elem);
						var src = elem.data('src');
						if(src) {
							if(/img|audio|video|link/i.test(elem[0].tagName)) {
								elem.attr('src', src);
							} else {
								elem.css('background-image', 'url(' + src + ')');
							}
							
							elem.removeAttr('data-src');
						}

					});
					self._loaded.push(page);
				}
				
			}

			//self.config.onchange.call(self, page);
			/**
			 * @event mo.Tab#beforechange
			 * @property {object} event 开始切换
			 */
			if (self.trigger('beforechange', [self.curPage]) === false) {
				return;
			}

			self.trigger('mobeforechange');
			//if(self.effect) self.effect.onchange.call(self);

			// 指示箭头显示/隐藏
			var arrow = Zepto(config.arrow);
			if(arrow.length > 0) {
				console.log(self.curPage >= self.target.length - 1);
				if((self.curPage >= self.target.length - 1 && !config.circle) || self.disabledNextList.indexOf(self.curPage) != -1) {
					arrow.css('display', 'none')
				} else {
					arrow.css('display', 'block')
				}
			}

		};

		/**
		 * 播放后一个
		 */
		_public.next = function() {
			this.playTo(this.oriCurPage + 1);
		};

		/**
		 * 播放前一个
		 */
		_public.prev = function() {
			this.playTo(this.oriCurPage - 1);
		};

		/**
		 * 开始自动播放
		 */
		_private.setTimer = function() {
			var self = this;
			var config = self.config;
			if (self.timer) {
				_private.clearTimer.call(self);
			}

			self.timer = window.setInterval(function() {
				var to = self.curPage + 1;
				self.playTo(to);

			}, config.stay);

		};

		/**
		 * 停止自动播放
		 */
		_private.clearTimer = function() {
			window.clearInterval(this.timer);
		};

		/**
		 * 开始自动播放
		 */
		_public.play = function() {
			var self = this;
			_private.setTimer.call(self);
			self.isPlaying = true;
			self.trigger('play');
		};

		/**
		 * 停止自动播放
		 */
		_public.stop = function() {
			var self = this;
			_private.clearTimer.call(self);
			self.isPlaying = false;
			self.trigger('stop');
		};


		/**
		 * 禁用某屏
		 */
		_public.disable = function(index, direction) {
			var self = this;
			if(!direction || direction == 'prev') {
				self.disabledPrevList.push(index);
			}
			if(!direction || direction == 'next') {
				self.disabledNextList.push(index);
			}			
		};


		/**
		 * 启用某屏
		 */
		_public.enable = function(index, direction) {
			var self = this;
			if(!direction || direction == 'prev') {
				var pos = self.disabledPrevList.indexOf(index);
				if(pos !== -1) {
					self.disabledPrevList.splice(pos, 1);
				}
			}
			if(!direction || direction == 'next') {
				var pos = self.disabledNextList.indexOf(index);
				if(pos !== -1) {
					self.disabledNextList.splice(pos, 1);
				}
			}			
		};

		/**
		 * 无动画效果切换
		 */
		_public.switchTo = function(page) {
			var self = this;
			var userAnimateTime = self.config.animateTime;
			self.config.animateTime = 0;
			self.playTo(page);
			window.setTimeout(function(){
				self.config.animateTime = userAnimateTime;
			}, 2);
			
		};

		_static.extend = function(name, events) {
			var obj = {};
			if (Zepto.isPlainObject(name)) {
				obj = name;
			} else {
				obj[name] = events;
			}
			Zepto.extend(_static.effect, obj);
		};

		_private.lazyload = function(curTarget) {
			var textareas = curTarget.children('textarea');

			// curTarget子元素有且只有一个textarea元素时
			if (textareas.length === 1) {
				curTarget.html(textareas.eq(0).val())
				curTarget.data('parsed', true);
			}
		};

		_private.touchMove = function(){
			var self = this;
			var config = self.config;

			var touchMove, touchEnd, touchDirection;
			var startX, startY, disX, disY, dis;
			var moveX,moveY, moveDisX, moveDisY, moveDis;

			if (config.touchMove) {
				self.wrap.on(_private.e.touchstart, function(e) {
					var evt = e.touches ?  e.touches[0] : e;
					startX = moveX = evt.pageX;
					startY = moveY = evt.pageY;
					// console.log(startY);

					/**
					 * @event mo.Tab#touchstart
					 * @property {object} event 开始切换
					 */
					if (self.trigger('touchstart', [startX, startY]) === false) {
						return;
					}

					self.wrap.on(_private.e.touchmove, touchMove);
					self.wrap.on(_private.e.touchend, touchEnd);
					touchDirection = '';
				});
			}
			touchMove = function(e) {
				var evt = e.touches ?  e.touches[0] : e;
				var x = evt.pageX;
				var y =  evt.pageY;
				disX = x - startX;
				disY = y - startY;
				moveDisX = x - moveX;
				moveDisY = y - moveY;
				moveX = x;
				moveY = y;

				if (config.direction == 'x') {
					dis = disX;
					moveDis = moveDisX;
				} else {
					dis = disY;
					moveDis = moveDisY;
				}
				if (!touchDirection) {
					if (Math.abs(disX / disY) > 1) {
						touchDirection = 'x';
					} else {
						touchDirection = 'y';
					}
				}

				if (config.direction == touchDirection) {

					e.preventDefault();
					e.stopPropagation();
					/**
					 * @event mo.Tab#touchmove
					 * @property {object} event 开始切换
					 */
					self.trigger('touchmove', [dis, moveDis, evt]);
				}
				// if ((dis > 0 && self.curPage >= 0) || (dis < 0 && self.curPage <= self.target.length - 1)) {

				// }



			}
			touchEnd = function() {
				if (touchDirection && config.direction != touchDirection) {
					return;
				}
				if (dis === undefined || isNaN(dis) || dis === 0) {
					return;
				}

				// self.wrap.style.webkitTransitionDuration = config.animTime + 'ms';
				self.wrap.off(_private.e.touchmove, touchMove);
				self.wrap.off(_private.e.touchend, touchEnd);

			






				/**
				 * @event mo.Tab#touchend
				 * @property {object} event 开始切换
				 */
				if (self.trigger('touchend', [dis]) === false) {
					dis = 0;
					return;
				}

				var isOK = true;
				if (!dis || (Math.abs(dis) < config.touchDis || !isOK)) {
					self.playTo(self.curPage);
					dis = 0;
					return;
				}

				if ( (self.disabledPrevList.indexOf(self.curPage) !== -1 && dis > 0) || 
					(self.disabledNextList.indexOf(self.curPage) !== -1 && dis < 0) ) {
					self.playTo(self.oriCurPage);
					dis = 0;
					return;
				}


				// var to = dis > 0 ? self.oriCurPage - 1 : self.oriCurPage + 1;
				// var length = self.target.length;
				// if(!config.circle) {
				// 	to = to < 0 ? 0 : to;
				// 	to = to >= length ? length - 1 : to;
				// }
				var to = dis > 0 ? self.oriCurPage - 1 : self.oriCurPage + 1;

				self.playTo(to);

				dis = 0;

			};

		};

		_static.extend('base', {
			init: function() {
				var self = this;
				config = self.config;
				Zepto.each(self.target, function(i, elem) {
					if (self.target[config.playTo][0] != elem) Zepto(elem).hide();
				});

			},
			beforechange: function() {
				var self = this,
					prevElem = self.prevPage === window.undefined ? null : self.target[self.prevPage],
					curElem = self.target[self.curPage];
				if (prevElem) Zepto(prevElem).hide();
				Zepto(curElem).show();
				/**
				 * @event mo.Tab#change
				 * @property {object} event 切换完成
				 */
				self.trigger('change', [self.curPage]);

			}
		});


	});
})();
/*===================filePath:[src/main/slide/slide.js]======================*/
/**
 * @author Brucewan
 * @version 1.0
 * @date 2014-06-18
 * @description 页面切换，图片滑动等全部统一使用mo.Slide
 * @extends mo.Tab
 * @name mo.Slide
 * @requires lib/zepto.js
 * @requires src/base.js
 * @requires src/tab.js
 * @param {boolean}  [config.touchMove=true] 是否允许手指滑动
  * @param {object|string} config.target 目标选项卡片，即供切换的 Elements list (Elements.length >= 2)
 * @param {object|string} [config.controller='ul>li*'] 触发器
 * @param {string} [config.effect='slide'] 指定效果，可选值：'slide', 'push', 'flip'
 * @param {string} [config.direction='x'] 指定方向，仅效果为'slide'时有效
 * @param {boolean}  [config.autoPlay=false] 是否自动播放 
 * @param {number}  [config.playTo=0] 默认播放第几个（索引值计数，即0开始的计数方式） 
 * @param {string}  [config.type='mouseover'] 事件触发类型
 * @param {string}  [config.currentClass='current'] 当前样式名称, 多tab嵌套时有指定需求
 * @param {boolean}  [config.link=false] tab controller中的链接是否可被点击
 * @param {number}  [config.stay=2000] 自动播放时停留时间
 * @param {number}  [config.disable] 禁止某屏滚动
 * @param {boolean}  [config.loop=false] 是否启用循环滚动
 * @param {number}  [config.delay=150] mouseover触发延迟时间
 * @param {object|string}  [config.prevBtn] 播放前一张，调用prev()
 * @param {object|string}  [config.nextBtn] 插放后一张，调用next()
 * @param {string}  [config.easing='swing'] 动画方式：默认可选(可加载Zepto.easying.js扩充)：'swing', 'linear'
 * @param {object{string:function}}  [config.event] 初始化绑定的事件
 * @param {object{'dataSrc':Element, 'dataProp':String, 'dataWrap':Element, 'delay': Number}}  [config.title] 初始化绑定的事件
 * @param {boolean}  [config.lazy=false] 是否启用按需加载，需要按需加载的元素设置data-src属性
 * @example
		var tab1 = new mo.Slide({
			target: $('#slide01 li')
		});
 * @see slide/demo5.html 默认滚动效果slide
 * @see slide/demo6.html 推动滚动效果push
 * @see slide/demo7.html 3d翻转效果flip
 * @see slide/demo8.html 循环滚动
 * @see slide/demo9.html 锁屏
 * @see slide/demo10.html 嵌套的slide
 * @see slide/demo11.html 按需加载
 * @class
*/
(function(){
	
	Motion.add('mo.Slide:mo.Tab', function() {
		/**
		 * public 作用域
		 * @alias mo.Slide#
		 * @ignore
		 */
		var _public = this;

		var _private = {};

		/**
		 * public static作用域
		 * @alias mo.Slide.
		 * @ignore
		 */
		var _static = this.constructor;



		_public.init = function(config) {
			this.config = Zepto.extend(true, {}, _static.config, config); // 参数接收
			
			// 初始化父类
			this.superClass.call(this, this.config);
		};

		_static.config = {
			touchMove: true,
			direction: 'y',
			effect: 'slide',
			controller: false
		};

		mo.Tab.extend('slide', {
			init: function() {
				var self = this;
				var config = self.config;

				// 清除浮动
				self.wrap.css({
					'position': 'relative',
					'overflow': 'hidden'
				});
				self.wrap.css('-webkit-backface-visibility', 'hidden');
				self.target.css({
					'position': 'absolute',
					'top': '0',
					'left': '0',
					'visibility': 'hidden'
				});

				// 设置不同方向不同的操作属性
				if (config.direction == 'x') {

					// // 初始化CSS
					// var wrapWidth = 0;
					// self.target.each(function(i, elem) {
					// 	wrapWidth += Zepto(elem)[0].offsetWidth;
					// });
					// if (wrapWidth <= 0) {
					// 	wrapWidth = document.documentElement.offsetWidth * self.target.length;
					// }

					// self.wrap.css('width', config.wrapWidth || wrapWidth + 'px');

					// 设置操作属性
					self.animProp = 'translateX';  
					self.sizeProp = 'width';
					self.posProp = ['left', 'right'];
				} else {
					self.animProp = 'translateY'; 
					self.sizeProp = 'height';
					self.posProp = ['top', 'bottom'];
				}
			},


			touchmove: function(e, startDis, moveDis){
				var self = this;
				var curObj = self.target.eq(self.curPage);
				if(self.moving == true) {
					return;
				}

				// 判断是否是锁定屏
				var locked = false;
				if( (self.disabledNextList.indexOf(self.curPage) !== -1 && startDis < 0) || (self.disabledPrevList.indexOf(self.curPage) !== -1 && startDis > 0)) {
					locked = true;
				}

				// 获取当前偏移值
				var currentVal = /\(([\d-]*).*\)/.exec(curObj.css(self.propPrefix + 'Transform'));
				var currentPos = currentVal ? currentVal[1]*1 : 0;

				// 设置当前屏位置
				var curStyle = {};
				var offsetDis = currentPos + moveDis;
				if(locked) {
					offsetDis = startDis/6;
				}
				curStyle[self.cssPrefix + 'transform'] = self.animProp + '(' + (offsetDis) + 'px)';
				self.target.css('visibility', 'hidden');
				curObj.css(curStyle).css('visibility', 'visible');

				// 设置下一屏位置
				var nextObj, nextDis = {}, nextSize;
				if(startDis > 0) {
					nextObj = self.target.eq(self._outBound(self.curPage-1));
					nextSize = - nextObj[self.sizeProp]();
				} else {
					nextObj = self.target.eq(self._outBound(self.curPage+1));
					nextSize = curObj[self.sizeProp]();

				}

				if(!locked ) {
					self.target.css('visibility', 'hidden');
					curObj.css('visibility', 'visible');
					nextObj.css('visibility', 'visible');
					nextDis[self.cssPrefix + 'transform'] = self.animProp + '(' + (currentPos + moveDis +  nextSize) + 'px)';
					nextObj.css(nextDis);			
				}

			},

			touchend: function(e, dis){
				var self = this;
				var curObj = self.target.eq(self.curPage);


				// 如果有单屏页面内容过多
				var rect = self.target[self.curPage].getBoundingClientRect();
				var winSize = $(window)[self.sizeProp];

				if(!(self.target.eq(self.curPage).offset()[self.sizeProp] <= self.container.offset()[self.sizeProp])) {
					if( (dis <= 0 && rect[self.posProp[1]] > winSize) || (dis > 0 && rect[self.posProp[0]] < 0)) {
						var currentVal = /\(([\d-]*).*\)/.exec(curObj.css(self.propPrefix + 'Transform'));
						var currentPos = currentVal ? currentVal[1]*1 : 0;
						var posObj = {};
						var pos = currentPos + dis;
						var size  = curObj[self.sizeProp]();
						var wrapSize = self.wrap[self.sizeProp]();
						pos = pos > 0 ? 0 : pos;
						pos = pos < wrapSize - size ? wrapSize  - size: pos;
						posObj[self.cssPrefix + 'transform'] = self.animProp+'('+ pos +'px)';
						curObj.animate(posObj);
						return false;
					}
				}

				self.touchTrigger = true;
			},

			beforechange: function() {
				var self = this;
				var config = self.config;
				var prevIndex =  self.prevPage;
				var curIndex = self.curPage;
				var prevObj = self.target.eq(prevIndex);
				var curObj = self.target.eq(curIndex);
				var prevStartPos = {}, prevEndPos = {}, curStartPos = {}, curEndPos = {};
				var size;



				// 位置
				if(self.oriCurPage > self.oriPrevPage) {
					size = prevObj[self.sizeProp]();
				} else {
					size = -curObj[self.sizeProp]();
				}


				curStartPos[self.cssPrefix + 'transform'] = self.animProp+'('+ size +'px)';
				prevEndPos[self.cssPrefix + 'transform'] = self.animProp+'('+ (-size) +'px)';
				curEndPos[self.cssPrefix + 'transform'] = self.animProp+'(0px)';
				

				// 设置初始属
				if(!self.touchTrigger) {
					curObj.css(curStartPos);
					self.touchTrigger = false;
				}
				// curObj.css(curStartPos);
				self.target.css('visibility', 'hidden');
				prevObj.css('visibility', 'visible');
				curObj.css('visibility', 'visible');

				window.setTimeout(function(){
					// 设置终点属性
					prevObj.animate(prevEndPos, config.animateTime, config.easing, function(){
						// console.log(self.prevPage + ':' + self.curPage);
						self.target.eq(self.prevPage).css('visibility', 'hidden');
						// prevObj.css('visibility', 'hidden');
					});
					self.moving = true;
					// console.log(curEndPos)
					// console.log(self.prevPage + ':' + self.curPage);
					curObj.animate(curEndPos, config.animateTime, config.easing, function(){
						curObj.css('visibility', 'visible');
						self.moving = false;
						self.trigger('change', [self.curPage]);				
					});
				}, 0);
			}

		});


















	});

})();
})();
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

//-- UA 检测，参考自精选商城 --
(function($) {
    function formatV(v, split) {
        if (v == null) {
            return;
        }
        split = split || '.';
        var f = v.split(split);
        f = f.shift() + '.' + f.join('');
        return parseFloat(f);
    }
    $.os.fVersion = formatV($.os.version);

    var tag = '',
        htm = document.querySelector('html');
    if ($.os.ios) {
        tag = 'ios ios' + $.os.version.replace(/\./gi, '_');
        if ($.os.fVersion < 6) {
            tag += ' lowIPhone';
        } else {
            tag += ' highIPhone';
        }
    } else if ($.os.android) {
        tag = 'android android' + $.os.version.replace(/\./gi, '_');
        if ($.os.fVersion < 4) {
            tag += ' lowAndroid';
        } else {
            tag += ' highAndroid';
        }
    }
    if (tag) {
        $(htm).addClass(tag);
    }
})(window["Zepto"]||window["jQuery"]||window);

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// Ref:https://gist.github.com/mamboer/8179563
(function(W) {
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x,
        length,
        currTime,
        timeToCall,
        requestAnimFrame0 = W['requestAnimationFrame'],
        cancelAnimFrame0 = W['cancelAnimationFrame'];
 
    for(x = 0, length = vendors.length; x < length && !requestAnimFrame0; ++x) {
        requestAnimFrame0 = W[vendors[x]+'RequestAnimationFrame'];
        cancelAnimFrame0 = 
          W[vendors[x]+'CancelAnimationFrame'] || W[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!requestAnimFrame0){
        W.requestAnimationFrame = function(callback, element) {
            currTime = new Date().getTime();
            timeToCall = Math.max(0, 16 - (currTime - lastTime));
            lastTime = currTime + timeToCall;
            return W.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
        };
    } else {
        W.requestAnimationFrame = requestAnimFrame0;
    }
 
    if (!cancelAnimFrame0){
        W.cancelAnimationFrame = function(id) {
            W.clearTimeout(id);
        };
    } else {
        W.cancelAnimationFrame = cancelAnimFrame0;
    }

    /**
     * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */
    W.requestTimeout = function(fn, delay) {
        if( !requestAnimFrame0)
                return W.setTimeout(fn, delay);
                
        var start = new Date().getTime(),
            handle = new Object();
            
        function loop(){
            var current = new Date().getTime(),
                delta = current - start;
                
            delta >= delay ? fn.call() : handle.value = requestAnimFrame0(loop);
        };
        
        handle.value = requestAnimFrame0(loop);
        return handle;
    };
     
    /**
     * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    W.clearRequestTimeout = function(handle) {
        cancelAnimFrame0?cancelAnimFrame0(handle.value):W.clearTimeout(handle);
    };

    /**
     * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */
    W.requestInterval = function(fn, delay) {
        if( !requestAnimFrame0 )
                return W.setInterval(fn, delay);
                
        var start = new Date().getTime(),
            handle = new Object();
            
        function loop() {
            var current = new Date().getTime(),
                delta = current - start;
                
            if(delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }
     
            handle.value = requestAnimFrame0(loop);
        };
        
        handle.value = requestAnimFrame0(loop);
        return handle;
    }
     
    /**
     * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    W.clearRequestInterval = function(handle) {
        cancelAnimFrame0?cancelAnimFrame0(handle.value):W.clearInterval(handle);
    };

})(window);

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
