const botonMenu = document.getElementById('menuHide') ;
const returnFilter = document.getElementById('returnFilter');
const butWatter = document.getElementById('butWatter');
const butElectric = document.getElementById('butElectric');
const butFire = document.getElementById('butFire');
const pokemon = POKEMON.pokemon;


botonMenu.addEventListener("click", showFilter);
function showFilter() {
  let menushow = document.getElementById('menushow');
  menushow.classList.toggle('mostrar');
}

//Funcion filtrado agua
const typeWatter = pokemon.filter(pokemon => pokemon.type[0] === "Water");

const imprimir = (name, imagen) => {
  let pokemonWater = `<div class="pokedex"><img src="${imagen}"> ${name}</div>`;
  returnFilter.innerHTML += pokemonWater;
};

butWatter.addEventListener("click", filterTypeWatter);
function filterTypeWatter(){
typeWatter.forEach(pokemon =>{
  let name = pokemon.name;
  let imagen = pokemon.img;
  imprimir(name,imagen);
});
}

// Terminada llamado pokemon Water

//Funcion filtro Electric
const typeElectric = pokemon.filter(pokemon => pokemon.type[0] === "Electric");

const imprimirElectric = (name, imagen) => {
  let pokemonElectric = `<div class="pokedex"><img src="${imagen}"> ${name}</div>`;
  returnFilter.innerHTML += pokemonElectric;
};

butElectric.addEventListener("click", filterTypeElectric);
function filterTypeElectric() {
  typeElectric.forEach(pokemon => {
    let name = pokemon.name;
    let imagen = pokemon.img;
    imprimirElectric(name, imagen);
  });
}
// Terminada llamado pokemon Electric

//Funcion filtro Fire
const typeFire = pokemon.filter(pokemon => pokemon.type[0] === "Fire");

const printFire = (name, imagen) => {
  let pokemonFire = `<div class="pokedex"><img src="${imagen}"> ${name}</div>`;
  returnFilter.innerHTML += pokemonFire;
}

butFire.addEventListener("click", filterTypeFire);
function filterTypeFire() {
  typeFire.forEach(pokemon => {
    let name = pokemon.name;
    let imagen = pokemon.img;
    printFire(name, imagen);
  })
}
