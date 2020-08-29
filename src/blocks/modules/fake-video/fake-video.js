import $ from "jquery";
import magnificPopup from "magnific-popup";

$(window.document).ready(function() {

  $("#fake-video-btn, .fake-video__video.btn").click(function() {
    $.magnificPopup.open({
      showCloseBtn: false,
      items: {
        src: '#v-block',
        type: 'inline'
      }
    });
  });
});
