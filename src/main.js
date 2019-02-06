
//mostrar y ocultar pagina home page con pagina principal de la información de los cuatro países
const botonInfo = document.getElementById('botonInfo');
const botonMexico = document.getElementById('botonMexico');
const botonChile = document.getElementById('botonChile');
const botonPeru = document.getElementById('botonPeru');
const botonBrasil = document.getElementById('botonBrasil');

const root = document.getElementById('root');
const informate = document.getElementById('informate');
const pagMex = document.getElementById('pagMex');
const pagChile = document.getElementById('pagChile');
const pagPeru = document.getElementById('pagPeru');
const pagBrasil = document.getElementById('pagBrasil');



botonInfo.addEventListener('click', () => {
  root.classList.add('hideElement');
  informate.classList.remove('hideElement');
});

botonMexico.addEventListener('click', () => {
  informate.classList.add('hideElement');
  pagMex.classList.remove('hideElement');
});

botonChile.addEventListener('click', () => {
  informate.classList.add('hideElement');
  pagChile.classList.remove('hideElement');
});

botonPeru.addEventListener('click', () => {
  informate.classList.add('hideElement');
  pagPeru.classList.remove('hideElement');
});

botonBrasil.addEventListener('click', () => {
  informate.classList.add('hideElement');
  pagBrasil.classList.remove('hideElement');
})





