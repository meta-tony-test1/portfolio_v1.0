$("#ds .wrap > div li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var n = $(this).index()
    $("#ds .cont img").eq(n).addClass("pic").siblings("img").removeClass();
    $("#ds .mob .cont img").eq(n).addClass("pic").siblings("img").removeClass();
})
