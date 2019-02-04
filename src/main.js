
const pokemones = document.getElementById('pokemones');

const printPokemon = (nombre, imagen) => {
  let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}</div>`;
  pokemones.insertAdjacentHTML("beforeend",nombrePokemon);
};

const allData = showAllData();
const dataByType = filterByType('Fire');

const showList = (pokemonList) => {
  pokemonList.forEach(element => {
    let name = element.name;
    let image = element.img;
    printPokemon(name, image);
  });
};

showList(allData);// En esta le paso allData para mostrar toda la info o dataByType para mostrar la info filtrada
