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

window.WorldBank   ={
  filterCountry: (data,listQuestion) =>{
    let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
    let paisElegido = data[country].indicators
  let countrySelect = listQuestion.value; //obtenemos el valor que tiene de la pregunta
    let result = {}; //declaramos una variable vacia  para que aqui almacene el resultado
    // if(country === 'ciudadesMex'){ // comparamos la data-ciudad que sea igual a la que seleccionamos
      paisElegido.forEach(ciudad =>{ //  seleccionamos la idicadores de mexico 
        if(ciudad.indicatorCode == countrySelect){ //si el codigo y el select son iguales
          result = ciudad.data //retornamos la data años y numeros 
        }
      });
    // }
    // }else if(country == 'ciudadesPeru'){
    //   countryPer.forEach(ciudad =>{
    //     if(ciudad.indicatorCode == countrySelect){
    //       result = ciudad.data
    //       //console.log(result)
    //     }
    //   });  
    // }else if(country == 'ciudadesBrasil' ){
    //   countryBra.forEach(ciudad =>{
    //     if(ciudad.indicatorCode == countrySelect){
    //       result = ciudad.data
    //     }
    //   }); 
    // }
    // else if(country == 'ciudadesChile' ){
    //   countryChl.forEach(ciudad =>{
    //     if(ciudad.indicatorCode == countrySelect){
    //       result = ciudad.data
    //     }
    //   });
    // }
    console.log(result)
    return result //retorna a la variable vacia que declaramos al inicio
  } ,


  orderData: (data, sortBy, sortOrder) => {
  let orderData= [];
  switch(sortBy){
    case'years':
      if(sortOrder === 'mayor'){
        orderData = data.sort((a,b ) => (a.years > b.years)? 1 : -1);
        console.log (orderData);
      }
      else if(sortOrder === 'menor'){
        orderData = data.sort((a,b)=>(a.years > b.years)? -1 : 1);
      }
      break;
      case'numbers':
      if(sortOrder === 'asc'){
        orderData = data.sort((a,b ) => (a.num > b.num)? 1 : -1);
      }
      else if(sortOrder === 'desc'){
        orderData = data.sort((a,b)=>(a.num> b.num)? -1 : 1);
      }
      break;
  }
  return orderData;
},
}
  
// sort 
var pokemons = [
  { name:'pickachu', level: 50 } , 
  { name:'bulbasour', level: 10 } , 
  { name:'snorlax', level: 1 } , 
  { name:'mew', level: 2 } , 
  { name:'abra', level: 150 } 
];
const countryM = WORLDBANK.MEX.indicators;
// var numbers = [2, 34, 10, 2, 5, 1];
// console.log(countryM.sort(function (prev, next) {
//   if (prev.name > next.name) {
//     return 1;
//   }
//   if (prev.name < next.name) {
//     return -1;
//   }
//   return 0;
// //  return prev.level - next.level;
// }));

var WORLDBANK = {
  "PER": {
    "indicators": [
      {
        "data": {
         
          "2001": "",
          "2002": 31.4799995422363,
          "2003": 29.6299991607666,
          "2004": 27.6299991607666,
          "2005": 27.2099990844727,
          "2006": 26.9699993133545,
        },
        "countryName": "Perú",
        "countryCode": "PER",
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        "indicatorCode": "SL.TLF.PART.FE.ZS"
      }]
  }
}