window.data = {
  //Función de Filtrado, recibe Data y condición por la que se va a filtrar, tipo de pokémon
  filterPokemon: (dataPokemon, types) => {

    const arrayFilter = dataPokemon.filter(dataPokemon => dataPokemon.type.includes(types));

    return arrayFilter;

  },

  //Función de Ordenado, recibe la Data el parametro por el que se va a Ordenar: altura o peso, y si será ascendente o Descendente
  sortDataPokemon: (data, sortBy, sortOrder) => {

    if (sortBy == "weight" && sortOrder == "asc") {
      return data.sort((a, b) => (parseFloat(a.weight) - parseFloat(b.weight)));
    } else if (sortBy == "weight" && sortOrder == "dsc") {
      return data.sort((a, b) => (parseFloat(b.weight) - parseFloat(a.weight)));
    } else if (sortBy == "height" && sortOrder == "asc") {
      return data.sort((a, b) => (parseFloat(a.height) - parseFloat(b.height)));
    } else if (sortBy == "height" && sortOrder == "dsc") {
      return data.sort((a, b) => (parseFloat(b.height) - parseFloat(a.height)));
    } else {
      return data;
    }
  },

  //Función de Filtrado por coincidencia de Nombre, Recibe la data y la parabra 

  filterLetterPokemon: (dataPokemon, letterValue) => {

    const searConside = dataPokemon.filter(dataPokemon => (dataPokemon.name.toLowerCase().match(letterValue.toLowerCase())));
    return searConside;
  }
}
