window.allPokemon = {

  dataFiltered: (data, types) => {

    const arrayFilter = data.filter(data => data.type.includes(types));
    return arrayFilter;

  },

  orderData: (arrayOfType) => {

    arrayOfType.sort((a, b) => a.name > b.name ? 1 : - 1);
    return arrayOfType;
  }
};
