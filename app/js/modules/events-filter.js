window.eventsFilter = (function() {
  'use strict';

  const events = document.querySelector('.events');

  if (!events) {
    return;
  }

  const eventsFilter = events.querySelector('.events-filter');
  const currentElem = eventsFilter.querySelector('.events-filter__current');
  const labelElem = eventsFilter.querySelector('.events-filter__label');
  const optionsList = eventsFilter.querySelector('.events-filter__options');
  const eventsCardsList = events.querySelector('.events-cards');

  let filterText = '';

  function filterItems(value = '*') {
    const eventCardItems = eventsCardsList.querySelectorAll(
      '.events-cards__item'
    );

    hideAllItems();

    eventCardItems.forEach(card => {
      if (card.matches(value)) {
        card.classList.remove('events-cards__item--hidden');
        card.classList.add('events-cards__item--show');
      }
    });
  }

  filterItems();

  function hideAllItems() {
    const eventCardItems = eventsCardsList.querySelectorAll(
      '.events-cards__item'
    );

    eventCardItems.forEach(card => {
      // card.hidden = true;
      card.classList.add('events-cards__item--hidden');
      card.classList.remove('events-cards__item--show');
    });
  }

  optionsList.addEventListener('click', function(evt) {
    evt.preventDefault();

    const button = evt.target.closest('button');

    if (!button) {
      return;
    }

    optionsList
      .querySelector('.event-filter-option--active')
      .classList.remove('event-filter-option--active');

    button
      .closest('.event-filter-option')
      .classList.add('event-filter-option--active');

    const filterValue = button.dataset.filter;

    filterText = button.textContent;
    labelElem.textContent = filterText;
    closeFilterOptions();

    filterItems(filterValue);

    // iso.arrange({
    //   filter: filterValue
    // });
  });

  // function showCard(card) {
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
    const isEventFilterOpen = eventsFilter.classList.contains(
      'events-filter--open'
    );

    if (!isEventFilterOpen) {
      openFilterOptions();
    } else {
      closeFilterOptions();
    }

    window.addEventListener('click', onWindowClick);
  }

  function onWindowClick(evt) {
    const target = evt.target;

    if (!target.closest('.events-filter')) {
      closeFilterOptions();
      window.removeEventListener('click', onWindowClick);
    }
  }
})();
