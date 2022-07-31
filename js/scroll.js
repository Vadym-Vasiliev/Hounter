document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const heroLeftBlock = document.querySelectorAll('.hero-leftblock');
  const heroRightBlock = document.querySelectorAll('.hero-rightblock');
  const recommendGoldText = document.querySelectorAll('.recommen__text');
  const recommendTitle = document.querySelectorAll('.recommen__title');
  const recommendRadioButtons = document.querySelectorAll('.recommen-list');
  const recommendButtons = document.querySelectorAll('.recommen-list-btn');
  const recommendItems = document.querySelectorAll('.recommen-card__item');

  const scrollRecommendItems = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    recommendItems.forEach(el => {
      let scrollOffset = el.offsetTop / 2 + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('recommen-card__item--animation');
      } else {
        el.classList.remove('recommen-card__item--animation');
      }
    });
  };

  const scrollRecommendButtons = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    recommendButtons.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('recommen-list-btn__animation');
      } else {
        el.classList.remove('recommen-list-btn__animation');
      }
    });
  };

  const scrollRecommedRadioBtnsAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    recommendRadioButtons.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('recommen-list__animation');
      } else {
        el.classList.remove('recommen-list__animation');
      }
    });
  };

  const scrollRecommendTitleAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    recommendTitle.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('recommen__title--animation');
      } else {
        el.classList.remove('recommen__title--animation');
      }
    });
  };

  const scrollRecommendGoldTextAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    recommendGoldText.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('recommen__text--animation');
      } else {
        el.classList.remove('recommen__text--animation');
      }
    });
  };

  const scrollHeroRightAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    heroRightBlock.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('hero-rightblock__animation');
      } else {
        el.classList.remove('hero-rightblock__animation');
      }
    });
  };

  const scrollHeroLeftAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY;
    heroLeftBlock.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 2;
      if (windowCenter >= scrollOffset) {
        el.classList.add('hero-leftblock__animation');
      } else {
        el.classList.remove('hero-leftblock__animation');
      }
    });
  };

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;

    if (scrollTop >= heroCenter) {
      header.classList.add('header__fixed');
      hero.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('header__fixed');
      hero.style.marginTop = `0px`;
    }
  };

  headerFixed();
  scrollHeroLeftAnimation();
  scrollHeroRightAnimation();
  scrollRecommendGoldTextAnimation();
  scrollRecommendTitleAnimation();
  scrollRecommedRadioBtnsAnimation();
  scrollRecommendButtons();
  scrollRecommendItems();
  window.addEventListener('scroll', () => {
    headerFixed();
    scrollHeroLeftAnimation();
    scrollHeroRightAnimation();
    scrollRecommendGoldTextAnimation();
    scrollRecommendTitleAnimation();
    scrollRecommedRadioBtnsAnimation();
    scrollRecommendButtons();
    scrollRecommendItems();
  });
});
