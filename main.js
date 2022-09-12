var heroBtn = document.querySelector('.hero-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');


heroBtn.addEventListener('click', function (){
  modalBg.classList.add('modal-bg-active');
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('modal-bg-active');
});
