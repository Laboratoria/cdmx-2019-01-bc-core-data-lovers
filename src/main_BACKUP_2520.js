
const dataWB= WORLDBANK.PER.indicators;
const indicator= document.getElementById("indicador");

const print= (indicatorName) => {
    let result= `<p>${indicatorName}</p>`
    indicator.insertAdjacentHTML("beforeend", result);
}

dataWB.forEach(element=> {
 let indicatorName= element.indicatorName;
 print(indicatorName);
}) 
//Código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

