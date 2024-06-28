let navBtn = document.querySelector('.nav__btn');
let navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', () => {
 navBtn.classList.toggle('nav__btn--open'); 
  navMenu.classList.toggle('nav-menu--open');

});
