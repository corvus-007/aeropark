"use strict";

document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();
  var eventsSlider = new Swiper('[data-events-slider]', {
    speed: 800,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    effect: 'coverflow',
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
  var previewEventsPhotolider = new Swiper('[data-preview-events-photo-slider]', {
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
    // Navigation arrows
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