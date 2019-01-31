
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

