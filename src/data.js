// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};*/

window.data = {
  filterData: (dataPokemon, filterBy) => {
    const result = dataPokemon.filter(dataPokemon.type.includes(filterBy));
    return result;
  },

  sortData: () => {

  },

  computeStats: () => {

  }

};
