window.showPopup = (function() {
  'use strict';

  const DATA_ATTR_MATH = 'data-show-popup';

  document.addEventListener('click', function(evt) {
    const popupTriggerEl = evt.target.closest(`[${DATA_ATTR_MATH}]`);

    if (!popupTriggerEl) {
      return;
    }

    const popupSrc = popupTriggerEl.dataset.showPopup;

    if (popupSrc) {
      $.fancybox.open([
        {
          src: popupSrc
        }
      ]);
    }
  });
})();
