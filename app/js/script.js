document.addEventListener('DOMContentLoaded', function() {
  const $ = window.jQuery;

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
      ERROR:
        'Cодержимое не смогло загрузиться. <br> Пожалуйста, повторите попытку позже',
      PLAY_START: 'Запустить слайдшоу',
      PLAY_STOP: 'Остановить слайдшоу',
      FULL_SCREEN: 'На весь экран',
      THUMBS: 'Миниатюры',
      DOWNLOAD: 'Скачать',
      SHARE: 'Поделиться',
      ZOOM: 'Увеличить',
    },
  };

  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99',
  });

  $.validator.addMethod(
    'checkPhoneMask',
    function(value) {
      return /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(value);
    },
    'Заполните номер телефона'
  );

  $.validator.addMethod(
    'checkUrl',
    function(value) {
      return (
        /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i.test(value) || value === ''
      );
    },
    'Неверный URL'
  );

  $('.chosen-select').chosen({ no_results_text: 'Ой, ничего не найдено!' });

  function checkSwiperIfItHasOnlyOneSlide(instance) {
    const galleryInstance = instance;
    const gallery = galleryInstance.el;
    const amountSlides = galleryInstance.slides.length;
    const hasOnlyOneSlide = amountSlides <= 1;

    gallery.classList.toggle('swiper-has-one-slide', hasOnlyOneSlide);
  }

  document.addEventListener('click', function(evt) {
    const target = evt.target;
    const searchHeaderToggle = target.closest('[data-toggle-search]');
    const outCoverToggle = target.closest('.out-cover-toggle');

    if (!(searchHeaderToggle || outCoverToggle)) {
      return;
    }

    const isShowSearch = document.body.classList.contains(
      'is-header-search-showed'
    );
    const isShowOutCover = document.body.classList.contains(
      'is-out-cover-opened'
    );

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
      slideShadows: false,
    },
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev',
    },
    autoplay: {
      delay: 3300
    },
    on: {
      init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      },
    },
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
      slideShadows: true,
    },
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev',
    },
    on: {
      init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      },
    },
  });

  new Swiper('[data-shop-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev',
    },
    on: {
      init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      },
    },
  });

  new Swiper('[data-content-gallery]', {
    speed: 600,
    navigation: {
      nextEl: '.common-slider-button--next',
      prevEl: '.common-slider-button--prev',
    },
    on: {
      init() {
        checkSwiperIfItHasOnlyOneSlide(this);
      },
    },
  });

  function sortLogoCardsByName(list) {
    if (!list) {
      return;
    }

    const children = list.children;
    const sortedChildren = [...children].sort((a, b) => {
      const aValue = a.querySelector(`[title]`)?.title || '';
      const bValue = b.querySelector(`[title]`)?.title || '';

      return aValue.localeCompare(bValue);
    });

    for (const child of sortedChildren) {
      list.append(child);
    }
  }

  sortLogoCardsByName(document.querySelector('.shop-logos-cards'));
});
