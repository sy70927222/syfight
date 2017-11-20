$(function(){

    //导航
    $(".is").on("click",function(){
        var res=$(".is").hasClass('open');
        if(res){
            $(".is").removeClass('open');
            $("#sidebar").css("left","-270px");
            $(".is").css('left',"15px");
        }else{
            $(".is").addClass('open');
            $("#sidebar").css("left","0px");
            $(".is").css('left',"");
        }
    });
    $("#link").on("click",function(){
        $("#link").css("display","none");
        $("#mask").addClass("in");
        $("#sidebar").css("left","0px");
    });
    $("#mask").on("click",function(){
        $("#mask").removeClass("in");
        $("#sidebar").css("left","-270px");
        $("#link").css("display","block");
    });

    //回到顶部
    $( "#top").click( function () {
        $( "#con").animate({ "scrollTop" : 0 }, 1000);
    });
    //回到底部
    $( "#down").click(function () {
        $( "#con").animate({ "scrollTop" : windowHeight }, 1000);
    });
    //滚动监控
    $("#con").scroll(function() {
        var scrollTop=$("#con").scrollTop();
        if(scrollTop>100){
            $("#top").fadeIn(1000);
        }else{
            $("#top").fadeOut(1000);
        }
        if(scrollTop>windowHeight-1000){
            $("#down").fadeOut(1000);
        }else{
            $("#down").fadeIn(1000);
        }
    });
});
