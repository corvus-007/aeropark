window.movieCardEmbilight = (function (window, $) {
  'use strict';

  const AMBILIGHT_POSTER_CLASS = 'movie-card__ambilight-poster';
  const movieCards = document.querySelectorAll('.movie-card');

  if (!movieCards.length) {
    return;
  }

  movieCards.forEach((movieCard) => {
    const poster = movieCard.querySelector('.movie-card__poster');
    const posterImage = poster.querySelector('img');
    const posterSrc = posterImage.currentSrc || posterImage.src;
    const ambilightElem = document.createElement('div');

    ambilightElem.style.backgroundImage = `url(${posterSrc})`;
    ambilightElem.classList.add(AMBILIGHT_POSTER_CLASS);
    poster.insertAdjacentElement('afterend', ambilightElem);
  });

})(window, jQuery);
