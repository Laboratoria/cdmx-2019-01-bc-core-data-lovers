// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// window.WorldBank = {
//     filterData: (arrayData, stringYear) =>{

//       const dataFiltered = arrayData.filter((element) =>{
//         return element.year === stringYear;
//       })
//       return dataFiltered
//     }

//   }
window.WorldBank = {
  filterCountry: (data, country, countrySelect) => { // data dataset indicatorcode
    //let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
    // console.log(country)
    let chooseCoutry = data[country].indicators // entrams a la data de cada pais y los indicadores
    //et countrySelect = listQuestion.value; //obtenemos el idicator code que tiene de la pregunta
    let result = {}; //declaramos una variable vacia  para que aqui almacene el resultado
    // if(country === 'ciudadesMex'){ // comparamos la data-ciudad que sea igual a la que seleccionamos
    chooseCoutry.forEach(ciudad => { //  seleccionamos la idicadores de mexico 
      if (ciudad.indicatorCode == countrySelect) { //si  los codigo son iguales
        //console.log(ciudad.data )
        result = ciudad.data //retornamos la data años y numeros 
      }
    });
    return result //retorna a la variable vacia que declaramos al inicio
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
  getMathMedia: (resultado) => {
    let suma = 0;//suma = suma + element
    let count = 0;//contador  que intera para contar los que si tengan 
    //  porcentajes =  parseFloat(porcentajes)
    for (const key in resultado) {
      if (resultado.hasOwnProperty(key)) { //key : valor, propety:"2000"
        const element = resultado[key];
        if (typeof element === 'number') {
          suma += element 
          count++
        }
      }
    }
  const avg = suma/count
  //console.log(avg)
  return avg;
  },
}