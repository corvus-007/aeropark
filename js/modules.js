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
  var toggleBtn = document.querySelector('[data-toggle-search]');
  var input = document.querySelector('[data-header-search-input]');
  var scrollWidth = window.util.getScrollbarWidth();
  toggleBtn.addEventListener('click', onclickTogglSearchHandler);

  function onclickTogglSearchHandler(evt) {
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
  var commonPageFilter = document.querySelector('.common-page-filter');

  if (!commonPageFilter) {
    return;
  }

  commonPageFilter.classList.add(COLLPASED_CLASS);
  var currentElem = commonPageFilter.querySelector('.common-page-filter__current');
  var labelElem = commonPageFilter.querySelector('.common-page-filter__label');
  var optionsList = commonPageFilter.querySelector('.common-page-filter__options');
  var cardsList = document.querySelector('[data-filter-cards]');
  var initOption = optionsList.firstElementChild;
  var initButton = initOption.querySelector('[data-filter]');
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
  }
}(); ////=require modules/rent.js