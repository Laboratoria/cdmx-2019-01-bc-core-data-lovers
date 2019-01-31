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
