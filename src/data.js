//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (injuriesBy, yearValue, userValue) => {
    //Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";

    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year == yearValue);
    const allData = injuriesBy.map(({
      Total_Injured_Persons_Motorcyclists,
      Total_Injured_Persons_Pedalcyclists,
      Total_Injured_Persons_Pedestrians,
      Total_Injured_Persons_Transit_Total,
      Year
    }) => [`<br>${Year}<br>${Total_Injured_Persons_Motorcyclists}<br>${Total_Injured_Persons_Motorcyclists}<br>${Total_Injured_Persons_Pedalcyclists}<br>${Total_Injured_Persons_Pedestrians}<br>${Total_Injured_Persons_Transit_Total}<br>`]);
    console.log(allData)
    
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          yearResult = yearValue.substr(0, 4);
          userResult = element;
        } //for if If 
      } //For IF
    } // For
    //console.log(yearResult, userResult)
    return [allData]
  } //Consult
}; //window
