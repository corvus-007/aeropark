window.eventsDateFilter = (function() {
  'use strict';

  const eventsWithDateElms = document.querySelectorAll('[data-event-date]');

  if (!eventsWithDateElms.length) {
    return;
  }

  const currentDate = Date.now();

  eventsWithDateElms.forEach(eventEl => {
    const eventDate = eventEl.dataset.eventDate;
    const isNowadaysEvent = currentDate - new Date(eventDate) > 0;
    eventEl.classList.toggle('event-card--finished', isNowadaysEvent);
  });
})();
