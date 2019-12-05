window.map = (function(window) {
  'use strict';

  var mapElem = document.querySelector('#contact-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');

  window.ymaps.ready(function() {
    var map = new window.ymaps.Map(mapElem, {
      center: [53.274364, 34.316635],
      zoom: 16,
      controls: ['zoomControl'],
    });

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new window.ymaps.Placemark(
      [53.274364, 34.316635],
      {
        hintContent: '241023, Россия, г. Брянск, ул. Объездная, д.30, 32',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'images/icon-map-pin.svg',
        iconImageSize: [54, 54],
        iconImageOffset: [-25, -54],
      }
    );

    map.geoObjects.add(myPlacemark);
  });
})(window);
