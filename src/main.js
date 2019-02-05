
//const POKEMON = POKEMON;
const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;

const imprimir = (nombre, imagen) => {
  let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}</div>`;
  pokemones.insertAdjacentHTML("beforeend",nombrePokemon);
};

dataPokemon.forEach(elemento => {
  let nombre = elemento.name;
  let imagen = elemento.img;
  imprimir(nombre, imagen);

});

const dataByType = filterByType('Normal');
console.log(dataByType);





//MENU
let menu = document.querySelector('#menu');
    let drawer = document.querySelector('nav');
    
    menu.addEventListener('click', (e) => {
        //Despliega menú
        drawer.classList.toggle('open');
        //noscroll
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        e.stopPropagation();
    });
    