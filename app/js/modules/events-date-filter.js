window.eventsDateFilter = (function() {
  'use strict';

  const eventsWithDateElms = document.querySelectorAll('[data-event-date]');

  if (!eventsWithDateElms.length) {
    return;
  }

  const currentDate = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  eventsWithDateElms.forEach(eventEl => {
    const eventDate = eventEl.dataset.eventDate;
    const isNowadaysEvent = currentDate - oneDay - new Date(eventDate) > 0;

    eventEl.classList.toggle('event-card--finished', isNowadaysEvent);
  });
})();
