<<<<<<< HEAD
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
=======

    window.data = {
      filterData: (pokemon, optionFilter) => {
        // Filtrar el tipo de pokemon mediante dos parámetros
        // Uno es el array "pokemon" y el otro parámetro es un evento que
        // me regresa el tipo
        // Capturar el primer parámetro (el array Pokemon)
        // Capturar el evento el cual este debe retornar el tipo
        // Filtrar el tipo de Pokemon dentro del arreglo arrayPokemons(original)
        // y obtener un arreglo nuevo filtrado arrayFilteredPokemons
          const arrayFilteredPokemons = pokemon.filter(pokemon => pokemon.type.includes(optionFilter))
        return arrayFilteredPokemons
      },

      filterInput: (pokemon, letter)=> {

     const  search = pokemon.filter(pokemon => (pokemon.name.toLowerCase().match(letter.toLowerCase() ) || pokemon.num.match(letter)));
     return search;

   },

        sortData: (pokemon) =>{
        // Una función que me permita ordenar la data
        // La data debe ser ordenada mediante el key "name"
        // Este se debe ordenar de la A-Z
        const sortByName = pokemon.sort( (sortOrderA, sortOrderZ) => (sortOrderA.name < sortOrderZ.name) ? -1 : 1);
        return sortByName;
      },

      computeStats: (pokemon) => {
        ///cantidad en que aparece spawnchange
        let avgSpawns = [];
        pokemon.forEach((element) => {
          if(element.avg_spawns > 0){
            avgSpawns.push(element.avg_spawns)
          }
        });

      const suma = avgSpawns.reduce((prev, next) => prev + next);
      const prom = suma / avgSpawns.length;
      return prom

      }

    }
>>>>>>> 32a7b3049364b6fa129fc9a06793e25c4ebeb985
