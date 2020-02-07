window.storageFilterSelector = (function() {
  'use strict';

  let prevURL = document.referrer;

  if (!prevURL) {
    return;
  }

  prevURL = new URL(prevURL);

  let prevSearchParams = new URLSearchParams(prevURL.search);

  if (!prevSearchParams.has('filter_by')) {
    return;
  }

  let selector = prevSearchParams.get('filter_by');
  let prevButton = document.querySelector('.back-link');

  if (!prevButton) {
    return;
  }

  prevButton.search = `?filter_by=${selector}`;
})();
