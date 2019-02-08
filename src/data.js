window.data = {

  consult: (yearValue, userValue) => {
const injuriesby = INJURIES;

//Te va a regresar el objeto del año que ingreso el usuario
    let yearFound = injuriesby.find(element => element.Year === yearValue);
// Regresa el total de heridos que eligio el usuario
for (const key in yearFound) {
  if (yearFound.hasOwnProperty(key)) {
    const element = yearFound[key];
    if (key === userValue){
      console.log(element);
      }
    }
  }
 }
};
