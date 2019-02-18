//En este archivo esperamos que implementes las funciones detalladas en la sección de Pruebas Unitarias.
window.data = {
  //Función que filtra por indicador 
  filter: (indicators, selectVal) => {
    let objS = {};
    for (let i = 0; i < indicators.length; i++) {
      if (selectVal === indicators[i].name) {
        objS = indicators[i];
      }
    }
    return objS;
  },
  //Función que ordena
  sort: (sortingObject, sortingValue) => {
    let sorted;
    if (sortingValue === "upward") {
      sorted = sortingObject.sort();
      return sorted;
    } else {
      sorted = sortingObject.reverse();
      return sorted;
    }
  },
//Función que promedia
  average: (values) => {
    let sum = values.reduce((previous, current) => current += previous);
    let averageResult = sum / values.length;
    return averageResult;
  }
}
