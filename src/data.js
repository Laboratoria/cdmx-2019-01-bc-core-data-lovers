//Traer elementos del data
const database = WORLDBANK.MEX.indicators;

//Filtrar indicadores de alfabetización.
const literacy = (select) => {
  let userIndicator;
  if (select === "adultWomen"){
      let literacyIndicator = database.filter (element => {
      return element.indicatorName === "Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)";
    })
    literacyIndicator.forEach(element => {
      let indicatorData = element.data;
      userIndicator = indicatorData;
    })
  } else if (select === "youngWomen"){
     let literacyIndicator = database.filter (element => {
     return element.indicatorName === "Tasa de alfabetización, mujeres jóvenes (% de mujeres entre 15 y 24 años)";
  })
    literacyIndicator.forEach(element => {
    let indicatorData = element.data;
    userIndicator = indicatorData;
    }) 
  }
  return userIndicator;
};

window.literacy = literacy;


