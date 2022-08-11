        //resize 종료 후 0.3초마다 새로 고침
        var delay = 300;
        var timer = null;
        $(window).on('resize', function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
            document.location.reload();
            }, delay);
        });


        /* 반응형 body width 변수값 bw */
        var bw = $("body").width();
        $(window).resize(function() {
            bw = $("body").width();
            console.log(bw);
        });

        var n;
        var lp, lw, lph;
        var sw = $(".vi_cont li").innerWidth();
        var sn = 0;

//        function react() { /* if문 전체 함수*/

            if (bw >= 801) { //PC스크립트
            /* 슬라이드 배너 */

        /* 헤드 하단 fixed*/
        $(window).scroll(function() {
            var loc = $(window).scrollTop();
            if (loc >= 60) {
                $("header").css({
                    "position": "fixed",
                    "top": "-60px"
                })
            } else {
                $("header").css({
                    "position": "absolute",
                    "top": 0
                })
            }
        })

        /* 노란띠 애니메이션, 헤드 상세메뉴 확장*/
        $("#stiker .menu li").hover(function() {
            n = $(this).index(); //순번
            lp = $(this).position().left - 5; //li 위치 -> 노란띠 이동
            lw = $(this).width() + 10; // 노란띠 사이즈
            dnb_h = $(".part" + (n + 1)).height(); // 디테일바 높이

            $(".s_exit").css({"display":"none"})
            $(".icon_look").css({"display":"inline"})
            $(".fix_modal").removeClass("modal");
            $("#search").css({"display":"none"});
            $("#fix_menu").css({"display":"none"})

            $(".dnb > div").css({
                "display": "none"
            });
            $("#stiker .wrap > i").css({
                "left": lp
            }).stop().animate({
                "width": lw
            }, 200);
            $(".part" + (n + 1)).css({
                "display": "block"
            });
            $(".curtain").addClass("modal");
            $("#stiker").stop().animate({
                "height": dnb_h + 82
            }, 300)
        /* li mouseleave*/
        }, function() {})

        // mouseleave 전체 설정
        $("#stiker").on("mouseleave", function() {
            $(".part" + (n + 1)).css({
                "display": "none"
            });
            $(".curtain").removeClass("modal");
            lph = lw / 2 + lp; //양쪽으로 작아지기 위한 이동
            $("#stiker .wrap > i").css({
                "left": lph,
                "width": 0
            });
            $("#stiker").stop().animate({
                "height": 82
            }, 300)
        })


        /* 메뉴 검색 아이콘 영역 */
        $(".sign").hover(function(){
            $(".part" + (n + 1)).css({
                "display": "none"
            });
            $(".curtain").removeClass("modal");
            lph = lw / 2 + lp; //양쪽으로 작아지기 위한 이동
            $("#stiker .wrap > i").css({
                "left": lph,
                "width": 0
            });
            $("#stiker").stop().animate({
                "height": 82
            }, 300)
        })

        /* PC 검색 모달 */
        $(".icon_look").click(function(){
            $(this).css({"display":"none"})
            $(".s_exit").css({"display":"inline"})
            $("#search").css({"display":"block"});
            $(".fix_modal").addClass("modal");
        })
        $(".s_exit").click(function(){
            $(this).css({"display":"none"})
            $(".icon_look").css({"display":"inline"})
            $(".fix_modal").removeClass("modal");
            $("#search").css({"display":"none"});
        })

        /* PC메뉴 모달 */
        $(".exit").click(function(){
            $("#fix_menu").css({"display":"none"})
            $(".fix_modal").removeClass("modal");
            $("html").css({"overflow-y":"auto"})
            $("body").css({"overflow":"auto","height":"auto"})
        })
        $(".icon_menu").click(function(){
            $("#fix_menu").css({"display":"block"})
            $(".fix_modal").addClass("modal");
            $("html").css({"overflow-y":"scroll"})
            $("body").css({"overflow":"hidden","height":"98vh"})

            $(".s_exit").css({"display":"none"})
            $(".icon_look").css({"display":"inline"})
            $("#search").css({"display":"none"});

        })
        /*pc 메뉴 클릭 전환*/
        $(".fix_top li").click(function(){
            $(this).addClass("under").siblings().removeClass("under");
//            var fix_page = $(this).index();
//            console.log(fix_page);
            $(".fix_cont .wrap div").css({"display":"none"}).eq($(this).index()).css({"display":"flex"});
        })

        /* 콘텐츠 애니메이션 */
        cont();
        $(".vi_cont").append($(".vi_cont .rock").clone());

        function cont(){
            $(".vi_cont li img").css({"opacity":"0.1"});
            $(".vi_cont .rock figure img:nth-of-type(1)").css({"top":400,"left":376}).stop().animate({"opacity":1,"top":118,"left":376},800);
            $(".vi_cont .rock figure img:nth-of-type(2)").css({"top":-130,"left":376}).stop().animate({"opacity":1,"top":32,"left":376},800);
            $(".vi_cont .rock figure img:nth-of-type(3)").css({"top":22,"left":680}).stop().animate({"opacity":1,"top":22,"left":496},800);

            $(".vi_cont .airport figure img:nth-of-type(1)").css({"top":48,"left":226}).stop().animate({"opacity":1,"top":48,"left":376},1000);
            $(".vi_cont .airport figure img:nth-of-type(2)").css({"top":0,"left":390}).stop().animate({"opacity":1,"top":80,"left":390},1000);
            $(".vi_cont .airport figure img:nth-of-type(3)").css({"top":167,"left":680}).stop().animate({"opacity":1,"top":167,"left":500},1000);

            $(".vi_cont .trip figure img:nth-of-type(1)").css({"top":38,"left":258}).stop().animate({"opacity":1,"top":38,"left":358},1000);
            $(".vi_cont .trip figure img:nth-of-type(2)").css({"top":260,"left":450}).stop().animate({"opacity":1,"top":180,"left":450},1000);
            $(".vi_cont .trip figure img:nth-of-type(3)").css({"top":44,"left":680}).stop().animate({"opacity":1,"top":44,"left":420},1000);

            $(".vi_cont .ptree figure img:nth-of-type(1)").css({"top":150,"left":680}).stop().animate({"opacity":1,"top":150,"left":534},1000);
            $(".vi_cont .ptree figure img:nth-of-type(2)").css({"top":42,"left":250}).stop().animate({"opacity":1,"top":42,"left":350},1000);
            $(".vi_cont .ptree figure img:nth-of-type(3)").css({"top":0,"left":330}).stop().animate({"opacity":1,"top":50,"left":330},1000);

            $(".vi_cont .lego figure img:nth-of-type(1)").css({"top":190,"left":210}).stop().animate({"opacity":1,"top":190,"left":360},1000);
            $(".vi_cont .lego figure img:nth-of-type(2)").css({"top":172,"left":680}).stop().animate({"opacity":1,"top":172,"left":526},1000);
            $(".vi_cont .lego figure img:nth-of-type(3)").css({"top":260,"left":382}).stop().animate({"opacity":1,"top":36,"left":382},1000);
                           }
            /* 슬라이드 효과*/
            function auto() {
            sn++;
            if (sn >= 5) {
                $(".visual_slide ul").stop().animate({
                    "left": -sw * sn
                }, 200, function() {
                    $(this).stop().css({
                        "left": 0
                    });
                })
                sn = 0;
            } else {
                $(".visual_slide ul").stop().animate({
                    "left": -sw * sn
                }, 200);
            }
            $(".vi_cont span b").text(sn + 1);
            cont();
            }

            var timer = setInterval("auto()", 3000)

            $(".prev").click(function() {
                clearInterval(timer)
                if (sn <= 0) {
                    sn = 5;
                    $(".visual_slide ul").css({
                        "left": -sw * sn
                    }).stop().animate({
                        "left": -sw * (sn - 1)
                    }, 200);
                    cont();
                    $(".vi_cont span b").text(5);

                } else {
                    $(".visual_slide ul").stop().animate({
                        "left": -sw * (sn - 1)
                    }, 200);
                    $(".vi_cont span b").text(sn);
                    cont();
                }
                sn--;
                $(".stop").css({
                    "display": "none"
                });
                $(".play").css({
                    "display": "block"
                });
            })
            $(".next").click(function() {
                clearInterval(timer);
                auto();
                $(".stop").css({
                    "display": "none"
                });
                $(".play").css({
                    "display": "block"
                });
            })
            $(".stop").click(function() {
                clearInterval(timer);
                $(this).css({
                    "display": "none"
                });
                $(".play").css({
                    "display": "block"
                });
            })

            $(".play").click(function() {
                timer = setInterval("auto()", 3000)
                $(this).css({
                    "display": "none"
                });
                $(".stop").css({
                    "display": "block"
                });
            })
            /* 카드 소개 배너 */
            var cn;
            $(".main_card > ul li a").click(function(){
                $(this).addClass("under").parent("li").siblings().children("a").removeClass("under");
                cn = $(this).parent("li").index();
            $(".main_card > div ").eq(cn).css({"display":"block"}).siblings("div").css({"display":"none"})
            })


            /* 인증 영역 클릭시 페이지 전환*/
            $(".log ul li").click(function() {
                var log_no = $(this).index();
                $(this).addClass("under");
                $(this).siblings("li").removeClass("under");
                $(".log > div").eq(log_no).css({"display": "block"}).siblings("div").css({"display": "none"});
            })

            /* 질문영역 클릭시 페이지 전환*/
            $(".info ul li").click(function() {
                var log_no = $(this).index();
                $(this).addClass("under");
                $(this).siblings("li").removeClass("under");
                $(".info > dl").eq(log_no).css({"display": "block"}).siblings("dl").css({
                    "display": "none"
                });
            })

            /* 패밀리 사이트바*/
            $(".f_site p").click(function(){
                $(".f_site ul").toggle();
            })



        } else { //mob스크립트


            /* 메뉴페이지 이동 */

            $(".m_menu").click(function(){
                $("#m_menu").css({"display":"block"}).siblings().css({"display":"none"});
                $("footer").css({"display":"block"});
                $("#benefit").appendTo($(".slide")).css({"display":"block"}).find(".friends_slide").siblings().css({"display":"none"});
                $("footer").css({"background":"#f7f7fa"});
            })

            /* 홈이동 */
            $(".m_back").click(function(){
                $("#m_menu").css({"display":"none"}).siblings().css({"display":"block"}).siblings("script, #fix_menu").css({"display":"none"});

                 $("#benefit").insertAfter($("#card")).find(".friends_slide").siblings(".easy, .mob").css({"display":"block"});
                $("footer").css({"background":"#eff2f7"});
            })
            $(".m_home").click(function(){
                $("#m_menu").css({"display":"none"}).siblings().css({"display":"block"}).siblings("script, #fix_menu").css({"display":"none"});
                $("#benefit").insertAfter("#card").find(".friends_slide").siblings(".easy, .mob").css({"display":"block"});
                $("footer").css({"background":"#eff2f7"});
            })
            /* 헤드 스크롤 */
            $(window).scroll(function(){
            var sc = $(window).scrollTop();
//            console.log(sc);/*2350 하단 static*/
            var l_no= 0; /*콘솔 오류값 방지 값 "0"*/
            function check() {$(".nav_loc").css({"position":"fixed","background":"#fff"}).parents(".top").find(".blank").css({"height":136});}


            if(sc >= 2350){  /* 경우의 수 적은 것 부터 시작해야함.*/
                $(".nav_loc").css({"position":"static","background":"none"});
                $(".top .blank").css({"height":56});
                $(".nav_loc li").removeClass("under")

            }else if(sc >= 1900){/* 혜택가맹점*/
                $(".nav_loc").css({"position":"fixed","background":"#fff"});
                l_no = 8;
            }else if(sc >= 1640){ /* 혜택가맹점 */
                check();
                l_no = 7;
            }else if(sc >= 1500){ /* 혜택 */
                check();
                l_no = 6;
            }else if(sc >= 1280){ /* 해외이용 */
                check();
                l_no = 5;
            }else if(sc >= 1140){ /* 편의서비스 */
                check();
                l_no = 4;
            }else if(sc >= 1000){ /* 생활서비스 */
                check();
                l_no = 3;
            }else if(sc >= 580){ /* 장기카드대출 */
                check();
                l_no = 2;
            }else if(sc >= 440){ /* 카드발급관리 */
                check();
                l_no = 1;
            }else if(sc >= 152){ /* 카드 */
                check();
                l_no = 0;


            }else{ /* 스크롤 최상단*/
                $(".nav_loc").css({"position":"static","background":"none"});
                $(".top .blank").css({"height":60});
                $(".nav_loc li").removeClass("under")
            }
            var l_mo = $(".nav_loc li").eq(l_no).position().left;/* 초기 숫자 값이 없으면 콜솔에 오류뜸*/
            $(".nav_loc li").removeClass("under").eq(l_no).addClass("under");
                $(".nav_loc").stop().animate({scrollLeft : l_mo},300);
            if(sc <= 152 ) {$(".nav_loc li").removeClass("under")} /* 초기값 l_no=0 초기화*/
            })
            /* 클릭시 해당 헤드로 이동*/
            $(".nav_loc li").click(function(){
                var h_loc = $(this).index();
                var h_top = $(".mid .wrap > div").eq(h_loc).offset().top;
                /* 136 fixed 높이값 */
                $(window).scrollTop(h_top - 136); /*192 초기값 1번쨰 클릭시 실제 148*/
            })


            $(".vi_cont").append($(".vi_cont .baskin").clone());

            /* 모바일콘텐츠 애니메이션 */
            cont();
            $(".vi_cont").append($(".vi_cont .rock").clone());

            function cont(){$(".vi_cont li img").css({"opacity":"1"});
                $(".vi_cont .baskin figure img:nth-of-type(1)").css({"bottom":144,"left":0}).stop().animate({"opacity":1,"bottom":94,"left":-10},500);
                $(".vi_cont .baskin figure img:nth-of-type(2)").css({"bottom":0,"left":-130}).stop().animate({"opacity":1,"bottom":0,"left":-80},500);
                $(".vi_cont .baskin figure img:nth-of-type(3)").css({"bottom":0,"left":50}).stop().animate({"opacity":1,"bottom":0,"left":0},500);

                $(".vi_cont .starbucks figure img:nth-of-type(1)").css({"bottom":30,"left":40}).stop().animate({"opacity":1,"bottom":30,"left":10},500);
                $(".vi_cont .starbucks figure img:nth-of-type(2)").css({"bottom":-10,"left":170}).stop().animate({"opacity":1,"bottom":-10,"left":20},500);
                $(".vi_cont .starbucks figure img:nth-of-type(3)").css({"bottom":-50,"left":20}).stop().animate({"opacity":1,"bottom":50,"left":20},500);

                $(".vi_cont .trip figure img:nth-of-type(1)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":20,"left":-40},500);
                $(".vi_cont .trip figure img:nth-of-type(2)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":6,"left":40},500);
                $(".vi_cont .trip figure img:nth-of-type(3)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":10,"left":60},500);

                $(".vi_cont .ptree figure img:nth-of-type(1)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":10,"left":100},500);
                $(".vi_cont .ptree figure img:nth-of-type(2)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":20,"left":20},500);
                $(".vi_cont .ptree figure img:nth-of-type(3)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":80,"left":20},500);

                $(".vi_cont .lego figure img:nth-of-type(1)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":10,"left":-34},500);
                $(".vi_cont .lego figure img:nth-of-type(2)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":0,"left":90},500);
                $(".vi_cont .lego figure img:nth-of-type(3)").css({"bottom":0,"left":0}).stop().animate({"opacity":1,"bottom":10,"left":40},500)
            }



            /* 슬라이드 효과*/

            function auto() {
            sn++;
            if (sn >= 5) {
                $(".visual_slide .vi_cont").stop().animate({"left": -sw * sn}, 200, function() {
                $("#visual .m_nav li").eq(sn).addClass("m_on").siblings().removeClass("m_on");
                $(this).stop().css({"left": 0});
                })
                sn = 0;
            } else {
                $(".visual_slide .vi_cont").stop().animate({
                    "left": -sw * sn
                }, 200);
                $("#visual .m_nav li").eq(sn).addClass("m_on").siblings().removeClass("m_on");
            }
            $("#visual .vi_cont span b").text(sn + 1);
            cont();

            }

            var timer = setInterval("auto()", 3000)

            $("#visual .prev").click(function() {
                clearInterval(timer)
                if (sn <= 0) {
                    sn = 5;
                    $(".visual_slide .vi_cont").css({
                        "left": -sw * sn
                    }).stop().animate({
                        "left": -sw * (sn - 1)
                    }, 200);
                    cont();
                    $(".visual_slide span b").text(5);

                    $("#visual .m_nav li").eq(sn - 1).addClass("m_on").siblings().removeClass("m_on");

                } else {
                    $(".visual_slide .vi_cont").stop().animate({
                        "left": -sw * (sn - 1)
                    }, 200);
                    $(".vi_cont span b").text(sn);
                    $("#visual .m_nav li").eq(sn - 1).addClass("m_on").siblings().removeClass("m_on");
                    cont();
                }
                sn--;
                $("#visual .stop").css({
                    "display": "none"
                });
                $("#visual .play").css({
                    "display": "block"
                });
            })
            $("#visual .next").click(function() {
                clearInterval(timer);
                auto();
                $("#visual .stop").css({
                    "display": "none"
                });
                $("#visual .play").css({
                    "display": "block"
                });
            })
            $("#visual .stop").click(function() {
                clearInterval(timer);
                $(this).css({
                    "display": "none"
                });
                $(".play").css({
                    "display": "block"
                });
            })

            $("#visual .play").click(function() {
                timer = setInterval("auto()", 3000)
                $(this).css({
                    "display": "none"
                });
                $("#visual .stop").css({
                    "display": "block"
                });
            })
            /* 네비 위치 이동*/
            $(".m_nav li").click(function(){
                sn = $(this).index() -1 ;
                clearInterval(timer);
                auto();
                $("#visual .stop").css({
                    "display": "none"
                });
                $("#visual .play").css({
                    "display": "block"
                });
            })

            /* 스타프렌즈 슬라이드*/
            var m_sn = 1;
            var m_sw = $(".friends_slide .m_cont li").innerWidth();

            var s_nav = $(".m_cont li:last-child").index();

            $(".friends_slide .m_cont").append($(".friends_slide .m_cont li:first-child").clone());

            function m_slide() {
                if(m_sn>=2){
                    $(".friends_slide .m_cont").stop().animate({"left":- m_sw * m_sn++},500,function(){
                        $(this).css({"left":0})
                    $("#benefit .m_nav li").eq(m_sn - 1).addClass("m_on").siblings().removeClass("m_on");
                });
                m_sn = 1;
                }else{
                    $(".friends_slide .m_cont").stop().animate({"left":- m_sw * m_sn++},500);
                    $("#benefit .m_nav li").eq(m_sn - 1).addClass("m_on").siblings().removeClass("m_on");
                }
            }
            var m_auto = setInterval("m_slide()",2000)

            /* 슬라이드 카피 */
            $("#benefit .prev").click(function() {
                console.log(m_sn)
                clearInterval(m_auto) /* 버튼 클릭시 재생 중지*/
                if (m_sn <= 1) {
                    m_sn = 2;

                    $(".friends_slide .m_cont").css({"left": -m_sw * m_sn}).stop().
                    animate({"left": -m_sw * (m_sn - 1)}, 500);

                    $("#benefit .m_nav li").eq(m_sn - 1).addClass("m_on").siblings().removeClass("m_on");

                } else {
                    m_sn--;
                    $(".friends_slide .m_cont").stop().animate({
                        "left": -m_sw * (m_sn - 1)
                    }, 500);

                    $("#benefit .m_nav li").eq(m_sn - 1).addClass("m_on").siblings().removeClass("m_on");
                }

                $("#benefit .stop").css({
                    "display": "none"
                });
                $("#benefit .play").css({
                    "display": "block"
                });
            })


            $("#benefit .next").click(function() {
                clearInterval(m_auto); /* 버튼 클릭시 재생 중지*/
                m_slide();
                $("#benefit .stop").css({
                    "display": "none"
                });
                $("#benefit .play").css({
                    "display": "block"
                });
            })
            $("#benefit .stop").click(function() {
                clearInterval(m_auto);
                $(this).css({
                    "display": "none"
                });
                $("#benefit .play").css({
                    "display": "block"
                });
            })

            $("#benefit .play").click(function() {
                m_auto = setInterval("m_slide()", 2000)
                $(this).css({
                    "display": "none"
                });
                $("#benefit .stop").css({
                    "display": "block"
                });
            })
            /* 네비 위치 이동*/
            $("#benefit .m_nav li").click(function(){
                m_sn = $(this).index();
                console.log(m_sn);
                clearInterval(m_auto);
                m_slide();
                $("#benefit .stop").css({
                    "display": "none"
                });
                $("#benefit .play").css({
                    "display": "block"
                });
            })

        }
/*        }//react()
        react();

        $(window).stop().resize(
            function(){
                if (bw = 799){ react(); }
            })*/

