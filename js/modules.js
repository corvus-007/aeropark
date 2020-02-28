"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.util = function () {
  'use strict';

  return {
    KEYCODE_ESC: 27,
    setMaxHeight: function setMaxHeight(selector) {
      var maxHeight;
      var elements = document.querySelectorAll(selector);

      if (!elements.length) {
        return;
      }

      maxHeight = Array.from(elements).reduce(function findMaxHeight(prevValue, element) {
        var currentValue = element.offsetHeight;
        return prevValue > currentValue ? prevValue : currentValue;
      }, 0);
      Array.from(elements).forEach(function specifyMaxHeight(it) {
        it.style.height = maxHeight + 'px';
      });
    },
    getScrollbarWidth: function getScrollbarWidth() {
      var div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return scrollWidth;
    }
  };
}();

window.splashScreen = function () {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  var isLoaded = false;
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = window.util.getScrollbarWidth() + 'px';
  window.addEventListener('load', function () {
    hideSplashScreen();
  });
  setTimeout(function () {
    hideSplashScreen();
  }, 1000 * 8);

  function hideSplashScreen() {
    if (isLoaded) {
      return;
    }

    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
    isLoaded = true;
  }
}();

window.outCover = function () {
  'use strict';

  var outCover = document.querySelector('.out-cover');
  var outCoverToggle = document.querySelector('.out-cover-toggle');
  var scrollWidth = window.util.getScrollbarWidth();

  var onOutCoverEscPress = function onOutCoverEscPress(event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  var showOutCover = function showOutCover() {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened', 'no-scroll-page');
    document.body.style.paddingRight = scrollWidth + 'px';
    document.addEventListener('keydown', onOutCoverEscPress);
  };

  var hideOutCover = function hideOutCover() {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened', 'no-scroll-page');
    document.body.style.paddingRight = '';
    document.removeEventListener('keydown', onOutCoverEscPress);
  };

  outCoverToggle.addEventListener('click', function (event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });
  return {
    show: showOutCover,
    hide: hideOutCover
  };
}();

window.headerSearch = function () {
  'use strict';

  var headerSearch = document.querySelector('[data-header-search]');

  if (!headerSearch) {
    return;
  }

  var input = document.querySelector('[data-header-search-input]');
  var scrollWidth = window.util.getScrollbarWidth();
  document.addEventListener('click', onclickDocumentHandler);

  function onclickDocumentHandler(evt) {
    var target = evt.target;
    var toggleBtn = target.closest('[data-toggle-search]');

    if (!toggleBtn) {
      return;
    }

    evt.preventDefault();
    var isShowSearch = document.body.classList.contains('is-header-search-showed');

    if (!isShowSearch) {
      showHeaderSearch();
    } else {
      hideHeaderSearch();
    }
  }

  function showHeaderSearch() {
    document.body.classList.add('is-header-search-showed', 'no-scroll-page');
    document.body.style.paddingRight = scrollWidth + 'px';
    setTimeout(function () {
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

  return {
    show: showHeaderSearch,
    hide: hideHeaderSearch
  };
}();

window.siteHeader = function () {
  'use strict';

  var header = document.querySelector('.site-header');

  if (!header) {
    return;
  }

  var headerBottom = document.querySelector('.site-header-bottom');
  var headerBottomStuck = window.matchMedia('(min-width: 1024px)').matches ? generateHeaderBottomStuck() : '';
  var headerSentinel = generateSentinel();
  header.after(headerSentinel, headerBottomStuck);
  var headerObserver = new IntersectionObserver(function (entrys) {
    var entry = entrys[0];
    document.body.classList.toggle('is-header-sticky', !entry.isIntersecting);
  }, {
    threshold: 1
  });
  headerObserver.observe(headerSentinel);

  function generateSentinel() {
    var div = document.createElement('div');
    div.setAttribute('class', 'site-header__sentinel');
    return div;
  }

  function generateHeaderBottomStuck() {
    var clone = headerBottom.cloneNode(true);
    clone.setAttribute('class', 'site-header-bottom-stuck');
    return clone;
  }
}();

var menuLinks = document.querySelectorAll(".site-menu__link");

_toConsumableArray(menuLinks).forEach(function (link) {
  var littleCircle = link.querySelector(".site-menu__decor-circle--little");
  var bigCircle = link.querySelector(".site-menu__decor-circle--big");
  link.addEventListener("mouseenter", function (evt) {
    anime.remove(littleCircle);
    anime.remove(bigCircle);
    var startLittleCircleTween = anime({
      targets: littleCircle,
      scale: [0, 1],
      opacity: [0, 1],
      rotate: function rotate() {
        return anime.random(-200, 200);
      },
      translateX: [0, 20],
      autoplay: false,
      delay: function delay() {
        return anime.random(10, 120);
      },
      duration: 1200
    });
    var startBigCircleTween = anime({
      targets: bigCircle,
      scale: [0, 1],
      opacity: [0, 1],
      translateX: function translateX() {
        return anime.random(-15, 15);
      },
      translateY: function translateY() {
        return anime.random(-15, 15);
      },
      autoplay: false,
      duration: 1200
    });
    startLittleCircleTween.play();
    startBigCircleTween.play();
  });
  link.addEventListener("mouseleave", function (evt) {
    anime.remove(littleCircle);
    anime.remove(bigCircle);
    var finishtLittleCircleTween = anime({
      targets: littleCircle,
      // translateX: [20, -1],
      translateX: function translateX() {
        return "-=".concat(anime.random(20));
      },
      scale: [1, 1],
      opacity: [1, 0],
      autoplay: false,
      duration: 1000
    });
    var finishBigCircleTween = anime({
      targets: bigCircle,
      opacity: [1, 0],
      translateY: function translateY() {
        return "*=".concat(anime.random(0.2, 1));
      },
      scale: function scale() {
        return "*=".concat(anime.random(0.2, 0.4));
      },
      translateX: function translateX() {
        return "*=".concat(anime.random(0.2, 1));
      },
      delay: function delay() {
        return anime.random(50, 100);
      },
      autoplay: false,
      duration: 1200
    });
    finishtLittleCircleTween.play();
    finishBigCircleTween.play();
  });
});

window.movieCardEmbilight = function (window, $) {
  'use strict';

  var AMBILIGHT_POSTER_CLASS = 'movie-card__ambilight-poster';
  var movieCards = document.querySelectorAll('.movie-card');

  if (!movieCards.length) {
    return;
  }

  movieCards.forEach(function (movieCard) {
    var poster = movieCard.querySelector('.movie-card__poster');
    var posterImage = poster.querySelector('img');
    var posterSrc = posterImage.currentSrc || posterImage.src;
    var ambilightElem = document.createElement('div');
    ambilightElem.style.backgroundImage = "url(".concat(posterSrc, ")");
    ambilightElem.classList.add(AMBILIGHT_POSTER_CLASS);
    poster.insertAdjacentElement('afterend', ambilightElem);
  });
}(window, jQuery);

window.commonPageFilter = function () {
  'use strict';

  var COLLPASED_CLASS = 'common-page-filter--collapsed';
  var SEARCH_PARAM_NAME = 'filter_by';
  var commonPageFilter = document.querySelector('.common-page-filter');

  if (!commonPageFilter) {
    return;
  }

  function getFilterSelectorFromHash() {
    var params = new URLSearchParams(window.location.search);
    var selector = null;

    if (params.has(SEARCH_PARAM_NAME)) {
      selector = params.get(SEARCH_PARAM_NAME);
    }

    return selector;
  }

  var initSelector = getFilterSelectorFromHash();
  var setDefaultFilter = commonPageFilter.dataset.setDefaultFilter;

  if (!initSelector && setDefaultFilter) {
    initSelector = setDefaultFilter;
  } else if (!initSelector) {
    initSelector = '*';
  }

  commonPageFilter.classList.add(COLLPASED_CLASS);
  var currentElem = commonPageFilter.querySelector('.common-page-filter__current');
  var labelElem = commonPageFilter.querySelector('.common-page-filter__label');
  var optionsList = commonPageFilter.querySelector('.common-page-filter__options');
  var cardsList = document.querySelector('[data-filter-cards]');
  var initButton = optionsList.querySelector("[data-filter=\"".concat(initSelector, "\"]"));
  initButton = initButton ? initButton : optionsList.querySelector('[data-filter]');
  var initOption = initButton.closest('.common-filter-option');
  var initValue = initButton.dataset.filter;
  var initTextValue = initButton.textContent;
  var toggleCollapsedStateText = ['Показать все', 'Скрыть'];
  var filterText = '';
  var toggle = null;

  if (checkIsOverflowOptions()) {
    toggle = generateToggle();
    commonPageFilter.append(toggle);
    toggle.addEventListener('click', onToggleClick);
  }

  optionsList.addEventListener('click', onOptionsListClick);
  currentElem.addEventListener('click', onCurrentElemClick);

  function onCurrentElemClick(evt) {
    evt.preventDefault();
    var isEventFilterOpen = commonPageFilter.classList.contains('common-page-filter--open');

    if (!isEventFilterOpen) {
      openFilterOptions();
    } else {
      closeFilterOptions();
    }

    window.addEventListener('click', onWindowClick);
  }

  function onWindowClick(evt) {
    var target = evt.target;

    if (!target.closest('.common-page-filter')) {
      window.removeEventListener('click', onWindowClick);
      closeFilterOptions();
    }
  }

  function onToggleClick(evt) {
    evt.preventDefault();
    var isCollapsedOptions = commonPageFilter.classList.contains(COLLPASED_CLASS);
    toggle.textContent = !isCollapsedOptions ? toggleCollapsedStateText[0] : toggleCollapsedStateText[1];
    commonPageFilter.classList.toggle(COLLPASED_CLASS, !isCollapsedOptions);
  }

  function checkIsOverflowOptions() {
    return optionsList.scrollWidth > optionsList.clientWidth;
  }

  function generateToggle() {
    var toggle = document.createElement('button');
    toggle.setAttribute('type', 'button');
    toggle.setAttribute('class', 'common-page-filter__toggle');
    toggle.textContent = toggleCollapsedStateText[0];
    return toggle;
  }

  function filterItems() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
    var cardsItems = cardsList.children;
    hideAllItems();

    _toConsumableArray(cardsItems).forEach(function (card) {
      if (card.matches(value)) {
        card.classList.remove('events-cards__item--hidden');
        card.classList.add('events-cards__item--show');
      }
    });
  }

  updateTextAtLabel(initTextValue);
  setActiveOption(initOption);
  filterItems(initValue);
  updateHistory(initValue);

  function hideAllItems() {
    var cardsItems = cardsList.children;

    _toConsumableArray(cardsItems).forEach(function (card) {
      card.classList.add('events-cards__item--hidden');
      card.classList.remove('events-cards__item--show');
    });
  }

  function clearActiveToOptions() {
    optionsList.querySelector('.common-filter-option--active').classList.remove('common-filter-option--active');
  }

  function setActiveOption(optionElem) {
    optionElem.classList.add('common-filter-option--active');
  }

  function openFilterOptions() {
    commonPageFilter.classList.add('common-page-filter--open');
  }

  function closeFilterOptions() {
    commonPageFilter.classList.remove('common-page-filter--open');
  }

  function updateTextAtLabel(text) {
    labelElem.textContent = text;
  }

  function updateHistory(val) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(SEARCH_PARAM_NAME, val);
    history.replaceState({}, '', "".concat(location.pathname, "?").concat(searchParams));
  }

  function onOptionsListClick(evt) {
    evt.preventDefault();
    var button = evt.target.closest('button');

    if (!button) {
      return;
    }

    clearActiveToOptions();
    setActiveOption(button.closest('.common-filter-option'));
    var filterValue = button.dataset.filter;
    filterText = button.textContent;
    updateTextAtLabel(filterText);
    closeFilterOptions();
    filterItems(filterValue);
    updateHistory(filterValue);
  }
}();

window.storageFilterSelector = function () {
  'use strict';

  var prevURL = document.referrer;

  if (!prevURL) {
    return;
  }

  prevURL = new URL(prevURL);
  var prevSearchParams = new URLSearchParams(prevURL.search);

  if (!prevSearchParams.has('filter_by')) {
    return;
  }

  var selector = prevSearchParams.get('filter_by');
  var prevButton = document.querySelector('.back-link');

  if (!prevButton) {
    return;
  }

  prevButton.search = "?filter_by=".concat(selector);
}();

window.eventsDateFilter = function () {
  'use strict';

  var eventsWithDateElms = document.querySelectorAll('[data-event-date]');

  if (!eventsWithDateElms.length) {
    return;
  }

  var currentDate = Date.now();
  eventsWithDateElms.forEach(function (eventEl) {
    var eventDate = eventEl.dataset.eventDate;
    var isNowadaysEvent = currentDate - new Date(eventDate) > 0;
    eventEl.classList.toggle('event-card--finished', isNowadaysEvent);
  });
}();

window.showPopup = function ($) {
  'use strict';

  var DATA_ATTR_MATH = 'data-show-popup';
  document.addEventListener('click', function (evt) {
    var popupTriggerEl = evt.target.closest("[".concat(DATA_ATTR_MATH, "]"));

    if (!popupTriggerEl) {
      return;
    }

    var popupSrc = popupTriggerEl.dataset.showPopup;

    if (popupSrc) {
      $.fancybox.open([{
        src: popupSrc
      }]);
    }
  });
}(window.jQuery);

window.rentStore = function ($) {
  'use strict';

  var form = document.querySelector('#form-rent-store');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    groups: {
      area: 'areaMin areaMax areaOptimal'
    },
    errorPlacement: function errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler: function submitHandler(form, event) {
      event.preventDefault();
      var formData = new FormData(form);
      var action = form.action;
      formData.append('dateSendForm', new Date());
      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      }).done(function (data) {
        if (data.status === true) {
          form.reset();
          $.fancybox.close(true);
          setTimeout(function () {
            $.fancybox.open("\n                <div class=\"popup-message\">\n                  <h2 class=\"popup-message__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E</h2><p class=\"popup-message__text\">\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.</p>\n                </div>\n              ");
          }, 400);
        } else {
          $.fancybox.open("\n              <div class=\"popup-message\">\n                <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430,  \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n              </div>\n            ");
        }
      }).fail(function () {
        $.fancybox.open("\n            <div class=\"popup-message\">\n              <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n            </div>\n          ");
      });
    },
    rules: {
      phone: {
        checkPhoneMask: true
      }
    }
  });
}(window.jQuery);

