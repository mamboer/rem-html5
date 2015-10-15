(function($){

    var shareData = {
        img_url: "http://ossweb-img.qq.com/images/hero/act/a20140430duxinshu/logo-wx.png",
        img_width: "120",
        img_height: "120",
        link: document.location.href.replace(document.location.search,'')+"?ADTAG=hero-a20140430duxinshu.wx."+($.os.ios?'ios':($.os.android?"android":'otheros')),
        //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
        desc: '高智商手机魔术“怪兽 读心术“，敢挑战吗？全民打怪兽出品',
        title: '微信爆红手机魔术“怪兽读心术”，全民打怪兽吧！'
    };

    var onBridgeReady = function() {

        //给body打一个类名
        document.body.classList.add('env_wx');

        //转发朋友圈
        WeixinJSBridge.on("menu:share:timeline", function(e) {
            WeixinJSBridge.invoke("shareTimeline", shareData, function(res) {
                WeixinJSBridge.log(res.err_msg)
            });
        });
        //同步到微博
        WeixinJSBridge.on("menu:share:weibo", function() {
            WeixinJSBridge.invoke("shareWeibo", {
               "content": shareData.title,
               "url": shareData.link
            }, function(res) {
                WeixinJSBridge.log(res.err_msg);
            });
        });
        //分享给朋友
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke("sendAppMessage", shareData, function(res) {
                WeixinJSBridge.log(res.err_msg)
            });
        });
    };
    document.addEventListener('WeixinJSBridgeReady', function() {
        onBridgeReady();
    });

})(Zepto);
