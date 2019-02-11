
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/



const database = WORLDBANK;

//Función para extraer nombres de indicadores, funciona
/*window.databaseMexEducation = {
 dataFunction : (WORLDBANK) => {
    const databaseMex = WORLDBANK.MEX.indicators; //Indicadores de México
    //console.log(databaseMex)
    let pal = ""; // Espacio que recupera los datos

    //extrae año-datos y nombre de indicador
  let newArrayMexIndicator = databaseMex.map (function (indicator) {
   let indicatorName = indicator.indicatorName;
   //console.log(indicatorName)
     //let data = indicator.data;
  // pal += (`${indicatorName} + ${({data})}`);
   pal += indicatorName;
})
return pal
}};*/

//window.databaseLatam = {
  //dataFunction : (WORLDBANK) => {
    const databaseByCountry = WORLDBANK;
    console.log(databaseByCountry)
  //}
//}






//console.log(newArrayMexIndicator)

    /*let indicatorsMexElected = databaseMex.filter(function (indicator) {
      let indicadorName = newArrayMexIndicator;
      let data = indicator.data;
      let resultado = `${indicadorName} + ${data}`;
      //console.log(resultado)
     })*/
   

    //let newArrayMexIndicator = dataMex.map (indicator => //Nuevo array de datos México con data(año-datos) y nombre indicador
       // return (indicator.data))
    

  // }
 // }
 



