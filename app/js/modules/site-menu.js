const menuLinks = document.querySelectorAll(`.site-menu__link`);

[...menuLinks].forEach((link) => {
  const littleCircle = link.querySelector(`.site-menu__decor-circle--little`);
  const bigCircle = link.querySelector(`.site-menu__decor-circle--big`);

  link.addEventListener(`mouseenter`, function (evt) {
    anime.remove(littleCircle);
    anime.remove(bigCircle);

    const startLittleCircleTween = anime({
      targets: littleCircle,
      scale: [0, 1],
      opacity: [0, 1],
      rotate() {
        return anime.random(-200, 200);
      },
      translateX: [0, 20],
      autoplay: false,
      delay() {
        return anime.random(10, 120);
      },
      duration: 1200,
    });

    const startBigCircleTween = anime({
      targets: bigCircle,
      scale: [0, 1],
      opacity: [0, 1],
      translateX() {
        return anime.random(-15, 15);
      },
      translateY() {
        return anime.random(-15, 15);
      },
      autoplay: false,
      duration: 1200
    });

    startLittleCircleTween.play();
    startBigCircleTween.play();
  });

  link.addEventListener(`mouseleave`, function (evt) {
    anime.remove(littleCircle);
    anime.remove(bigCircle);

    const finishtLittleCircleTween = anime({
      targets: littleCircle,
      // translateX: [20, -1],
      translateX() {
        return `-=${anime.random(20)}`;
      },
      scale: [1, 1],
      opacity: [1, 0],
      autoplay: false,
      duration: 1000,
    });

    const finishBigCircleTween = anime({
      targets: bigCircle,
      opacity: [1, 0],
      translateY() {
        return `*=${anime.random(0.2, 1)}`;
      },
      scale() {
        return `*=${anime.random(0.2, 0.4)}`;
      },
      translateX() {
        return `*=${anime.random(0.2, 1)}`;
      },
      delay() {
        return anime.random(50, 100);
      },
      autoplay: false,
      duration: 1200,
    });

    finishtLittleCircleTween.play();
    finishBigCircleTween.play();
  });
});
