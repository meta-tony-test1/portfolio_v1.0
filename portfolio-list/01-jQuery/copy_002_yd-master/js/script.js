/* header */
var h_no;
var h_h;
var ww = $(window).width();

$(".gnb_title li").hover(function(){
    h_no = $(this).index();
    $("#detail .wrap > div").eq(h_no).addClass("on").siblings("div").removeClass("on")
    h_h = $("#detail .wrap > div").eq(h_no).outerHeight(true);
    $("#detail").stop().animate({"height":h_h},500);
    $(".modal").addClass("on");

    $(this).addClass("on").children(":after");
    $(this).siblings("li").removeClass("on");
})
$(".gnb").mouseleave(function(){
    $("#detail .wrap > div").siblings("div").removeClass("on")
    $("#detail").stop().css({"height":0});
    $(".modal").removeClass("on");
    $(".gnb_title > li").removeClass("on");
})
/* 반복문 이미지 교체 */
var p_no = $(".part a:last-child").index();
var i;
for(i = 0; i <= p_no; i++){
$(".part .category a").eq(i).children().css({"background-image":"url(images/h"+(i+1)+".png)"});
};
$(".part .category a").hover(function(){
    bp = $(this).index() + 1;
    $(this).children().css({"background-image":"url(images/hb"+bp+".png)"});
},
function(){
    $(this).children().css({"background-image":"url(images/h"+bp+".png)"});
})


$("header .fnb .side p").click(function(){
    $(this).toggleClass("on");
})

/* 메뉴 & 사이트맵 아이콘 */
$(".head_icon > a").click(function(){
    ww = $(window).width();
    console.log(ww);
    if(ww <= 1030) {
        $(this).attr("href","#")
    }else{
        $(this).attr("href","sitemap.html")
    }
})

$(".head_icon button").click(function(){
    $(this).toggleClass("on");
})
/* 모바일 메뉴 */
$(".head_icon > a").click(function(){
    $("#m_menu").addClass("on");
    $(".m_modal").addClass("on");
})
$(".m_modal").click(function(){
    $("#m_menu").removeClass("on");
    $(".m_modal").removeClass("on");
})
$(".menu_lang p").click(function(){
    $(".menu_lang").toggleClass("on")
})

$(".menu_list h3").click(function(){
    $(this).addClass("blue").siblings("ul").slideDown(500)
        .parent().siblings().children("ul").slideUp(500).siblings("h3").removeClass("blue") ;
})

$(".menu_list p").click(function(){
    $(this).toggleClass("on").siblings("div").slideToggle(500);
})

/* content */
/* s1_site_map */
$(".v_map .next").click(function(){
   $(".v_map ul").stop().animate({"left":"-20%"},300,function(){
       $(this).css({"left":"0"}).children("li:first-child").appendTo($(".v_map ul"));
   })
})

/* s1-main_slide*/
var ms_last = $(".main_slide li:last-child").index() + 1;
var ms_no = 1;
$(".main_slide .list_no").text(ms_no + " /" + (ms_last));

function back(){
    $(".main_slide li:last-child").prependTo($(".main_slide ul")).css({"opacity":0});
    $(".main_slide li:first-child").finish().animate({"opacity":1},300);
    ms_no--;
    if(ms_no <= 0){ ms_no = 6}
    $(".main_slide .list_no").text(ms_no + " /" + (ms_last));
}

function go(){
    $(".main_slide li:first-child").finish()
    ms_no++;
    if(ms_no >=7){ ms_no = 1}
    $(".main_slide .list_no").text(ms_no + " /" + (ms_last));
    $(".main_slide li:first-child").animate({"opacity":0},300,function(){
    $(this).appendTo($(".main_slide ul")).css({"opacity":1});
    })
}

$(".main_slide .next").finish().click(function(){
    go();
})

$(".main_slide .prev").click(function(){
    back();
})

var timer = setInterval("go()",3000);

$(".main_slide").hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval("go()",3000);
})

$(".main_slide .stop").click(function(){
    clearInterval(timer);
    $(this).removeClass("on");
    $(".main_slide .play").addClass("on");
})
$(".main_slide .play").click(function(){
    timer = setInterval("go()",3000);
    $(this).removeClass("on");
    $(".main_slide .stop").addClass("on");
})


var i_no;
function swing(){
    $(".staff > ul li").eq(i_no).find("i").animate({"top":-6},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":2},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":-4},300);
    $(".staff > ul li").eq(i_no).find("i").animate({"top":0},300);
    console.log("swing")
}

$(".staff > ul li").hover(function(){
    i_no = $(this).index();
    swing();
    move = setInterval("swing()",1400);
    },function(){
//    여러번 호버시 중복 실행됨.
//    setInterval 진행 중간에 끊어야함.
    console.log("off");
    $(".staff > ul li").eq(i_no).find("i").finish();
    clearInterval(move);
    return false;
    });
