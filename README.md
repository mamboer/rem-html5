# rem-html5

[English Readme File Is Here](README-en.md)

这是一个全部使用REM尺寸单元做多设备适配的HTML5移动页面模板。

使用REM的目标自然是希望尽量一套代码适配多尺寸的移动终端，尽量减少在media query里面针对各种尺寸做微调。

### 特性

1. 尺寸单元全部基于REM

    借助SASS的自定义函数，以及在页面头部引入下面这段JS，可轻易实现全REM化。

    ``` javascript
    //https://offroadcode.com/prototypes/rem-calculator/
    //以物理尺寸375px，设计稿750px为基准，我们设定100px=1rem，这样样式里面px换算成rem的公式为(@px/2)/100，其中2(750/375)为device ratio
    //如果设计稿为640px，基准设备物理尺寸为320，需要将designDeviceWidth设为320
    (function (doc, win, designDeviceWidth) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                var docElWidth = 100 * (clientWidth / designDeviceWidth);
                if (docElWidth > 200) docElWidth = 200;
                docEl.style.fontSize = docElWidth + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window, 375/* design device-width: 375 means iphone6 */);
    ```

    注意：如果PSD宽度为750 px, 则不需要改任何地方；如果设计稿是640px，请将上面JS方法中的375改为320即可。

    在SASS里面的REM尺寸，再也不用将设计稿量出来后除以2的换算，直接调用我们提供的函数即可使用设计稿里的原始尺寸即可：

    例如字体设置：

    ```
    font-size: _rem(28px);
    ```


2. 基于Gulp的自动化构建

    所有的Gulp任务置于`gulp-taks`目录。

    包括：

    * 合并资源(concat.js)
    * 压缩CSS (css.js)
    * 本地web服务（express.js）
    * 压缩图片 (imagemin.js)
    * 压缩JS (js.js)
    * JS语法检测(lint.js)
    * 自动刷新页面或样式(reload.js、reloadCss.js)

        需要安装[livereload插件](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

    * 实时编译SASS (sass.js)
    * 雪碧图 (sprites.js)

        切好的图标，只需要放在`sprites`目录，gulp会自动生成`sprite.png`和`sass/includes/sprite.scss`。

    * SVN集成（svn.js）

        试验性，暂不建议使用。

    * Swig模板引擎(swig.js)
    * 文件更新监测(watch.js)


### Demo

一个使用rem-html5构建的[在线DEMO](http://faso.me/rem-html5).

### 使用指引

1. 将rem-html5克隆至本地

    ```
    git clone git@github.com:mamboer/rem-html5.git myapp
    ```

2. 安装bower资源

    ```
    cd myapp/src
    bower install
    ```

    第三方静态资源通过bower配置，具体参考`bower.json`


3. 安装NodeJS包

    ```
    npm install
    ```

4. 启动`myapp`

    ```
    gulp
    ```

    需先安装`gulp`，没安装的请运行`npm i -g gulp`.

5. 浏览器访问localhost:4000/dist/

    使用你喜爱的代码编辑器编辑开始码吧。
