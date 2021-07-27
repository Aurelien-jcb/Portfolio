'use strict';

/**
 * Custom console log
 */
console.log("\n %c Designed By Aurélien Jacob \n\n","color: #fff; background: #F29100; padding:10px 0;border-radius: 5px");

/**
 * Udate welcome message if it's morning or evening
 */
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

/**
 * Menu section
 */
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