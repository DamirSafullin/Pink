let button = document.querySelector('.main-nav__burger');
let menu = document.querySelector('.nav__list')
let wrapper = document.querySelector('.main-nav-wrapper')

button.addEventListener('click', function(evt) {
  menu.classList.toggle('menu-open')
  wrapper.classList.toggle('wrapper-open')
  button.classList.toggle('main-nav__burger')
  button.classList.toggle('main-nav__cross')
})
