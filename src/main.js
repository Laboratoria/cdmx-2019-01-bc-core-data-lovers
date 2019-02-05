const pokemones = document.getElementById('pokemones');

const printPokemon = (nombre, imagen) => {
  let nombrePokemon = `<div class="divPokemon"><img src="${imagen}"><br>${nombre}</div>`;
  pokemones.insertAdjacentHTML("beforeend", nombrePokemon);
};

const allData = window.showAllData();
const dataByType = window.filterByType('Poison');
//console.log(dataByType);
const showList = (pokemonList) => {
  pokemonList.forEach(element => {
    let name = element.name;
    let image = element.img;
    printPokemon(name, image);
  });
};

//esta parte obtiene la ubicacion de la pagina y dependiendo de ésta ejecuta las funciones
let ubication = location.href;
console.log(ubication);
if (ubication.includes('index.html')) {

}
else if (ubication.includes('typePokemon.html')) {
 // En esta le paso allData para mostrar toda la info o dataByType para mostrar la info filtrada
  showList(allData);
}
console.log(ubication);


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
