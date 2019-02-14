//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (injuriesBy, yearValue, userValue) => {
    // //Variables que guardan en resultado de la busqueda
    // let yearResult = "";
    // let userResult = "";
    // //Usamos FIND para buscar el año dentro del objeto.
    // const yearFound = injuriesBy.find(element => element.Year == yearValue);
    // //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario.
    // for (const key in yearFound) {
    //   if (yearFound.hasOwnProperty(key)) {
    //     const element = yearFound[key];
    //     if (key == userValue) {
    //       yearResult = yearValue.substr(0, 4);
    //       userResult = element;
    //     } //For If If
    //   } //For If
    // } //for 
    // return [yearResult, userResult]
    // //Consult


    injuriesBy.forEach(element => {
      //console.log(Object.keys(element))
      let year = element.Year;
      let total = element.Total_Injured_Persons;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      //let allInjured = [moto, bike, walk, transit];

      if (yearValue === year && userValue === "all") {
        let yearFind = [year.substr(0, 4), moto, bike, walk, transit];
        console.log(yearFind);
        //return [yearFind, total, moto, bike, walk, transit]

      }
      //const filtrado = yearFound.filter(user => ("Total_Injured_Persons_Transit_Total"))
    })
  }
};

//},

order: (injuriesBy, yearValue, userValue) => {
  //const filtrado = injuriesBy.filter(years => (years.Year > "2009-01-04"))
  //const yearFound = injuriesBy.find(element => element.Year == yearValue);
  injuriesBy.forEach(element => {
    //console.log(Object.keys(element))
    let year = element.Year;
    let total = element.Total_Injured_Persons;
    let moto = element.Total_Injured_Persons_Motorcyclists;
    let bike = element.Total_Injured_Persons_Pedalcyclists;
    let walk = element.Total_Injured_Persons_Pedestrians;
    let transit = element.Total_Injured_Persons_Transit_Total;
    let allInjured = [moto, bike, walk, transit];

    if (yearValue === year && userValue === "all") {
      let yearFind = [year.substr(0, 4), allInjured];
      console.log(yearFind);
      //return [yearFind, total, moto, bike, walk, transit]

    }
    //const filtrado = yearFound.filter(user => ("Total_Injured_Persons_Transit_Total"))
  })
};
