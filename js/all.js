/* Zepto v1.1.4-1-gbd2327c - zepto event ajax form ie detect fx fx_methods touch gesture - zeptojs.com/license */
var Zepto=function(){function _(t){return null==t?String(t):E[S.call(t)]||"object"}function A(t){return"function"==_(t)}function L(t){return null!=t&&t==t.window}function k(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function Z(t){return"object"==_(t)}function D(t){return Z(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function $(t){return"number"==typeof t.length}function R(t){return a.call(t,function(t){return null!=t})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function q(t,e){return"number"!=typeof e||c[z(t)]?e:e+"px"}function B(t){var e,n;return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function H(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function U(n,i,r){for(e in i)r&&(D(i[e])||M(i[e]))?(D(i[e])&&!D(n[e])&&(n[e]={}),M(i[e])&&!M(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function V(t,e){return null==e?n(t):n(t).filter(e)}function X(t,e,n,i){return A(e)?e.call(t,n,i):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function J(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,P,C,r=[],o=r.slice,a=r.filter,s=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),b=s.createElement("tr"),w={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":s.createElement("div")},x=/complete|loaded|interactive/,T=/^[\w-]*$/,E={},S=E.toString,j={},O=s.createElement("div"),N={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};return j.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~j.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},j.fragment=function(e,i,r){var a,u,f;return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in w||(i="*"),f=w[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),D(r)&&(u=n(a),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),a},j.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},j.isZ=function(t){return t instanceof j.Z},j.init=function(e,i){var r;if(!e)return j.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=j.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=j.qsa(s,e)}else{if(A(e))return n(s).ready(e);if(j.isZ(e))return e;if(M(e))r=R(e);else if(Z(e))r=[e],e=null;else if(l.test(e))r=j.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=j.qsa(s,e)}}return j.Z(r,e)},n=function(t,e){return j.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},j.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=T.test(a);return k(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=s.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=_,n.isFunction=A,n.isWindow=L,n.isArray=M,n.isPlainObject=D,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=P,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if($(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return F(i)},n.each=function(t,e){var n,i;if($(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return a.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){E["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return x.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return A(t)?this.not(this.not(t)):n(a.call(this,function(e){return j.matches(e,t)}))},add:function(t,e){return n(C(this.concat(n(t,e))))},is:function(t){return this.length>0&&j.matches(this[0],t)},not:function(e){var i=[];if(A(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):$(e)&&A(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return Z(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!Z(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!Z(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(j.qsa(this[0],t)):this.map(function(){return j.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:j.matches(i,t));)i=i!==e&&!k(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!k(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return V(e,t)},parent:function(t){return V(C(this.pluck("parentNode")),t)},children:function(t){return V(this.map(function(){return H(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return V(this.map(function(t,e){return a.call(H(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=A(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=A(t);return this.each(function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(X(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=X(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(Z(n))for(e in n)Y(this,e,n[e]);else Y(this,n,X(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&Y(this,t)})},prop:function(t,e){return t=N[t]||t,1 in arguments?this.each(function(n){this[t]=X(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?J(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=X(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=X(this,t,e,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[P(t)]||o.getPropertyValue(t);if(M(t)){var a={};return n.each(M(t)?t:[t],function(t,e){a[e]=r.style[P(e)]||o.getPropertyValue(e)}),a}}var s="";if("string"==_(t))i||0===i?s=z(t)+":"+q(t,i):this.each(function(){this.style.removeProperty(z(t))});else for(e in t)t[e]||0===t[e]?s+=z(e)+":"+q(e,t[e])+";":this.each(function(){this.style.removeProperty(z(e))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},I(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=X(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),X(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(I(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),a=X(this,e,r,W(this));a.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||s.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,a=this[0];return r===t?L(a)?a["inner"+i]:k(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){a=n(this),a.css(e,X(this,r,t,a[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=_(e),"object"==t||"array"==t||null==e?e:j.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(s.documentElement,o);r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),j.Z.prototype=n.fn,j.uniq=C,j.deserializeValue=J,n.zepto=j,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(a[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,s,u,f){var h=l(e),d=a[h]||(a[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var a=p(i);a.fn=r,a.sel=s,a.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var l=u||r;a.proxy=function(t){if(t=E(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function E(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(T,function(t,n){var r=i[t];e[t]=function(){return this[n]=b,r&&r.apply(i,arguments)},e[n]=w}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function S(t){var e,i={originalEvent:t};for(e in t)x.test(e)||t[e]===n||(i[e]=t[e]);return E(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var a=2 in arguments&&i.call(arguments,2);if(r(e)){var s=function(){return e.apply(n,a?a.concat(i.call(arguments)):arguments)};return s._zid=l(e),s}if(o(n))return a?(a.unshift(e[n],e),t.proxy.apply(null,a)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,a,s,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,a,s,e,f)}),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=w),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),a&&(l=function(e){var n,o=t(e.target).closest(a,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a){var s=this;return e&&!o(e)?(t.each(e,function(t,e){s.off(t,i,e)}),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=w),s.each(function(){y(this,e,a,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):E(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(a,s){i=S(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),E(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function x(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=x(e.url,e.data),e.data=void 0)}function E(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function j(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?j(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(s).on("load error",function(e,n){clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[a]=function(){f=arguments},s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),T(n);var a=n.dataType,s=/\?.+=\?/.test(n.url);if(s&&(a="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=a&&"jsonp"!=a)||(n.url=x(n.url,"_="+Date.now())),"jsonp"==a)return s||(n.url=x(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var E,u=n.accepts[a],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=b,clearTimeout(E);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){a=a||w(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==a?(1,eval)(e):"xml"==a?e=d.responseXML:"json"==a&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(E=setTimeout(function(){d.onreadystatechange=b,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(E.apply(null,arguments))},t.post=function(){var e=E.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=E.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,a=e.split(/\s/),u=E(e,n,i),f=u.success;return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e){r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},j(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),f=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=t.match(/Windows Phone ([\d.]+)/),l=f&&t.match(/TouchPad/),h=t.match(/Kindle\/([\d.]+)/),p=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),m=t.match(/(BB10).*Version\/([\d.]+)/),g=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),v=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),b=t.match(/Firefox\/([\d.]+)/),w=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),x=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=x||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),u&&!s&&(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),c&&(e.wp=!0,e.version=c[1]),f&&(e.webos=!0,e.version=f[2]),l&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),m&&(e.bb10=!0,e.version=m[2]),g&&(e.rimtabletos=!0,e.version=g[2]),v&&(n.playbook=!0),h&&(e.kindle=!0,e.version=h[1]),p&&(n.silk=!0,n.version=p[1]),!p&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),b&&(n.firefox=!0,n.version=b[1]),w&&(n.ie=!0,n.version=w[1]),T&&(o||e.ios)&&(n.safari=!0,o&&(n.version=T[1])),x&&(n.webview=!0),e.tablet=!!(a||v||r&&!t.match(/Mobile/)||b&&t.match(/Tablet/)||w&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||u||f||d||m||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||b&&t.match(/Mobile/)||w&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t,e){function w(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function x(t){return i?i+t:t.toLowerCase()}var i,c,l,h,p,d,m,g,v,y,n="",a={Webkit:"webkit",Moz:"",O:"o"},s=window.document,u=s.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(a,function(t,r){return u.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),c=n+"transform",b[l=n+"transition-property"]=b[h=n+"transition-duration"]=b[d=n+"transition-delay"]=b[p=n+"transition-timing-function"]=b[m=n+"animation-name"]=b[g=n+"animation-duration"]=b[y=n+"animation-delay"]=b[v=n+"animation-timing-function"]="",t.fx={off:i===e&&u.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:x("TransitionEnd"),animationEnd:x("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(n,i,r,o,a){var s,x,S,u={},T="",E=this,j=t.fx.transitionEnd,P=!1;if(i===e&&(i=t.fx.speeds._default/1e3),a===e&&(a=0),t.fx.off&&(i=0),"string"==typeof n)u[m]=n,u[g]=i+"s",u[y]=a+"s",u[v]=r||"linear",j=t.fx.animationEnd;else{x=[];for(s in n)f.test(s)?T+=s+"("+n[s]+") ":(u[s]=n[s],x.push(w(s)));T&&(u[c]=T,x.push(c)),i>0&&"object"==typeof n&&(u[l]=x.join(", "),u[h]=i+"s",u[d]=a+"s",u[p]=r||"linear")}return S=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(j,S)}else t(this).unbind(j,S);P=!0,t(this).css(b),o&&o.call(this)},i>0&&(this.bind(j,S),setTimeout(function(){P||S.call(E)},1e3*(i+a)+25)),this.size()&&this.get(0).clientLeft,this.css(u),0>=i&&setTimeout(function(){E.each(function(){S.call(this)})},0),this},u=null}(Zepto),function(t,e){function s(n,i,r,o,a){"function"!=typeof i||a||(a=i,i=e);var s={opacity:r};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,i,null,a)}function u(e,n,i,r){return s(e,n,0,i,function(){o.call(t(this)),r&&r.call(this)})}var n=window.document,r=(n.documentElement,t.fn.show),o=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,n){return r.call(this),t===e?t=0:this.css("opacity",0),s(this,t,1,"1,1",n)},t.fn.hide=function(t,n){return t===e?o.call(this):u(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,n){return s(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return u(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,s,e={},a=750;t(document).ready(function(){var d,m,y,b,g=0,v=0;"MSGesture"in window&&(s=new MSGesture,s.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(b=p(i,"down"))||h(i))&&(y=b?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,a),s&&b&&s.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(b=p(t,"move"))||h(t))&&(y=b?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(b=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t){function i(t){return"tagName"in t?t:t.parentNode}if(t.os.ios){var n,e={};t(document).bind("gesturestart",function(t){{var r=Date.now();
r-(e.last||r)}e.target=i(t.target),n&&clearTimeout(n),e.e1=t.scale,e.last=r}).bind("gesturechange",function(t){e.e2=t.scale}).bind("gestureend",function(){e.e2>0?(0!=Math.abs(e.e1-e.e2)&&t(e.target).trigger("pinch")&&t(e.target).trigger("pinch"+(e.e1-e.e2>0?"In":"Out")),e.e1=e.e2=e.last=0):"last"in e&&(e={})}),["pinch","pinchIn","pinchOut"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}}(Zepto);/*  |xGv00|77e077f7b7c13086af61d20e0a59d818 */
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
