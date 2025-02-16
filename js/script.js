let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

//////// search /////////////
$(".search-btn").click(function(e) {
  e.preventDefault();
  $('.search-content').toggleClass('h-70');
  $('.search-btn').toggleClass('close-search');
});

  //phone size menu onclick
  if ($(window).width() <= 991) {
    
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
      $(".visit-link").toggleClass("flex" ,1500);
      $('.language').toggleClass('show');
      $(".language-dropdown").toggleClass("visible");
      
      $(".language-dropdown").toggleClass("z");
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
  
 
   //slide down menu
   $(".menu-item-has-children a").click(function(e) {
          
    $(this).siblings(".sub-menu ").slideToggle(400);
    $(".menu-item-has-children a").not(this).siblings(".sub-menu ").slideUp(400);
    if ($(window).width() <= 991) {
     
        $(this).toggleClass("active");
        $(".menu-item-has-children a").not(this).removeClass("active");
        
    }
});
}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
       $('.search-content').removeClass('h-0' , 500);
       
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
      $('.search-content').addClass('h-0' , 500);
      $('.search-content').removeClass('h-70' , 500);
      $('.search-btn').removeClass('close-search');
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
      $('.search-content').addClass('h-0' , 500);
      $('.search-content').removeClass('h-70' , 500);
      $('.search-btn').removeClass('close-search');
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
      $('.search-content').removeClass('h-0' , 1000);
     
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
      $('.search-content').removeClass('h-0' , 1000);
      
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
      $('.search-content').addClass('h-0' , 500);
      $('.search-content').removeClass('h-70' , 500);
      $('.search-btn').removeClass('close-search');
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
      $('.search-content').addClass('h-0' , 500);
      $('.search-content').removeClass('h-70' , 500);
      $('.search-btn').removeClass('close-search');
    }
  });

 


  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });


  
 
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });


///////// **new-arrivals-section** /////////

var screen2 = new Swiper(".new-arrivals-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".new-arrivals-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".new-arrivals-slider .swiper-btn-next",
    prevEl: ".new-arrivals-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

 


 ////////////** footer transfer into accordion **//////////

 if ($(window).width() <= 767) {
  $(".nav-foot-header").addClass("footer-accordion");
  $(".nav-foot").addClass("footer-panel");
}
$(".footer-accordion").click(function () {
  var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
  $(".footer-accordion").not(this).removeClass("active");
  $(this).toggleClass("active");
  if ($(this).siblings().css("max-height") == "0px") {
    $(this).siblings().css("max-height", x);
    $(this).siblings(".nav-foot").css("padding-top", "15px");
  } else {
    $(this).siblings().css("max-height", "0");
    $(this).siblings(".nav-foot").css("padding-top", "0");
  }

  $(".footer-accordion").not(this).siblings().css("max-height", "0");
  $(".footer-accordion")
    .not(this)
    .siblings(".nav-foot")
    .css("padding-top", "0");
});


});

