window.siteHeader = (function() {
  'use strict';

  const header = document.querySelector('.site-header');

  if (!header) {
    return;
  }

  const headerBottom = document.querySelector('.site-header-bottom');
  const headerBottomStuck = window.matchMedia('(min-width: 1024px)').matches
    ? generateHeaderBottomStuck()
    : '';
  const headerSentinel = generateSentinel();

  header.after(headerSentinel, headerBottomStuck);

  const headerObserver = new IntersectionObserver(
    entrys => {
      const entry = entrys[0];
      document.body.classList.toggle('is-header-sticky', !entry.isIntersecting);
    },
    { threshold: 1 }
  );

  headerObserver.observe(headerSentinel);

  function generateSentinel() {
    const div = document.createElement('div');
    div.setAttribute('class', 'site-header__sentinel');

    return div;
  }

  function generateHeaderBottomStuck() {
    const clone = headerBottom.cloneNode(true);
    clone.setAttribute('class', 'site-header-bottom-stuck');

    return clone;
  }
})();