window.rentIsland = function ($) {
  'use strict';

  var form = document.querySelector('#form-rent-island');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    groups: {
      dimensions: 'dimensionWidth dimensionLength dimensionHeight'
    },
    errorPlacement: function errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler: function submitHandler(form, event) {
      event.preventDefault();
      var formData = new FormData(form);
      var action = form.action;
      formData.append('dateSendForm', new Date());
      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      }).done(function (data) {
        if (data.status === true) {
          form.reset();
          $.fancybox.close(true);
          setTimeout(function () {
            $.fancybox.open("\n                <div class=\"popup-message\">\n                  <h2 class=\"popup-message__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E</h2><p class=\"popup-message__text\">\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.</p>\n                </div>\n              ");
          }, 400);
        } else {
          $.fancybox.open("\n              <div class=\"popup-message\">\n                <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430,  \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n              </div>\n            ");
        }
      }).fail(function () {
        $.fancybox.open("\n            <div class=\"popup-message\">\n              <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n            </div>\n          ");
      });
    },
    rules: {
      phone: {
        checkPhoneMask: true
      },
      'profiles[]': {
        required: true
      }
    }
  });
}(window.jQuery);

window.applicationAd = function ($) {
  'use strict';

  var form = document.querySelector('#form-application-ad');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    errorPlacement: function errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler: function submitHandler(form, event) {
      event.preventDefault();
      var action = form.action;
      var formData = new FormData(form);

      function getActiveNameOfAd() {
        var activePanelEl = document.querySelector('[data-aria-accordion-panel][aria-hidden="false"]');
        var text = null;

        if (activePanelEl) {
          var headingEl = activePanelEl.previousElementSibling;
          text = headingEl.textContent;
        }

        return text;
      }

      formData.append('dateSendForm', new Date());
      formData.append('currentTypeAd', getActiveNameOfAd());
      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      }).done(function (data) {
        if (data.status === true) {
          form.reset();
          $.fancybox.close(true);
          setTimeout(function () {
            $.fancybox.open("\n                <div class=\"popup-message\">\n                  <h2 class=\"popup-message__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E</h2><p class=\"popup-message__text\">\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.</p>\n                </div>\n              ");
          }, 400);
        } else {
          $.fancybox.open("\n              <div class=\"popup-message\">\n                <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430,  \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n              </div>\n            ");
        }
      }).fail(function () {
        $.fancybox.open("\n            <div class=\"popup-message\">\n              <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n            </div>\n          ");
      });
    },
    rules: {
      phone: {
        checkPhoneMask: true
      }
    }
  });
}(window.jQuery);

