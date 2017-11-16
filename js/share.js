$(function(){
    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    $('#ss_toggle').on('click', function () {
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
            jud(true);
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
            jud(false);
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
    var jud=function (flag){
        if(flag){
            for(var i=1;i<=4;i++){
                $("#nth-child"+i).fadeIn(500);
                $(".child"+i).addClass("nth-child"+i);
            }
        }else{
            for(var i=1;i<=4;i++){
                $("#nth-child"+i).fadeOut(500);
                $(".child"+i).removeClass("nth-child"+i);
            }
        }
    }
    $('.fx').click(function () {
        var type= $(this).attr("data-type");
        var url= $(this).attr("data-url");
        var title= $(this).attr("data-title");

        if(type=="qzone") window.open("http://connect.qq.com/widget/shareqq/index.html?url="+url+"&title="+title+"—顾里°&pic=https://sy70927222.github.io/syfight/images/head/1.gif");
        if(type=="xinlang")window.open("http://service.weibo.com/share/share.php?url="+url+"&title="+title+"—顾里°&pic=https://sy70927222.github.io/syfight/images/head/1.gif");
        if(type=="weixin")alert("博主很懒，微信分享暂不支持");
        if(type=="rr")window.open("http://www.douban.com/recommend/?url=" + url + "&title=" + title + "—顾里°&image=https://sy70927222.github.io/syfight/images/head/1.gif");
    })
});
