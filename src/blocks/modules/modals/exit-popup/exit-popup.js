import $ from "jquery";
import magnificPopup from "magnific-popup";
import ouibounce from "ouibounce";
import Inputmask from "inputmask"; 



  document.addEventListener("DOMContentLoaded", () => {
    ouibounce(document.getElementById('exit-popup'), {
      aggressive: true,
      // sitewide: true,
      // cookieDomain: '.example.com',
      // timer: 0,
      callback: function() { 
        $.magnificPopup.open({
          items: {
            src: '#exit-popup'
          },
          type: 'inline',
          showCloseBtn: false
        }, 0);
      }
    });
    
      // INPUTMASK
      var selector = document.getElementById('exit-popup__phone');
    
      var im = new Inputmask("+7(999)999-99-99");
      im.mask(selector);
});