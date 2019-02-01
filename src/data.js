// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//const example = () => {
  //return 'example';
//};

//window.example = example;
const ShowData = {

const pokemones = document.getElementById('pokemons');
const dataPokemon = POKEMON.pokemon;

const imprimir = (nombre, imagen, id) => {
   let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}${id}</div>`
   pokemones.insertAdjacentHTML("beforeend", nombrePokemon);
 };

 dataPokemon.forEach(elemento =>{
let nombre = elemento.name;
let imagen = elemento.img
let id = elemento.id
imprimir(nombre,imagen,id);

 })
}
