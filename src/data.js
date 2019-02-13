// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};
window.example = example;*/

window.printPokemon = {
  sortByHeight: (arrayPokemonData) => {
    const pokemonSortedData = arrayPokemonData.sort((a, b) => {
      if (a.height > b.height) {
        return 1;
      }
      if (a.height < b.height) {
        return -1;
      } else {
        return 0;
      }
    })
    return pokemonSortedData;
  },
  SortByWeight: (arrayPokemonData) => {
    const pokemonSortedData = arrayPokemonData.sort((a, b) => {
      if ((parseFloat(a.weight)) > (parseFloat(b.weight))) {
        return 1;
      }
      if ((parseFloat(a.weight)) < (parseFloat( b.weight))) {
        return -1;
      } else {
        return 0;
      }
    });
    return pokemonSortedData;
  },
  filterByWeightLight: (arrayPokemonData) => {
    const pokemonFilteredLight = arrayPokemonData.filter(pokemon => parseInt(pokemon.weight) < 30);
    return pokemonFilteredLight;
  },
  filterByWeightHeavy: (arrayPokemonData) => {
    const pokemonFilteredHeavy = arrayPokemonData.filter(pokemon => parseInt(pokemon.weight) > 30);
    return pokemonFilteredHeavy;
  },
  filterByHeightSmall: (arrayPokemonData) => {
    const pokemonFilteredSmall = arrayPokemonData.filter(pokemon => parseInt(pokemon.height) < 1.00);
    return pokemonFilteredSmall;
  },

  filterByHeightMedium: (arrayPokemonData) => {
    const pokemonFilteredMedium = arrayPokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.00) && (parseInt(pokemon.height) <= 1.80));
    return pokemonFilteredMedium;
  },

  filterByHeightTall: (arrayPokemonData) => {
    const pokemonFilteredTall = arrayPokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.80));
    return pokemonFilteredTall;
  },
  pokemonFilterType: (arrayPokemonData, string) => {
    const pokemonfilter = arrayPokemonData.filter(pokemon => pokemon.type.includes(string));
    return pokemonfilter;
  },


  totalHeight: (arrayPokemonData) => {

    const pokemontotalHeight = arrayPokemonData.reduce((total, pokemonData) =>{
      total += parseFloat(pokemonData.height), 0
    return pokemontotalHeight;
  });
},

  totalWeight: (arrayPokemonData) => {

    const totalWeightPokemon = arrayPokemonData.reduce((total, pokemonData) =>{
      total += parseFloat(pokemonData.weight), 0
    return totalWeightPokemon;
  
  });
},
}