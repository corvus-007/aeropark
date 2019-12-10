window.outCover = (function() {
  'use strict';

  const outCover = document.querySelector('.out-cover');
  const outCoverToggle = document.querySelector('.out-cover-toggle');
  const scrollWidth = window.util.getScrollbarWidth();

  const onOutCoverEscPress = function(event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  const showOutCover = function() {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened', 'no-scroll-page');
    document.body.style.paddingRight = scrollWidth + 'px';

    document.addEventListener('keydown', onOutCoverEscPress);
  };

  const hideOutCover = function() {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened', 'no-scroll-page');
    document.body.style.paddingRight = '';

    document.removeEventListener('keydown', onOutCoverEscPress);
  };

  outCoverToggle.addEventListener('click', function(event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });

  return {
    show: showOutCover,
    hide: hideOutCover,
  };
})();
