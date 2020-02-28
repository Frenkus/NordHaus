var menuButton = document.querySelector('.pricelist-button');
var menu = document.querySelector('.pricelist-seconds');
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('pricelist-button-active');
   menu.classList.toggle('pricelist-seconds-active');
})
