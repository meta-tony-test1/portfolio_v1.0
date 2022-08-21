$(".web .wrap > div li").click(function(){
    $(this).addClass("on").siblings("li").removeClass("on");
    var n = $(this).index()
    $(".web .cont img").eq(n).addClass("pic").siblings("img").removeClass();
    $(".web .mob .cont img").eq(n).addClass("pic").siblings("img").removeClass();
})

$(".art li").click(function(){
    var art_no = $(this).index() + 1;
    console.log(art_no);
    /* 경로 portfolio.html 파일에서 시작합니다. */
    $(".modal").css({"display":"block","background-image":"url(images/art-mo"+ art_no +".jpg)"});
    $("body").css({"overflow":"hidden"})
})
$(".modal").click(function(){
    $(".modal").css({"display":"none"});
    $("body").css({"overflow":"auto"})
})
