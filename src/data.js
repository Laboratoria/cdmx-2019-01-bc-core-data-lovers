window.data = {
  filterData: (pokemon, optionFilter) => {
    const arrayFilteredPokemons = pokemon.filter(pokemon => pokemon.type.includes(optionFilter))
    return arrayFilteredPokemons
  },

  filterInput: (pokemon, letter) => {

    const search = pokemon.filter(pokemon => (pokemon.name.toLowerCase().match(letter.toLowerCase())));
    return search;

  },

  sortData: (pokemon) => {
    const sortByName = pokemon.sort((sortOrderA, sortOrderZ) => (sortOrderA.name < sortOrderZ.name) ? -1 : 1);
    return sortByName;
  },

  computeStats: (pokemon) => {
    ///cantidad en que aparece spawnchange
    const candyCount = [];

    pokemon.forEach((element) => {
      if (element.candy_count > 0 ) {
        candyCount.push(element.candy_count)
      }
    });

    const suma = candyCount.reduce((prev, next) => prev + next);
    const prom = suma / candyCount.length;
    return prom
  }

};
