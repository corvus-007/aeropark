window.headerSearch = (function () {
  'use strict';

  const headerSearch = document.querySelector('[data-header-search]');
  const toggleBtn = document.querySelector('[data-toggle-search]');
  const input = document.querySelector('[data-header-search-input]');
  const scrollWidth = window.util.getScrollbarWidth();

  toggleBtn.addEventListener('click', onclickTogglSearchHandler);

  function onclickTogglSearchHandler(evt) {
    evt.preventDefault();

    const isShowSearch = document.body.classList.contains('is-header-search-showed');

    if (!isShowSearch) {
      showHeaderSearch();
    } else {
      hideHeaderSearch();
    }
  }

  function showHeaderSearch() {
    document.body.classList.add('is-header-search-showed', 'no-scroll-page');
    document.body.style.paddingRight = scrollWidth + 'px';

    setTimeout(() => {
      input.focus();
    }, 100);

    document.addEventListener('keydown', onHeaderSearchEscPress);
  }

  function hideHeaderSearch() {
    document.body.classList.remove('is-header-search-showed', 'no-scroll-page');
    document.body.style.paddingRight = '';
    input.blur();
    document.removeEventListener('keydown', onHeaderSearchEscPress);
  }

  function onHeaderSearchEscPress(event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideHeaderSearch();
    }
  }

})();
