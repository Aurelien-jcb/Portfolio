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
