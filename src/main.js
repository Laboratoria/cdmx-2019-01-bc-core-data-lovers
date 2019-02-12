//let POKEMON = POKEMON;
let dataPokemon = POKEMON.pokemon;
const pokemones = document.getElementById('pokemones');
const searchCoincidence = document.getElementById('search-coincidences');

const printPokemon = (nombre, imagen) => {
  let nombrePokemon = `<div class="divPokemon"><img src="${imagen}"><br>${nombre}</div>`;
  pokemones.insertAdjacentHTML("beforeend", nombrePokemon);
};
//const allData = window.showAllData(dataPokemon);


const showList = (pokemonList) => {
  pokemones.innerHTML="";
  pokemonList.forEach(element => {
    let name = element.name;
    let image = element.img;
    printPokemon(name, image);
  });
};

// Mike estuvo aquí
const buttonsCollection = document.getElementsByClassName("typesPokemon");
const buttonsArray = Array.from(buttonsCollection)

//console.log(buttonsArray)

// Función que genere el tipo de Pokemon de acuerdo al click del botón que seleccionó el usuario
const getTypePokemon = (arrayButtons) => {

      arrayButtons.map(boton => {
        boton.addEventListener("click",(event) =>{
          //console.log(event.target.name);
          //console.log(window.filterByType(event.target.name));
          // Invocar una función que pinte Pokemon
          showList(window.data.filterByType(dataPokemon,event.target.name));
        })
      })
}

getTypePokemon(buttonsArray)

// filterCoincidence obtiene las coincidencias letra por letra

const filterCoincidence = () => {
  searchCoincidence.addEventListener('keyup', () => {
    let searchValue = document.getElementById('search-coincidences').value;
    showList(window.data.filterByLetter(dataPokemon,searchValue));
  });
}

//funcion para ordenar la dataByType

//esta parte obtiene la ubicacion de la pagina y dependiendo de ésta ejecuta las funciones
let ubication = location.href;

if (ubication.includes('typePokemon.html')) {
 // En esta le paso allData para mostrar toda la info o dataByType para mostrar la info filtrada
  //showList(allData);
  filterCoincidence();
  window.data.computeStats(dataPokemon);

}else if (ubication.includes('orderPokemon.html')) {
  /*const orderNameRadio = document.getElementById('asc-name');
  orderNameRadio.addEventListener('click',()=>{
    showList(window.sortData(dataPokemon,'name','asc'));
  });*/
  const orderRadio = document.getElementsByName("order");
  const arrayRadio = Array.from(orderRadio);
  const getOrderPokemon = (optionsRadio) => {
    optionsRadio.map(radio => {
      radio.addEventListener("click",() =>{
        if(radio.checked === true){
          let idRadio = radio.id.split('-');
          showList(window.data.sortData(dataPokemon,idRadio[1],idRadio[0]));
        }
      });
    });
  }
  getOrderPokemon(arrayRadio);
}


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
