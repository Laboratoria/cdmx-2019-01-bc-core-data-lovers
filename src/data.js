// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};
window.example = example;*/

window.pokemonFunction = {
  
  sortByName: (arrayPokemonData) =>{
    const pokemonSortedData= arrayPokemonData.sort((a,b) => {
      if (a.name > b.name){
        
        return 1;
      }else {
        return -1;
      }
    })
    return pokemonSortedData
  },
  sortFunction: (arrayPokemonData,property) => {
    const pokemonSortedData = arrayPokemonData.sort((a, b) => {
      if ((parseFloat(a[property])) > (parseFloat(b[property]))) {
        return 1;
      }
      else {
        return -1;
      } 
    })
    return pokemonSortedData;
  },

  sortByDescending: (arrayPokemonData,property) => {
    const pokemonSortedData = arrayPokemonData.sort((a, b) => {
      if ((parseFloat(a[property])) > (parseFloat(b[property]))) {
        return -1;
      }else{
        return 1;
      }
    })
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
  pokemonFilterType: (arrayPokemonData, string_pokemon) => {
    const pokemonfilter = arrayPokemonData.filter(pokemon => pokemon.type.includes(string_pokemon));
    return pokemonfilter;
  },


  averageHeight: (arrayPokemonData,numberOfPokemon) => {

    const pokemonAverageHeight = arrayPokemonData.reduce((total, pokemonData) =>{
      return total += parseFloat(pokemonData.height)}, 0)/numberOfPokemon;
      return pokemonAverageHeight;
},























  averageWeight: (arrayPokemonData,numberOfPokemon) => {

    const pokemonAverageWeight = arrayPokemonData.reduce((total, pokemonData) =>{
     return total += parseFloat(pokemonData.weight)}, 0)/numberOfPokemon;
    return pokemonAverageWeight;
  
  
}
}