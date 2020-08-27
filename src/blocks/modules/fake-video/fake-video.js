import $ from "jquery";
import magnificPopup from "magnific-popup";

$(window.document).ready(function() {

  $("#fake-video-btn").click(function() {
    $.magnificPopup.open({
      showCloseBtn: false,
      items: {
        src: '#new-exit-popup',
        type: 'inline'
      }
    });
  });
});
