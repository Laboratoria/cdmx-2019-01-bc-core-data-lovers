//esto ya esta funcionando al 100
window.data = {

  //funcion de filtrar

  filterData: (dataPokemon, types) => {
    const arrayPokemon = dataPokemon;

    const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));

    return arrayFilter;

  },
  sortData: (result, sortBy, sortOrder) => {

    if (sortOrder == 'asc') {
      return result.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    } else if (sortOrder == 'desc') {
      return result.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
    } else {
      return result;
    }

  },
  computeStats: (arreglo) => {
    const result = arreglo.reduce((prevVal, actVal) => {
      return prevVal + actVal;
    });
    const calculation = (result / arreglo.length).toFixed(2);
    return calculation;

  }
};
