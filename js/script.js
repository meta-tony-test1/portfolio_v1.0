$(".web .wrap > div li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var n = $(this).index()
    $(".web .cont img").eq(n).addClass("pic").siblings("img").removeClass();
    $(".web .mob .cont img").eq(n).addClass("pic").siblings("img").removeClass();
})
