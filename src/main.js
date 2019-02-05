const pokemones = document.getElementById('pokemones');

const printPokemon = (nombre, imagen) => {
  let nombrePokemon = `<div class="divPokemon"><img src="${imagen}"><br>${nombre}</div>`;
  pokemones.insertAdjacentHTML("beforeend", nombrePokemon);
};

const allData = window.showAllData();
const dataByType = window.filterByType('Fire');

const showList = (pokemonList) => {
  pokemonList.forEach(element => {
    let name = element.name;
    let image = element.img;
    printPokemon(name, image);
  });
};

showList(allData); // En esta le paso allData para mostrar toda la info o dataByType para mostrar la info filtrada


//MENU
let menu = document.querySelector('#menu');
let drawer = document.querySelector('nav');
let outMenu = document.querySelector('nav');

menu.addEventListener('click', () => {
  //Despliega menú
  drawer.classList.toggle('open');
  //Permite scroll
  document.getElementsByTagName("html")[0].style.overflow = "auto";
  /*noscroll
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  e.stopPropagation();*/
});

outMenu.addEventListener('click', () => {
  //Cierra menú al seleccionar una opción
  drawer.classList.remove('open');
});



