import $ from "jquery";
import Inputmask from "inputmask";

if (document.querySelector('q1_phone')) {
  $(document).ready(function() {
    var selector = document.getElementById('q1_phone');
    var selector2 = document.getElementById('q2_phone');
  
    var im = new Inputmask("+7(999)999-99-99");
    var im2 = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
    im2.mask(selector2);
  })
  
}
