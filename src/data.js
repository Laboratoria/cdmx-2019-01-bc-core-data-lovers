window.data = {
  filterData: (dataPokemon, filterBy) => {
    const result = dataPokemon.filter(element => element.type.includes(filterBy));
    return result;
  },

  sortData: (dataPokemon, sortOrder) => {
    if (sortOrder == "ascendente") {
      return dataPokemon.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (sortOrder == "descendente") {
      return dataPokemon.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  },
 
  /* computeStats: (a,b) => {
    a+b == 20;
  } */

};
