//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (injuriesBy, yearValue, userValue) => {
    //Variables que guardan en resultado de la busqueda
    let yearResult = "";
    let userResult = "";
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year == yearValue);
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
    return [yearResult, userResult]
  }, //Consult

  order: (injuriesBy, yearValue, userValue) => {
    //const yearFound = injuriesBy.find(element => element.Year == yearValue);
      injuriesBy.forEach(element => {
      let year = element.Year;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      let allInjured = [moto, bike, walk, transit];
        if (yearValue === year && userValue === "all") {
            let yearFind = [year.substr(0,4), allInjured]
          console.log(yearFind);
        }
      }) //ForEach
      //return yearFind
  }//Order
}; //window