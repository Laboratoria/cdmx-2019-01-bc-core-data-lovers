window.data = {
  filterData: (pokemon, optionFilter) => {
    const arrayFilteredPokemons = pokemon.filter(pokemon => pokemon.type.includes(optionFilter))
    return arrayFilteredPokemons
  },

  filterInput: (pokemon, letter) => {

    const search = pokemon.filter(pokemon => (pokemon.name.toLowerCase().match(letter.toLowerCase()) || pokemon.num.match(letter)));
    return search;

  },

  sortData: (pokemon) => {
    const sortByName = pokemon.sort((sortOrderA, sortOrderZ) => (sortOrderA.name < sortOrderZ.name) ? -1 : 1);
    return sortByName;
  },

  computeStats: (pokemon) => {
    ///cantidad en que aparece spawnchange
    const avgSpawns=[];

    pokemon.forEach((element) => {
      if (element.avg_spawns > 0 ) {
        avgSpawns.push(element.avg_spawns)
      }
    });

    const suma = avgSpawns.reduce((prev, next) => prev + next);
    let prom = suma / avgSpawns.length;
    let biggest = avgSpawns.reduce((back, end) => {
    if (back > end) {
      end = back;
    }
    return end;
  });

  const returnProm = prom.toString();
  const returnSum = biggest.toString();
  const returnAll = returnProm + returnSum

    return returnAll


  }

};
