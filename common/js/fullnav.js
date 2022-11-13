$(document).ready(function () {
  var smh = $(".visual").height(); //비주얼 이미지의 높이를 리턴한다   900px
  var on_off = false; //false(안오버)  true(오버)

  //console.log(smh);

  // gnb mouseenter
  $("#headerArea").mouseenter(function () {
    $(this).addClass("on");
    on_off = true;
  });

  // gnb mouseleave
  $("#headerArea").mouseleave(function () {
    var scroll = $(window).scrollTop(); //스크롤의 거리

    if (scroll >= 0 && scroll < smh - 50) {
      $(this).removeClass("on");
    } else if (scroll > smh - 50) {
      $(this).addClass("on");
    }
    on_off = false;
  });

  // gnb 스크롤 이벤트 체크
  $(window).on("scroll", function () {
    //스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop(); //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);

    if (scroll > smh - 300) {
      //스크롤300까지 내리면
      $("#headerArea").addClass("on");
    } else {
      //스크롤 내리기 전 디폴트(마우스올리지않음)
      if (on_off == false) {
        $("#headerArea").removeClass("on");
      }
    }
  });

  // gnb 2depth 열기/닫기
  $("ul.dropdownmenu").hover(
    function () {
      $("ul.dropdownmenu li.menu ul").fadeIn("normal", function () {
        $(this).stop();
      }); //모든 서브를 다 열어라
      $("#headerArea").animate({ height: 410 }, "fast").clearQueue();
    },
    function () {
      $("ul.dropdownmenu li.menu ul").hide(); //모든 서브를 다 닫아라
      $("#headerArea").animate({ height: 160 }, "fast").clearQueue();
    }
  );

  // gnb 접근성 tab 처리
  $("ul.dropdownmenu li.menu .depth1").on("focus", function () {
    $("#headerArea").addClass("on");
    $("ul.dropdownmenu li.menu ul").slideDown("normal");
    //$(this).parents('.menu').addClass('on');
    $("#headerArea").animate({ height: 483 }, "fast").clearQueue();
  });

  $("ul.dropdownmenu li.m6 li:last a").on("blur", function () {
    $("#headerArea").removeClass("on");
    $("ul.dropdownmenu li.menu ul").slideUp("fast");
    //$(this).parents('.menu').removeClass('on');
    $("#headerArea").animate({ height: 190 }, "normal").clearQueue();
  });

  //family site
  $(".family_site_wrap > a").toggle(
    function (e) {
      e.preventDefault();
      //클릭 시 > list 노출 > 미노출
      $(".family_site_wrap .family_site_list").stop().fadeIn("fast");
    },
    function (e) {
      e.preventDefault();
      $(".family_site_wrap .family_site_list").stop().fadeOut("fast");
    }
  );
  //family site tab키 처리
  $(".family_site_wrap > a").on("focus", function () {
    $(".family_site_wrap .family_site_list").stop().fadeIn("fast");
  });
  $(".family_site_wrap .family_site_list li:last a").on("blur", function () {
    $(".family_site_wrap .family_site_list").stop().fadeOut("fast");
  });
});
