window.colorSchemeSwitcher = (function() {
  'use strict';

  document.documentElement.classList.remove('no-js');

  const STORAGE_KEY = 'user-color-scheme';
  const COLOR_MODE_KEY = '--color-mode';

  const colorSchemeSwitcher = document.querySelector('[data-color-scheme-switcher]');

  if (!colorSchemeSwitcher) {
    return;
  }

  const modeToggleButton = document.querySelector(
    '[data-color-scheme-mode-toggle]'
  );

  const modeToggleText = document.querySelector(
    '[data-color-scheme-mode-toggle-text]'
  );
  const modeStatusElement = document.querySelector(
    '[data-color-scheme-mode-status]'
  );

  const color = {
    light: 'светлый',
    dark: 'темный',
  };

  const getCSSCustomProp = propKey => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(
      propKey
    );

    if (response.length) {
      response = response.replace(/"/g, '').trim();
    }

    return response;
  };

  const setButtonLabelAndStatus = currentSetting => {
    const oppositeColor = currentSetting === 'dark' ? 'light' : 'dark';

    modeToggleText.textContent = `Включить ${color[oppositeColor]} режим`;
    modeStatusElement.textContent = `Цветовой режим ${color[currentSetting]}`;
  };

  const applySetting = passedSetting => {
    let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

    if (currentSetting) {
      document.documentElement.setAttribute(
        'data-user-color-scheme',
        currentSetting
      );
      setButtonLabelAndStatus(currentSetting);
    } else {
      setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY));
    }
  };

  const toggleSetting = () => {
    let currentSetting = localStorage.getItem(STORAGE_KEY);

    switch (currentSetting) {
      case null:
      case undefined:
        currentSetting =
          getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
        break;
      case 'light':
        currentSetting = 'dark';
        break;
      case 'dark':
        currentSetting = 'light';
        break;
    }

    localStorage.setItem(STORAGE_KEY, currentSetting);

    return currentSetting;
  };

  modeToggleButton.addEventListener('click', evt => {
    evt.preventDefault();

    applySetting(toggleSetting());
  });

  applySetting();
})();
