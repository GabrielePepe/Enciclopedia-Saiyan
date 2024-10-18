// Riferimenti ai vari elementi
const menuIcon = document.getElementById('menu-icon');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeBtn = document.getElementById('close-btn');

// Mostra il menù quando si clicca sull'icona del menù
menuIcon.addEventListener('click', () => {
    alert("Hai cliccato sull'icona del menu!");  // Aggiunto alert per testare
    fullscreenMenu.classList.add('open');
});

// Nasconde il menù quando si clicca sul pulsante di chiusura
closeBtn.addEventListener('click', () => {
    alert("Hai cliccato sul pulsante di chiusura del menu!");  // Aggiunto alert per testare
    fullscreenMenu.classList.remove('open');
});

// Menu navigation buttons
document.getElementById('menu-btn1').addEventListener('click', () => {
    alert("Hai cliccato su 'Home'");  // Aggiunto alert per testare
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/';
});

document.getElementById('menu-btn2').addEventListener('click', () => {
    alert("Hai cliccato su 'Chi siamo'");  // Aggiunto alert per testare
    window.location.href = '/about.html';
});

document.getElementById('menu-btn3').addEventListener('click', () => {
    alert("Hai cliccato su 'Archivio base-html'");  // Aggiunto alert per testare
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/Base-html%20archive/index-base.html';
});

document.getElementById('menu-btn4').addEventListener('click', () => {
    alert("Hai cliccato su 'Contattaci'");  // Aggiunto alert per testare
    window.location.href = '/contact.html';
});
