import $ from "jquery";
import magnificPopup from "magnific-popup";
import ouibounce from "ouibounce";
import Inputmask from "inputmask"; 



  document.addEventListener("DOMContentLoaded", () => {
    ouibounce(document.getElementById('new-exit-popup'), {
      aggressive: true,
      callback: function() { 
        $.magnificPopup.open({
          items: {
            src: '#new-exit-popup'
          },
          type: 'inline',
          showCloseBtn: false
        }, 0);
      }
    });
    
      // INPUTMASK
      var selector = document.getElementById('q4_phone');
    
      var im = new Inputmask("+7(999)999-99-99");
      im.mask(selector);
});
