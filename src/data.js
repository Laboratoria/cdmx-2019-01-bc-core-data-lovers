window.allPokemon = {

  dataFiltered: (data, types) => {
    const arrayPokemon = data;
    const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
    return arrayFilter;

  },

  orderData: (arrayOfType) => {
    arrayOfType.sort((a, b) => a.name > b.name ? 1 : -1);
    return arrayOfType;
  }
}
