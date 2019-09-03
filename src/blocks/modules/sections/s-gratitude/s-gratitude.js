import $ from "jquery";
import magnificPopup from "magnific-popup";
import slick from "slick-slider";


$(document).ready(function() {
  

  if (document.querySelector('.s-gratitude__slider')) {
    $('.s-gratitude__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      prevArrow: ".s-gratitude__btn--prev",
      nextArrow: ".s-gratitude__btn--next",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
      ]
    });

    $('.gratitude-item').magnificPopup({type:'image'});
  }
});