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
          if (key == userValue ) {
            yearResult = yearValue.substr(0, 4);
            userResult = element;
          } //for if If
        } //For IF
      } // For
      // console.log(yearResult,userResult);
    return [yearResult, userResult]
  }, //Consult
  order: (injuriesBy, yearValue, userValue) => {
    //const yearFound = injuriesBy.find(element => element.Year == yearValue);
    let yearFind = "";
      injuriesBy.forEach(element => {
      let year = element.Year;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      //let allInjured = [moto, bike, walk, transit];
        if (yearValue === year && userValue === "all") {
            yearFind = [year.substr(0,4), moto, bike, walk, transit];
        }
      }) //ForEach
      return yearFind;
  },//Order
  // ordenData: (yearValue, userValue) => {
  //    //console.log(yearValue, userValue)
  //    let ordered = [1, 4, 5, 6, 2, 7]
  //    //let ordered = [newmoto, newbike, newpeaton, newauto]
  //    const ordenData = ordered.sort((a, b) => {
  //      a > b
  //      return a > b
  //    })
  //    //console.log(ordenData)
  //  }
}; //window
