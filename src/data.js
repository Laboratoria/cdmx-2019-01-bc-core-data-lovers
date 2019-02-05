const baseDatos =  WORLDBANK;
 
 function filtroPais(select)
  { 
    let enviaIndicador;
    let indicadorFiltro;
     if (select === "MEX")
     {
       const pais =  baseDatos.MEX.indicators;
       const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "MEX" que tiene el elmento indicatorName : Poblacion Total de mujeres
      return element.indicatorName === "Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)";
      })
    console.log(nomIndicador); 
    indicadorFiltro=nomIndicador;
    
    console.log(indicadorFiltro); 
    indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
    })   
  //return enviaIndicador;
    } 
     else if (select==="PER")
     {
      const pais =  baseDatos.PER.indicators;
      const nomIndicador = pais.filter(element=>{ ////Funcion filtro selecciona el objeto del pais "PER" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
     indicadorFiltro=nomIndicador;
     console.log(indicadorFiltro); 
      indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
    }) 
    } 
     else if (select==="BRA")
    {
      const pais =  baseDatos.BRA.indicators;
      const nomIndicador = pais.filter(element=>{ ////Funcion filtro selecciona el objeto del pais "BRA" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
      indicadorFiltro=nomIndicador;
      console.log(indicadorFiltro); 
      indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
    }) 
    } 

    else if (select==="CHL")
    {
      const pais =  baseDatos.CHL.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "CHL" que tiene el elmento indicatorName : Poblacion Total de mujeres
     return element.indicatorName === "Población, mujeres (% del total)";
     })
     indicadorFiltro=nomIndicador;
     console.log(indicadorFiltro); 
      indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
    }) 
    }

  
  return enviaIndicador;
}
window.filtroPais = filtroPais;