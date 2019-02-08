//window es un objeto global que contiene la funcion consult. 
window.data = {

  consult: (yearValue, userValue) => {
    const injuriesby = INJURIES;
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesby.find(element => element.Year === yearValue);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario. 
    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          console.log(element)
        }
      }
    }
    //let result = found.Total_Injured_Persons;
    //console.log(result);
  }
};
