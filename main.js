var heroBtn = document.querySelector('.hero-btn');
var footerBtn = document.querySelector('.footer-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var mobileMenu = document.querySelector('.mobile-menu');
var headerMenu = document.querySelector('.header-menu');


heroBtn.addEventListener('click', function (){
  modalBg.classList.add('modal-bg-active');
});

footerBtn.addEventListener('click', function (){
  modalBg.classList.add('modal-bg-active');
});

modalClose.addEventListener('click', function (){
  modalBg.classList.remove('modal-bg-active');
});

mobileMenu.addEventListener('click', function (){
  if (mobileMenu.classList.contains('mobile') & headerMenu.classList.contains('open')) {
    headerMenu.classList.remove('open');
    mobileMenu.classList.remove('mobile');
    return;
  } else {
    headerMenu.classList.add('open');
    mobileMenu.classList.add('mobile');
  }
});
