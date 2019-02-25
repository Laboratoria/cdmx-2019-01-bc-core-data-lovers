window.data = {
  //Función que filtra por indicador 
  filter: (indicators, selectVal) => {
    let objS = {};
    //Itera los objetos de indicators, para encontrar el que tenga el .name que coincida con el valor del indicador elegido con el input select
    for (let i = 0; i < indicators.length; i++) {
      if (selectVal === indicators[i].name) {
        //Devuelve el objeto que coincide con el .name
        objS = indicators[i];
      }
    }
    return objS;
  },
  //Función que ordena
  sort: (sortingObject, sortingValue) => {
    let sorted;
    if (sortingValue === "upward") {
      //Devuelve un array con los valores ordenados de forma ascendente
      sorted = sortingObject.sort();
      return sorted;
    } else {
      //Devuelve un array con los valores ordenados de forma descendente
      sorted = sortingObject.reverse();
      return sorted;
    }
  },
//Función que promedia
  average: (values) => {
    //.reduce suma los elementos de un array de forma acumulativa para reducirlos a un solo valor 
    let sum = values.reduce((previous, current) => current += previous);
    //Esta es la ecuación del promedio: suma de los valores/número de observaciones
    let averageResult = sum / values.length;
    return averageResult;
  }
}
