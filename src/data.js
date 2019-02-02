// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
const baseDatos =  WORLDBANK;
 
 function filtroPais(select)
  { 
    let enviaIndicador;
    if (select === "MEX")
    {
      const pais =  baseDatos.MEX.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro por Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
      })
      console.log(nomIndicador); 

      nomIndicador.forEach(element => { //recorre elemento del filtro de la funcion anterior
      let datosIndicador = element.data;
      console.log(datosIndicador); 
      enviaIndicador= datosIndicador; 
      })   
    } else if (select==="PER")
    {
      const pais =  baseDatos.PER.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro por Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
      })
      console.log(nomIndicador); 
      nomIndicador.forEach(element => { //recorre elemento del filtro de la funcion anterior
        let datosIndicador = element.data;
        console.log(datosIndicador); 
        enviaIndicador= datosIndicador; 
        })   
    } else if (select==="BRA")
    {
      const pais =  baseDatos.BRA.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro por Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
      })
      console.log(nomIndicador); 
      nomIndicador.forEach(element => { //recorre elemento del filtro de la funcion anterior
        let datosIndicador = element.data;
        console.log(datosIndicador); 
        enviaIndicador= datosIndicador; 
        })   
    }  else if (select==="CHL")
    {
      const pais =  baseDatos.CHL.indicators;
      const nomIndicador = pais.filter(element=>{ //Funcion filtro por Poblacion Total de mujeres
      return element.indicatorName === "Población, mujeres (% del total)";
      })
      console.log(nomIndicador); 
      nomIndicador.forEach(element => { //recorre elemento del filtro de la funcion anterior
        let datosIndicador = element.data;
        console.log(datosIndicador); 
        enviaIndicador= datosIndicador; 
        })   
    }
    return enviaIndicador;
  }


