$(function(){
    var menu=$("#ss_menu");
    var rot;
    $('.ss_toggle').on('click', function () {
        menu=$(this).parents("#ss_menu");
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            $(this).parent().addClass('ss_active');
            $(this).addClass('close');
            jud(this,true);
        } else {
            $(this).parent().removeClass('ss_active');
            $(this).removeClass('close');
            jud(this,false);
        }
        $(this).data('rot', rot);
    });
    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    });
    var jud=function (a,flag){
        a=$(a).parents("#ss_menu");
        if(flag){
            for(var i=1;i<=4;i++){
                $(a).find(".child"+i).addClass("nth-child"+i);
                $(a).find(".nth-child"+i).fadeIn(500);
            }
        }else{
            for(var i=1;i<=4;i++){
                $(a).find(".child"+i).removeClass("nth-child"+i);
                $(a).find(".nth-child"+i).fadeOut(500);
            }
        }
    }
    $('.fx').click(function () {
        var type= $(this).attr("data-type");
        var url= $(this).attr("data-url");
        var title= $(this).attr("data-title");

        if(type=="qzone") window.open("http://connect.qq.com/widget/shareqq/index.html?url="+url+"&title="+title+"—顾里°&pic=https://sy70927222.github.io/syfight/images/head/1.gif");
        if(type=="xinlang")window.open("http://service.weibo.com/share/share.php?url="+url+"&title="+title+"—顾里°&pic=https://sy70927222.github.io/syfight/images/head/1.gif");
        if(type=="weixin") {
            qrcode(url);
        }
        if(type=="rr")window.open("http://www.douban.com/recommend/?url=" + url + "&title=" + title + "—顾里°&image=https://sy70927222.github.io/syfight/images/head/1.gif");
    })

    var qrcode = function(url){
        layer.open({
            type: '1'
            ,title: '扫一扫 分享微信'
            ,content: '<div id="qrcode" style="padding:50px;"></div><img width="50" height="50" style="position:relative;top:-125px;left:75px;" src="/syfight/images/head/1.gif" class="layui-circle">'
            ,area: ['200px', '280px']
            ,shadeClose: true
            ,anim: 1
            ,move: false
            ,resize: false
            ,offset: '100px'
            ,success: function(){
                var qrcode = new QRCode(document.getElementById("qrcode"), {
                    width : 100,//设置宽高
                    height : 100
                });
                qrcode.makeCode(url);
            }
        });
    }
});
