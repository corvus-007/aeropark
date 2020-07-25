window.commonPageFilter = (function () {
  'use strict';

  const COLLAPSED_CLASS = 'common-page-filter--collapsed';
  const SEARCH_PARAM_NAME = 'filter_by';
  const commonPageFilter = document.querySelector('.common-page-filter');

  if (!commonPageFilter) {
    return;
  }

  function sortOptionsByName(list) {
    if (!list) {
      return;
    }

    const children = list.children;
    const sortedChildren = [...children].sort((a, b) => {
      const aValue = a.textContent.trim();
      const bValue = b.textContent.trim();

      if (bValue === 'Все') {
        return 1;
      }

      return aValue.localeCompare(bValue);
    });

    for (const child of sortedChildren) {
      list.append(child);
    }
  }

  function sortItemsByName(list) {
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

  function getFilterSelectorFromHash() {
    const params = new URLSearchParams(window.location.search);
    let selector = null;

    if (params.has(SEARCH_PARAM_NAME)) {
      selector = params.get(SEARCH_PARAM_NAME);
    }

    return selector;
  }

  let initSelector = getFilterSelectorFromHash();
  const setDefaultFilter = commonPageFilter.dataset.setDefaultFilter;

  if (!initSelector && setDefaultFilter) {
    initSelector = setDefaultFilter;
  } else if (!initSelector) {
    initSelector = '*';
  }

  commonPageFilter.classList.add(COLLAPSED_CLASS);
  const optionsList = commonPageFilter.querySelector(
    '.common-page-filter__options'
  );

  sortOptionsByName(optionsList);

  const currentElem = commonPageFilter.querySelector(
    '.common-page-filter__current'
  );
  const labelElem = commonPageFilter.querySelector(
    '.common-page-filter__label'
  );

  const cardsList = document.querySelector('[data-filter-cards]');

  sortItemsByName(document.querySelector('.shop-logos-cards'));

  let initButton = optionsList.querySelector(`[data-filter="${initSelector}"]`);
  initButton = initButton
    ? initButton
    : optionsList.querySelector('[data-filter]');
  const initOption = initButton.closest('.common-filter-option');
  const initValue = initButton.dataset.filter;
  const initTextValue = initButton.textContent;
  const toggleCollapsedStateText = ['Показать все', 'Скрыть'];
  let filterText = '';
  let toggle = null;

  if (checkIsOverflowOptions()) {
    toggle = generateToggle();
    commonPageFilter.append(toggle);
    toggle.addEventListener('click', onToggleClick);
  }

  optionsList.addEventListener('click', onOptionsListClick);
  currentElem.addEventListener('click', onCurrentElemClick);

  function onCurrentElemClick(evt) {
    evt.preventDefault();

    const isEventFilterOpen = commonPageFilter.classList.contains(
      'common-page-filter--open'
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

    if (!target.closest('.common-page-filter')) {
      window.removeEventListener('click', onWindowClick);

      closeFilterOptions();
    }
  }

  function onToggleClick(evt) {
    evt.preventDefault();

    const isCollapsedOptions = commonPageFilter.classList.contains(
      COLLAPSED_CLASS
    );
    toggle.textContent = !isCollapsedOptions
      ? toggleCollapsedStateText[0]
      : toggleCollapsedStateText[1];

    commonPageFilter.classList.toggle(COLLAPSED_CLASS, !isCollapsedOptions);
  }

  function checkIsOverflowOptions() {
    return optionsList.scrollWidth > optionsList.clientWidth;
  }

  function generateToggle() {
    const toggle = document.createElement('button');
    toggle.setAttribute('type', 'button');
    toggle.setAttribute('class', 'common-page-filter__toggle');
    toggle.textContent = toggleCollapsedStateText[0];

    return toggle;
  }

  function filterItems(value = '*') {
    const cardsItems = cardsList.children;

    hideAllItems();

    [...cardsItems].forEach((card) => {
      if (card.matches(value)) {
        card.classList.remove('events-cards__item--hidden');
        card.classList.add('events-cards__item--show');
      }
    });
  }

  updateTextAtLabel(initTextValue);
  setActiveOption(initOption);
  filterItems(initValue);
  updateHistory(initValue);

  function hideAllItems() {
    const cardsItems = cardsList.children;

    [...cardsItems].forEach((card) => {
      card.classList.add('events-cards__item--hidden');
      card.classList.remove('events-cards__item--show');
    });
  }

  function clearActiveToOptions() {
    optionsList
      .querySelector('.common-filter-option--active')
      .classList.remove('common-filter-option--active');
  }

  function setActiveOption(optionElem) {
    optionElem.classList.add('common-filter-option--active');
  }

  function openFilterOptions() {
    commonPageFilter.classList.add('common-page-filter--open');
  }

  function closeFilterOptions() {
    commonPageFilter.classList.remove('common-page-filter--open');
  }

  function updateTextAtLabel(text) {
    labelElem.textContent = text;
  }

  function updateHistory(val) {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(SEARCH_PARAM_NAME, val);
    history.replaceState({}, '', `${location.pathname}?${searchParams}`);
  }

  function onOptionsListClick(evt) {
    evt.preventDefault();

    const button = evt.target.closest('button');

    if (!button) {
      return;
    }

    clearActiveToOptions();

    setActiveOption(button.closest('.common-filter-option'));

    const filterValue = button.dataset.filter;

    filterText = button.textContent;

    updateTextAtLabel(filterText);
    closeFilterOptions();
    filterItems(filterValue);
    updateHistory(filterValue);
  }
})();
