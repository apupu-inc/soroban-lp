var vh=window.innerHeight;
document.getElementById('vh').style.height=vh+'px';
// ↑ ↑ viewport-header100vh
// ↓ ↓ loading
var bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loader');
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');
window.addEventListener('load', stopload);
setTimeout('stopload()',5000);
function stopload(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}
// ↓ ↓ fade-in
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();
    $('.nofade').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("fadein");
      }
    });
    $('.nofade-b').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 25) {
        $(this).addClass("fadein");
      }
    });
    $('.nofade-c').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 25) {
        $(this).addClass("fadein");
      }
    });
  });
});
// ↓ ↓ Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 1,
    speed: 1000,
    watchSlidesProgress: true,
    autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              },
    grabCursor: true,
    watchSlidesProgress: true,
    waitForTransition: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        spaceBetween: 32,
          slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 21,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    },
});
// ↓ ↓ qa__Accordion
jQuery(function ($) {
$('.js-accordion-title').on('click', function () {
  $(this).next('.accordion-content').children('.aco-p').children('.accordion-a_p-f').toggleClass('accordion-a_fadein');
$('.js-accordion-title').next('accordion-content').toggleClass("open");
  $(this).next().slideToggle(500);
  $(this).toggleClass('open', 500);
});
});
// ↓ ↓ pagetop__p
$('#pagetop').on('click', ()=>{
    $('body,html').animate({ scrollTop: 0 }, 1800);
    return false;
});
