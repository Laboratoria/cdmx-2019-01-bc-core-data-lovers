window.data = {

  filterPokemon: (dataPokemon, types) => {

    // const arrayPokemon = dataPokemon;
    // const tipoElegido = types;

    const arrayFilter = dataPokemon.filter(dataPokemon => dataPokemon.type.includes(types));

    return arrayFilter;

  },

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

  filterLetterPokemon: (dataPokemon, letterValue) => {

    const searConside = dataPokemon.filter(dataPokemon => (dataPokemon.name.toLowerCase().match(letterValue.toLowerCase())));
    return searConside;
  }
}