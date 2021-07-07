window.allPokemon = {

  dataFiltered: (data, types) => {
    const arrayFilter = data.filter(data => data.type.includes(types));
    return arrayFilter;

  },

  filterByName: (data, inputValue) => {
    let searchedByName = data.filter(data => (data.name.toUpperCase().match(inputValue)));
    return (searchedByName)
  },

  orderData: (arrayOfType) => {
    arrayOfType.sort((a, b) => a.name > b.name ? 1 : - 1);
    return arrayOfType;
  },

  orderDataZtoA: (arrayOfType) => {
    arrayOfType.sort((a, b) => a.name < b.name ? 1 : - 1);
    return arrayOfType;
  }
};
