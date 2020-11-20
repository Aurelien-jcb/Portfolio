today = new Date()
if (today.getHours() >= 0 && today.getHours() < 18) /* A noter que si on mettait <= Bonjour continuerait jusqu'à 18h59 et qu'ici il s'arrête à 18h */ {
    document.getElementById('bonjour').innerHTML = 'Bonjour';
} else {
    document.getElementById('bonjour').innerHTML = 'Bonsoir';
}