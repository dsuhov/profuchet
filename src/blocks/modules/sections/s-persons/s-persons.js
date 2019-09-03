import $ from "jquery";
import slick from "slick-slider";

$(document).ready(function() {
  if (document.querySelector('#s-persons__js-slider')) {
    $('#s-persons__js-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: ".s-persons__btn--next",
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
      ]
    });
  }
})