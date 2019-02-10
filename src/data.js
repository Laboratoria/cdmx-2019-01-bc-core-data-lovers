  // esta es una función de ejemplo
  // puedes ver como agregamos la función a nuestro objeto global window


  // window.data = {
  //
  //
  // }

  window.data = {
    filterData: (pokemon, optionFilter) => {
      // Filtrar el tipo de pokemon mediante dos parámetros
      // Uno es el array "pokemon" y el otro parámetro es un evento que
      // me regresa el tipo
      // Capturar el primer parámetro (el array Pokemon)
      const arrayPokemons = pokemon
      // Capturar el evento el cual este debe retornar el tipo
      // Filtrar el tipo de Pokemon dentro del arreglo arrayPokemons(original)
      // y obtener un arreglo nuevo filtrado arrayFilteredPokemons
      const arrayFilteredPokemons = arrayPokemons.filter(pokemon => pokemon.type.includes(optionFilter))
      return arrayFilteredPokemons
    }

    /*sortData: (data, sortBy, sortOrder) =>{

      const dataPokemon = pokemon;
      const sortBy = pokemon.name;

    }*/
  }