window.contactUs = function ($) {
  'use strict';

  var form = document.querySelector('#form-contact-us');

  if (!form) {
    return;
  }

  $(form).validate({
    ignore: '.ignore-validate',
    errorPlacement: function errorPlacement(error, element) {
      error.appendTo(element.closest('.field__control'));
    },
    submitHandler: function submitHandler(form, event) {
      event.preventDefault();
      var action = form.action;
      var formData = new FormData(form);
      formData.append('dateSendForm', new Date());
      $.ajax({
        url: action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      }).done(function (data) {
        if (data.status === true) {
          form.reset();
          $.fancybox.close(true);
          setTimeout(function () {
            $.fancybox.open("\n                <div class=\"popup-message\">\n                  <h2 class=\"popup-message__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E</h2><p class=\"popup-message__text\">\u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.</p>\n                </div>\n              ");
          }, 400);
        } else {
          $.fancybox.open("\n              <div class=\"popup-message\">\n                <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430,  \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n              </div>\n            ");
        }
      }).fail(function () {
        $.fancybox.open("\n            <div class=\"popup-message\">\n              <h2 class=\"popup-message__title\">\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A</h2><p class=\"popup-message__text\">\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>\n            </div>\n          ");
      });
    }
  });
}(window.jQuery);

window.map = function (window) {
  'use strict';

  var mapElem = document.querySelector('#contact-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');
  window.ymaps.ready(function () {
    var map = new window.ymaps.Map(mapElem, {
      center: [53.274364, 34.316635],
      zoom: 16,
      controls: ['zoomControl']
    });
    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new window.ymaps.Placemark([53.274364, 34.316635], {
      hintContent: '241023, Россия, г. Брянск, ул. Объездная, д.30, 32'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './images/icon-map-pin.svg',
      iconImageSize: [54, 54],
      iconImageOffset: [-25, -54]
    });
    map.geoObjects.add(myPlacemark);
  });
}(window);