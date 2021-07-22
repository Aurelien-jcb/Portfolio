'use strict';

function updateHello() {
    const today = new Date();
    const hello = document.getElementById('bonjour');
    if (today.getHours() >= 8 && today.getHours() < 18) {
        hello.innerHTML = 'Bonjour';
    } else {
        hello.innerHTML = 'Bonsoir';
    }
}
updateHello();

const menuToggle = document.querySelector('.toggle');
const sideMenu = document.querySelector('.menu__container');
const navLink = document.querySelectorAll('.menu__item');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('opened');
    sideMenu.classList.toggle('openedMenu');
})

navLink.forEach(function (elem) {
    elem.addEventListener("click", function () {
        menuToggle.classList.remove('opened');
        sideMenu.classList.remove('openedMenu');
    });
});