//Objeto global
window.WorldBank = {
  dataCountries: (data, countries) => { //Función para extraer la data por país. 
  let dataByCountries = data[countries].indicators //Obtener los objetos por país.
  return dataByCountries;
  },
  percentAndYear:(data, matchYear) =>{ // Función para 
    let newData= {}
    data.forEach(objeto => {
      if(objeto.indicatorName === matchYear){
        newData = objeto.data 
        return newData
      }
    });
    return newData
  }
};




