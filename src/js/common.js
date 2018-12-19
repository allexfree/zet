"use strict";

$(document).ready(function () {
  $('.clients__slider').slick({
    dots: !0,
    dotsClass: 'clients__slider-pagination',
    infinite: !0,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: !0
  });

  $('.main-menu__btn').click(function () {
    $(this).toggleClass('main-menu__btn--active');
    $('.main-menu').toggleClass('main-menu--active');
    $('.main-menu__block').toggleClass('main-menu__block--active');
  });

  $('.main-menu__block-link[href^="#"]').click(function () {
    var link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top + 'px'
    }, 1000);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.scroll-to-top').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
