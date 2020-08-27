import $ from "jquery";
import magnificPopup from "magnific-popup";
import Inputmask from "inputmask";

if (document.querySelector('.yellow-btn--s-top')) {
  
  // POPUP
  $('.yellow-btn--s-top').magnificPopup({
    showCloseBtn: false,
    items: {
      src: '#popup-quiz',
      type: 'inline'
    }
  });
  
  // var selector = document.getElementById('q2_phone');
  
  // var im = new Inputmask("+7(999)999-99-99");
  // im.mask(selector);

  $('.yellow-btn--s-top').on('mfpClose', function(e /*, params */) {
    setTimeout(() => {
      $.magnificPopup.open({
        items: {
          src: '#new-exit-popup'
        },
        type: 'inline',
        showCloseBtn: false
      });
    }, 300)
  });
}
