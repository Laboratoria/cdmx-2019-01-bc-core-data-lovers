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


// window.WorldBank   ={
//   filterCountry: (countryMex, listQuestion) =>{
//   let country = listQuestion.dataset.ciudad;
//   let countrySelect = listQuestion.value;
//     let result = {};
//     if(country == 'ciudadesMex' ){
//       countryMex.forEach(ciudad =>{
//         if(ciudad.indicatorCode == countrySelect){
//           result = ciudad.data
//         }
//       });
//     }

//     return result
//       }
      
// }



window.WorldBank   ={
  filterCountry: (countryMex,listQuestion) =>{
  let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
  let countrySelect = listQuestion.value; //obtenemos el valor que tiene de la pregunta
    let result = {}; //declaramos una variable vacia  para que aqui almacene el resultado
    if(country === 'ciudadesMex'){ // comparamos la data-ciudad que sea igual a la que seleccionamos
      countryMex.forEach(ciudad =>{ //  seleccionamos la idicadores de mexico 
        if(ciudad.indicatorCode == countrySelect){ //si el codigo y el select son iguales
          result = ciudad.data //retornamos la data años y numeros
          
        }
      });
    }else if(country == 'ciudadesPeru'){
      countryPer.forEach(ciudad =>{
        if(ciudad.indicatorCode == countrySelect){
          result = ciudad.data
          //console.log(result)
        }
      });  
    }else if(country == 'ciudadesBrasil' ){
      countryBra.forEach(ciudad =>{
        if(ciudad.indicatorCode == countrySelect){
          result = ciudad.data
        }
      }); 
    }
    else if(country == 'ciudadesChile' ){
      countryChl.forEach(ciudad =>{
        if(ciudad.indicatorCode == countrySelect){
          result = ciudad.data
        }
      });
    }

    return result //retorna a la variable vacia que declaramos al inicio
  }
      
}

