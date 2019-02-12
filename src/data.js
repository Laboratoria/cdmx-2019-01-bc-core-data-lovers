//window es un objeto global que contiene la funcion consult.
window.data = {
  consult: (yearValue, userValue) => {
    const injuriesBy = INJURIES;
    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesBy.find(element => element.Year === yearValue);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario. 
    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          const yearResult = yearValue.substr(0, 4);
          const userResult = element;
          console.log(injuriesby)
        } //for if If 
      } //For IF
    } // For
    return [yearResult, userResult]
  } //Consult
}; //window
