const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burgerMenu.addEventListener('click', toggleMobileMenu);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}