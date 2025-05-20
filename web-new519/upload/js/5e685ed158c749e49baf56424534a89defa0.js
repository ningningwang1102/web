$(function(){
    /*start*/
  
  /*nav*/
  var nav = $("#c_static_001-1649658909958 .e_container-7,#c_static_001-1649658909958 .e_navigationF-3,#c_static_001-1649658909958 .e_container-14,#c_static_001-1649658909958 .e_image-8,#c_static_001-1649658909958 .e_image-10,.version,#c_static_001-1649658909958 .e_quickLogin-12")
  var win = $(window); //得到窗口对象  
  var sc = $(document); //得到document文档对象。
  win.scroll(function () {
      if (sc.scrollTop() >= 10) {
          nav.addClass("fixed");
         $("#c_static_001-1649658909958 .e_container-6").addClass("fixed");
         $(".tNavBox").addClass("setHeight");
      } else {
          nav.removeClass("fixed");
         $("#c_static_001-1649658909958 .e_container-6").removeClass("fixed");
        $(".tNavBox").removeClass("setHeight");
      }
  })
    $("#c_static_001-1649658909958 .e_container-7").mouseenter(function(){
      if (sc.scrollTop() < 10) {
       nav.addClass("fixed");
      }
    })
    $("#c_static_001-1649658909958 .e_container-7").mouseleave(function(){
      if (sc.scrollTop() < 10) {
        nav.removeClass("fixed");
      }
    })

  $('.navBtn').on('click',function(){
      $(this).siblings('.tNav').toggleClass('tNavHeight');
  });
  $('.navSliBtn').on('click',function(){
      $('.tNav').removeClass('tNavHeight');
  });
  $('.tNavH > .iconJt').on('click',function(){
      $(this).toggleClass('iconJtRotate')
      .parents('.navLi').siblings('.navLi')
      .find('.slidBox').slideUp().end()
      .find('.tNavH').removeClass('tNavHBac').end()
      .find('.iconJt').removeClass('iconJtRotate').end().end().end()
      .parent('.tNavH').addClass('tNavHBac').siblings('.slidBox').slideToggle();
  });
  $('.navSli > .iconJt').on('click',function(){
      $(this).toggleClass('iconJtRotate');
       $(this).parents('.navSli').find('ul').slideToggle();
  });
  
  $(".bot-icons li").hover(function(){
      //$(this).find(".show-conts").show();
      $(this).addClass("on");
  },function(){
      //$(this).find(".show-conts").hide();
      $(this).removeClass("on");
  })
  $('.totops').click(function(){
      $("html,body").animate({"scrollTop": "0px"}, "slow");
  });
  
  $(".p_blackbg").click(function(){
  	$(".p_navContent").removeClass("showmenuBox");
   $(this).removeClass("showbg")
  })
  if($(window).width() > 768){
    $(".p_navButton").mouseenter(function(){
      $(".p_navContent").addClass("showmenuBox");
     $(".p_blackbg").addClass("showbg")
    })
  }

  var wow = new WOW({
      boxClass: 'wow', //需要执行动画的元素的 class
      animateClass: 'animated', //animation.css 动画的 class
      offset: 200, //距离可视区域多少开始执行动画
      mobile: false, //是否在移动设备上执行动画
      live: true  //异步加载的内容是否有效
  });
  wow.init();
    /*end*/
})