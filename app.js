today = new Date()
if (today.getHours() >= 0 && today.getHours() < 18)
{
    document.getElementById('bonjour').innerHTML = 'Bonjour';
} 
else 
{
    document.getElementById('bonjour').innerHTML = 'Bonsoir';
}