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

window.splashScreen = function (window) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = window.util.getScrollbarWidth() + 'px';
  window.addEventListener('load', function () {
    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  });
}(window);

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

window.eventsFilter = function () {
  'use strict';

  var events = document.querySelector('.events');

  if (!events) {
    return;
  } // const iso = new Isotope('.events-cards', {
  //   itemSelector: '.events-cards__item',
  //   layoutMode: 'fitRows'
  // });


  var eventsFilter = events.querySelector('.events-filter');
  var currentElem = eventsFilter.querySelector('.events-filter__current');
  var labelElem = eventsFilter.querySelector('.events-filter__label');
  var optionsList = eventsFilter.querySelector('.events-filter__options');
  var eventsCardsList = events.querySelector('.events-cards'); // let eventCardItems = eventsCardsList.querySelectorAll('.events-cards__item');

  var filterText = '';

  function filterItems() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
    var eventCardItems = eventsCardsList.querySelectorAll('.events-cards__item');
    hideAllItems();
    eventCardItems.forEach(function (card) {
      // debugger;
      if (card.matches(value)) {
        // card.hidden = false;
        card.classList.remove('events-cards__item--hidden');
        card.classList.add('events-cards__item--show');
      }
    });
  }

  filterItems();

  function hideAllItems() {
    var eventCardItems = eventsCardsList.querySelectorAll('.events-cards__item');
    eventCardItems.forEach(function (card) {
      // card.hidden = true;
      card.classList.add('events-cards__item--hidden');
      card.classList.remove('events-cards__item--show');
    });
  }

  optionsList.addEventListener('click', function (evt) {
    evt.preventDefault();
    var button = evt.target.closest('button');

    if (!button) {
      return;
    }

    optionsList.querySelector('.event-filter-option--active').classList.remove('event-filter-option--active');
    button.closest('.event-filter-option').classList.add('event-filter-option--active');
    var filterValue = button.dataset.filter;
    filterText = button.textContent;
    labelElem.textContent = filterText;
    closeFilterOptions();
    filterItems(filterValue); // iso.arrange({
    //   filter: filterValue
    // });
  }); // function showCard(card) {
  //   card.classList.t
  // }

  currentElem.addEventListener('click', onCurrentElemClick);

  function openFilterOptions() {
    eventsFilter.classList.add('events-filter--open');
  }

  function closeFilterOptions() {
    eventsFilter.classList.remove('events-filter--open');
  }

  function onCurrentElemClick(evt) {
    var isEventFilterOpen = eventsFilter.classList.contains('events-filter--open');

    if (!isEventFilterOpen) {
      openFilterOptions();
    } else {
      closeFilterOptions();
    }

    window.addEventListener('click', onWindowClick);
  }

  function onWindowClick(evt) {
    var target = evt.target;

    if (!target.closest('.events-filter')) {
      closeFilterOptions();
      window.removeEventListener('click', onWindowClick);
    }
  }
}();