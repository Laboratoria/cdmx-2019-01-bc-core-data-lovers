
let enviaIndicador;
let orderByObject=[];


window.worldBank ={

filtroPais: (baseDatos, selectPais, indicador) =>{ 
    //let enviaIndicador;
    let indicadorFiltro;
    
    const pais =  baseDatos[selectPais].indicators;
    //console.log(pais);
    const nomIndicador = pais.filter(element=>{ //Funcion filtro selecciona el objeto del pais "MEX" que tiene el elmento indicatorName : Poblacion Total de mujeres
      return element.indicatorName === indicador;
    })
    // console.log(nomIndicador); 
    indicadorFiltro=nomIndicador;
    
    // console.log(indicadorFiltro); 
    indicadorFiltro.forEach(element => { //forEach recorre arreglo de Indicadores,obteniendo solo la data del elemnto que le pasa el filtro anterior 
     let datosIndicador = element.data;
    // console.log(datosIndicador); 
    enviaIndicador= datosIndicador; 
    })  
    return enviaIndicador;
  },

 orderByAsc: (order) =>{
  for (let i in enviaIndicador) {
    orderByObject.push([i, enviaIndicador[i]]);
  }
  if (order === "asc"){
    orderByObject.sort(function(a, b) {
      //  console.log(a[1] - b[1])
      //console.log(orderByObject)

      return a[1] - b[1];
      
    });
  }else if (order === "desc")
  {
      orderByObject.sort(function(a, b) {
        //console.log(orderByObject)
          return b[1] - a[1];
      
       });
  }
  return orderByObject;
}

/*grafica: ()=>{
  for (let i in enviaIndicador) {
    valorAnioX.push(i);
    valorPorcentajeY.push([enviaIndicador[i]]);
  }
  return valorAnioX, valorPorcentajeY;
  }*/

} //fin de window
