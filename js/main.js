$(document).ready(function(){
  var winSize = $(window).width()
  if(winSize >= 1201) {pc()}
  if(winSize <=1200) {ta()}
  if(winSize <= 767) {mo()}

  // scroll_up 하면 header 변화
  $(window).scroll(function() {
    if($('html, body').scrollTop() > 0) {
      $('header').addClass('scroll_up')
    }
    if($('html, body').scrollTop() <= 0) {
      $('header').removeClass('scroll_up')
    }
  });//scroll-up

  // 메인 비쥬얼 slick
  $('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    fadeSpeed: 1000,

    responive: [
      {breakpoint : 1024, //tablet
      settings : {
       slideToshow : 1,
       slidesToScroll: 1
      }
     }, {
      breakpoint : 550, //mobile
      settings : {
       slideToShow : 1,
       slidesToScroll: 1
      }
     }
    ]
  });//slick
  $('.slick-dots li').click(function() {
    $(this).not.removeClass('dots_on');
    $(this).addClass('dots_on');
  });//slick dots

  // 밑으로 스크롤 화살표
  $('.scroll').click(function(event){            
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });//스크롤 화살표

});//ready()

function pc() {
//PC버전 #gnb 
// $('nav #gnb>li').mouseover(function() {
//   $('nav #gnb .depth2').show()
//   $('nav').css('background', '#FFF')
// })
// $(this).mouseout(function() {
//   $('nav #gnb .depth2').hide();
// })
// $('nav>#gnb>li').mouseover(function() {
//   var num = $(this).index()

//   $('nav>#gnb>li').children('.depth2').not(this).hide();
//   $('nav>#gnb>li').children('.depth2').eq(num).show();
//   $('nav>#gnb>.plus>a').css({'background-image' : 'none'});

//   $('.depth2').mouseout(function() {
//     $('nav>#gnb>li').children('.depth2').hide()
//   });
// });

// Our Business
  // tabs
  var num = 1;
  $('.tabs li').click(function() {
      num = $(this).index() + 1;
      $('.contents>div').hide()
      $('.content' + num).show()

      $('.tabs li').not(this).removeClass('tab_on')
      $(this).addClass('tab_on')
  })

  // contents
  $('.prev').click(function() {
    $('.content' + num).find('ul').animate({'margin-left' : -400},function() {
      $('.content' + num).find('li:first-child').insertAfter($('.content' + num).find('li:last-child'))
      $('.content' + num).find('ul').css({'margin-left' : 0})
    })
  })
  $('.next').click(function() {
    $('.content' + num).find('ul').animate({'margin-right' : -400},function() {
      $('.content' + num).find('li:first-child').insertAfter($('.content' + num).find('li:last-child'))
      $('.content' + num).find('ul').css({'margin-right' : 0})
    })
  })
}

function ta() {
//Tablet, Mobile버전 #gnb 햄버거버튼
var s = 0;
$('.mo_gnb_btn').click(function() {
  if(s == 0) {
  $('.mo_gnb_btn').addClass('active');
  $('header nav').addClass('view');
  $('.mo_gnb_btn span').css('background', '#FFF');
  s = 1;
  }
  else {
  $('.mo_gnb_btn').removeClass('active');
  $('header nav').removeClass('view')
  $('.mo_gnb_btn span').css('background', '#333');
  s = 0;
  }

});

//Tablet, Mobile버전 #gnb
$('nav>#gnb>li').click(function() {//enter
var num = $(this).index()

  $('nav>#gnb>li').children('.depth2').eq(num).slideToggle(function() {
    $('nav>#gnb>li').children('.depth2').not(this).hide(350);
  });
});

//li의 +버튼을 누르면 -로 변경, 나머지는 + 그대로
var p = 0;
$('nav #gnb .plus').click(function() {
  if(p == 0) {
    var n = $(this).index()
    $('nav #gnb .plus>a').eq(n).css({'background-image' : 'url(img/m_minus.svg)'});
    
    p = 1;
  }
  else {
$('nav #gnb .plus>a').not(this).css({'background-image' : 'url(img/m_plus.svg)'});
    p = 0;
  }

});

// // NEWS 상하 슬라이딩
// function tick(){
//   $('.list_box li:first').slideUp(function(){$(this).appendTo($('.list_box')).slideDown();
//   $(this).not.hide()

// });
// }
// setInterval(function(){tick ()}, 5000);//tick()

// Our Business
  // tabs
  var num = 1;
  $('.tabs li').click(function() {
      num = $(this).index() + 1;
      $('.contents>div').hide()
      $('.content' + num).show()

      $('.tabs li').not(this).removeClass('tab_on')
      $(this).addClass('tab_on')
  })

  // contents
  $('.prev').click(function() {
    var wid = $('#business .contents li img').width()
    $('.content' + num).find('ul').animate({'margin-left' : '-wid'},function() {
      $('.content' + num).find('li:first-child').insertAfter($('.content' + num).find('li:last-child'))
      $('.content' + num).find('ul').css({'margin-left' : 0})
    })
  })
  $('.next').click(function() {
    $('.content' + num).find('ul').animate({'margin-right' : '-wid'},function() {
      $('.content' + num).find('li:first-child').insertAfter($('.content' + num).find('li:last-child'))
      $('.content' + num).find('ul').css({'margin-right' : 0})
    })
  })

}//ta()

function mo() {
}//mo()