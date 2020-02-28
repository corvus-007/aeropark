"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var $ = window.jQuery;
  svg4everybody();
  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.backFocus = false;
  $.fancybox.defaults.touch = false;
  $.fancybox.defaults.lang = 'ru';
  $.fancybox.defaults.i18n = {
    ru: {
      CLOSE: 'Закрыть',
      NEXT: 'Следующий',
      PREV: 'Предыдущий',
      ERROR: 'Cодержимое не смогло загрузиться. <br> Пожалуйста, повторите попытку позже',
      PLAY_START: 'Запустить слайдшоу',
      PLAY_STOP: 'Остановить слайдшоу',
      FULL_SCREEN: 'На весь экран',
      THUMBS: 'Миниатюры',
      DOWNLOAD: 'Скачать',
      SHARE: 'Поделиться',
      ZOOM: 'Увеличить'
    }
  };
  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99'
  });
  $.validator.addMethod('checkPhoneMask', function (value) {
    return /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(value);
  }, 'Заполните номер телефона');
  $('.chosen-select').chosen({
    no_results_text: 'Ой, ничего не найдено!'
  });

  function checkSwiperIfItHasOnlyOneSlide(instance) {
    var galleryInstance = instance;
    var gallery = galleryInstance.el;
    var amountSlides = galleryInstance.slides.length;
    var hasOnlyOneSlide = amountSlides <= 1;
    gallery.classList.toggle('swiper-has-one-slide', hasOnlyOneSlide);
  }

  document.addEventListener('click', function (evt) {
    var target = evt.target;
    var searchHeaderToggle = target.closest('[data-toggle-search]');
    var outCoverToggle = target.closest('.out-cover-toggle');

    if (!(searchHeaderToggle || outCoverToggle)) {
      return;
    }

    var isShowSearch = document.body.classList.contains('is-header-search-showed');
    var isShowOutCover = document.body.classList.contains('is-out-cover-opened');

    if (searchHeaderToggle && isShowOutCover) {
      window.outCover.hide();
    }

    if (outCoverToggle && isShowSearch) {
      window.headerSearch.hide();
    }
  });
  new Swiper('[data-events-slider]', {
    speed: 800,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    effect: 'coverflow',
    loopedSlides: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: -50,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    },
    on: {
      init: function init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      }
    }
  });
  new Swiper('[data-preview-events-photo-slider]', {
    speed: 600,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    effect: 'coverflow',
    slideActiveClass: 'swiper-slide-active preview-event--active',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    },
    on: {
      init: function init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      }
    }
  });
  new Swiper('[data-shop-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    },
    on: {
      init: function init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      }
    }
  });
  new Swiper('[data-content-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    },
    on: {
      init: function init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      }
    }
  });
});