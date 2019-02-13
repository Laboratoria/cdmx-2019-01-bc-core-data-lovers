

window.WorldBank = {
  dataCountries: (data, countries) => {
  let dataByCountries = data[countries].indicators
  return dataByCountries;
  },
  percentAndYear:(data, matchYear) =>{
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




