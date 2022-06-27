const botao = document.getElementById("dark-mode");
const body = document.getElementsByTagName('body')[0];
const h3 = document.getElementsByTagName('h3')[0];
const footer = document.getElementsByTagName('footer')[0];
var darkModeText = 'Dark Mode ON';
var lightModeText = 'Light Mode ON';

function darkClass() {
    botao.classList.toggle('light');
    botao.classList.toggle('black');
    body.classList.toggle('body-black');
    h3.classList.toggle('h3-black');
    footer.classList.toggle('footer-black')
}

function darkText() {
    if(h3.innerText === darkModeText) {
        h3.innerText = lightModeText;
        botao.innerText = darkModeText.replace('ON', '');
    } else {
        h3.innerText = darkModeText;
        botao.innerText = lightModeText.replace('ON', '');
    }
}

function darkMode() {
    darkClass();
    darkText();
}