const baseDatos =  WORLDBANK;
 
const filtroPais = (select) =>{ 
    let enviaIndicador;
    let indicadorFiltro;
    
    const pais =  baseDatos[select].indicators;
    console.log(pais);
    const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "MEX" que tiene el elmento indicatorName : Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
    })
    console.log(nomIndicador); 
    indicadorFiltro=nomIndicador;
    
    console.log(indicadorFiltro); 
    indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
     let datosIndicador = element.data;
    console.log(datosIndicador); 
    enviaIndicador= datosIndicador; 
    })  
    return enviaIndicador;
  } 



  window.filtroPais = filtroPais;