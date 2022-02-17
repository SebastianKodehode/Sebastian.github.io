// ===== Burger Menu ===== //
let burgerMenu = document.getElementById('nav-burger');
let overlay = document.getElementById('nav-list');

burgerMenu.addEventListener('click',function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

overlay.addEventListener('click', function() {
  burgerMenu.classList.remove('close')
  overlay.classList.remove('overlay')
})