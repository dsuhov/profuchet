import $ from 'jquery';

var myMap1, myPlacemark1;

function init(){     
    setTimeout(() => {
        myMap1 = new ymaps.Map("pu-map", {
            center: [55.718400, 37.853906],
            zoom: 17,
            controls: []
        });
        
        myPlacemark1 = new ymaps.Placemark([55.718476, 37.857620], { 
            hintContent: 'ДКБ "ПрофУчёт"', 
            balloonContent: 'ул. Большая Косинская, д. 27' 
        });
        
        myMap1.geoObjects.add(myPlacemark1);
    }, 3000)
}

document.addEventListener("DOMContentLoaded", () => {
    $('head').append('<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>');
    
    setTimeout(() => ymaps.ready(init), 1000);
});