// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*window.data = { //enlazando el js
countryFilter: (dataWorldbank, countries)=>{ //se utilizan dos puntos por ser un objeto
  const dataWorldbank= WORLDBANK;

  const dataWorldbank = dataWorldbank;
  console.log(dataWorldbank);
}
}*/

/*window.dataBase = {
  dataFunction: (data) => {
    let mayus = data.MEX.indicators;
    console.log(mayus)
    let pal = '';
    for(let i = 0; i< mayus.length; i++){
      pal += mayus[i].toUpperCase()
    }
    return pal
  }
};*/



/*window.dataBase={
  dataFunction: (arrayWorldbank) =>{
    let dataMex =arrayWorldbank.MEX.indicators;
    let dataBra =arrayWorldbank.BRA.indicators;
    let dataChl =arrayWorldbank.CHL.indicators;
    let dataPer =arrayWorldbank.PER.indicators;
  console.log(dataBra)
    dataWorld.forEach(element => {
      let year= element.data;
      let indicatorName=element.indicatorName;
      console.log(dataWorld)
    })
    for (data in year){
      console.log(dataBase)
    }


   }
}*/
/*
window.dataBase = {
  dataFunction : (WORLDBANK) => {
     const databaseMex = WORLDBANK.MEX.indicators; //Indicadores de México
     //console.log(databaseMex)
     let newArray = ""; // Espacio que recupera los datos
 
     //extrae año-datos y nombre de indicador
   let newArrayMexIndicator = databaseMex.map (function (indicator) {
    let indicatorName = indicator.indicatorName;
    //console.log(indicatorName)
      //let data = indicator.data;
   // pal += (`${indicatorName} + ${({data})}`);
    newArray += indicatorName;
 })
 return newArray
 }};*/


 const baseDatos =  WORLDBANK;
 
 function filtroPais(select)
  { 
    let enviaIndicador;
    let indicadorFiltro;
     if (select === "MEX")
     {
       const pais =  baseDatos.MEX.indicators;
       const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "MEX" que tiene el elmento indicatorName : Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
      })
    console.log(nomIndicador); 
    indicadorFiltro=nomIndicador;
    } 
     else if (select==="PER")
     {
      const pais =  baseDatos.PER.indicators;
      const nomIndicador = pais.filter(element=>{ ////Funcion filtro selecciona el objeto del pais "PER" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
     indicadorFiltro=nomIndicador;
    } 
     else if (select==="BRA")
    {
      const pais =  baseDatos.BRA.indicators;
      const nomIndicador = pais.filter(element=>{ ////Funcion filtro selecciona el objeto del pais "BRA" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
      indicadorFiltro=nomIndicador;
    } 

    else if (select==="CHL")
    {
      const pais =  baseDatos.CHL.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "CHL" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
     indicadorFiltro=nomIndicador;
    }

    console.log(indicadorFiltro); 
    indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
    })   
  return enviaIndicador;
}
window.filtroPais = filtroPais;