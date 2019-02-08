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
  filterCountry: (ciudadesMex, listQuestion) =>{
  let country = listQuestion.dataset.ciudad;
  let countrySelect = listQuestion.value;
    let result = {};
    if(country == 'ciudadesMex' ){
      ciudadesMex.forEach(ciudad =>{
        if(ciudad.indicatorCode == countrySelect){
          // console.log(ciudad.data);
          result = ciudad.data
        }
      });
    }
    return result
      }
      
}





window.prueba ={
  myfuncion: (a , b)=>{
   
    let c = a + b;
    return 1 , 2
  }
}

