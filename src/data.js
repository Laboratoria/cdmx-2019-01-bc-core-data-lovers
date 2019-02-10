//window es un objeto global que contiene la funcion consult. 
window.data = {
  consult: (yearValue, userValue) => {
    const injuriesby = INJURIES;
    //Declaramos una variable vacía para guardar el resultado nuestras funciones
    let objResult = {
      propYear: "",
      propUser: ""
    };



    //Usamos FIND para buscar el año dentro del objeto.
    const yearFound = injuriesby.find(element => element.Year === yearValue);
    //Dentro de un ciclo FOR buscamos las Key y comparamos con el valor del Usuario. 
    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          yearResult = yearValue.substr(0, 4);
          userResult = element;
          objResult = {
            propYear: yearResult,
            propUser: userResult
          }
          console.log(objResult)
        } //for if If 
      } //For IF
    } // For 
  } //Consult
}; //window
