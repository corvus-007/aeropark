"use strict";

document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();
  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.touch = false;
  $.fancybox.defaults.lang = 'ru';
  $.fancybox.defaults.i18n = {
    ru: {
      CLOSE: 'Закрыть',
      NEXT: 'Следующий',
      PREV: 'Предыдущий',
      ERROR: 'Cодержимое не смогло загрузиться. <br> Пожалуйста, повторите попытку позже',
      PLAY_START: 'Начать слайдшоу',
      PLAY_STOP: 'Остановить слайдшоу',
      FULL_SCREEN: 'На весь экран',
      THUMBS: 'Миниатрюры',
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
    // Navigation arrows
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
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
    }
  });
  new Swiper('[data-shop-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    }
  });
  new Swiper('[data-content-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev'
    }
  });
});