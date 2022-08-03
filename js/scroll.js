document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

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

  window.addEventListener('scroll', () => {
    headerFixed();
  });
});
