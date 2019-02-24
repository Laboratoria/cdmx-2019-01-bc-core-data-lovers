window.data = {
  filterData: (dataPokemon, filterBy) => {
    const result = dataPokemon.filter(element => element.type.includes(filterBy));
    return result;
  },

  sortData: (dataFilter, sortOrder) => {
    if (sortOrder == "ascendente") {
      return dataFilter.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else /* if (sortOrder == "descendente")  */ {
      return dataFilter.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  },

  computeStats: (array) => {
    const result = array.reduce((previuosVal, actualVal) => {
      return previuosVal + actualVal;
    });
    const average = (result / array.length).toFixed(2);
    return average;
  }
};
