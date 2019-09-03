import $ from "jquery";
import Inputmask from "inputmask";
import Datepicker from "Datepicker.js";
import magnificPopup from "magnific-popup";

$(document).ready(function() {
  if ($(window).width() < 600) {
    $('.left-phone__title-1').html($('.left-phone__title-1').html().replace('<br>', ''));
    $('.left-phone__title-2').html($('.left-phone__title-2').html().replace('<br>', ''));
  }
  
  // INPUTMASK
  var selector = document.getElementById('left-phone__phone');
  
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(selector);
  
  // DATETIME PICKER
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

var simple = new Datepicker('#left-phone__time', {
  time: true,
  toValue: function(val) {
    // console.log(val);
    
    if (!val) {
      var today = new Date();
      return today;
      // return `${today.getDate()} ${monthNames[parseInt(today.getMonth())-1]} в ${today.getHours()}:${today.getMinutes()}`;
    }
    
    let [date, time] = val.split('@');
    let [day, month, year] = date.split('.');
    
    if (day) {
      day = day.startsWith('0') ? day.slice(1) : day;
    } else {
      day = '';
    }
    
    if (month) {
      month = month.startsWith('0') ? monthNames[parseInt(month.slice(1))-1] : monthNames[parseInt(month)-1];
    } else {
      month = '';
    }
    
    if (!time) {
      time = '';
    }
    
    return `${day} ${month} в ${time}`;
  },
  serialize: function(e) {
    // console.log(e)
    // console.log(new Date());
    
    if (typeof e === 'string' || e === undefined) {
      console.log('string');
      e = new Date();
    }
    
    var t = e.toLocaleDateString();
    if (this.get("time")) {
      var n = e.toLocaleTimeString();
      return t + "@" + (n = n.replace(/(\d{1,2}:\d{2}):00/, "$1"));
    }
    return t;
  },
  fromValue: function(val) {
    // console.log(val);
    return new Date();
    // return val;
  }
});

// POPUP
$('.backcall-btn').magnificPopup({
  showCloseBtn: false,
  items: {
    src: '#left-phone',
    type: 'inline'
  }
});

$('.popup__close-btn').on('click', () => {
  $.magnificPopup.close();
})
})