// Riferimenti ai vari elementi
const menuIcon = document.getElementById('menu-icon');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeBtn = document.getElementById('close-btn');

// Mostra il menù quando si clicca sull'icona del menù
menuIcon.addEventListener('click', () => {
    fullscreenMenu.classList.add('open');
});

// Nasconde il menù quando si clicca sul pulsante di chiusura
closeBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('open');
});

// Riferimenti per i pulsanti di "Leggi di più"
document.getElementById('read-more-btn').addEventListener('click', function() {
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/Folders/DBAFvol1.html';
});

document.getElementById('read-more-btn-2').addEventListener('click', function() {
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/Folders/DBAFvol2.html';
});

// Correzione: aggiunta selezione corretta per menu-btn1
document.getElementById('menu-btn1').addEventListener('click', () => {
    window.location.href = 'https://google.com';
});

document.getElementById('menu-btn1').addEventListener('click', function() {
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/index.html';
});

document.getElementById('menu-btn3').addEventListener('click', function() {
    window.location.href = 'https://gabrielepepe.github.io/Enciclopedia-Saiyan/Base-html%20archive/index-base.html';
});
