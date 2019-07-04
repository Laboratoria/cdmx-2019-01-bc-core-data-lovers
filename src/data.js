// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.WorldBank = { 
  //filtro por pais
  filterCountry: (data, country, countrySelect) => { // data dataset indicatorcode
    let chooseCountry = data[country].indicators // entrams a la data de cada pais y los indicadores
    let resultFilter = {}; //declaramos una variable vacia  para que aqui almacene el resultado
    chooseCountry.forEach(ciudad => { //  seleccionamos la idicadores de mexico 
      if (ciudad.indicatorCode == countrySelect) { //si  los codigo son iguales
        resultFilter = ciudad.data //retornamos la data años y numeros 
      }
    });
    return resultFilter //retorna a la variable vacia que declaramos al inicio
  },
  //  data, case: values, order numbers en mayor, menor, asc, desc
  orderData: (data, sortBy, sortOrder) => {
    let orderDataYear = {}; // empty array
    let unorderDataYear = data; // object data
    switch (sortBy) {
      case "years": {
        //console.log("order by years");
        if (sortOrder === 'asc') {
          // menor a mayor devuelve un array de las propiedades names de un objeto, en el mismo orden 
          orderDataYear = Object.keys(unorderDataYear).sort((a, b) => a - b)
          //orderDataYear = Object.keys(unorderDataYear).sort((a,b ) => (a > b)? 1 : -1)
        } else if (sortOrder === 'desc') {
          orderDataYear = Object.keys(unorderDataYear).sort((a, b) => b - a)
        }
        return orderDataYear;
      }
      case "values": {
        //console.log("order by values");
        if (sortOrder === 'asc') {  // menor a mayor
          orderDataYear = Object.keys(unorderDataYear).sort((a, b) => unorderDataYear[a] - unorderDataYear[b])
        }
        else if (sortOrder === 'desc') {
          //console.log("desc");// mayor a menor
          orderDataYear = Object.keys(unorderDataYear).sort((a, b) => unorderDataYear[b] - unorderDataYear[a])
        }
        //console.log(orderDataYear);
        return orderDataYear;
      }
    }
  },
  // funcion que saque la media de los porcentajes
  getMathMedia: (result) => {
    let sum = 0;//sum = sum + element
    let count = 0;//contador  que intera para contar los que si tengan 
    //  porcentajes =  parseFloat(porcentajes)
    for (const key in result) {
      if (result.hasOwnProperty(key)) { //key : valor, propety:"2000"
        const element = result[key];
        if (typeof element === 'number') {
          sum += element 
          count++
        }
      }
    }
  const avg = sum/count
  //console.log(avg)
  return avg;
  },
}