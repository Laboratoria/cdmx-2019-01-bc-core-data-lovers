const dataMexico = WORLDBANK.MEX.indicators;
console.log(dataMexico);
const indicator =  document.getElementById("informacion__filtrada");


const print = (indicatorName) => {
   if(indicatorName === "Transición a la escuela secundaria, mujeres (%)"){
    console.log(indicatorName);
    indicator.insertAdjacentHTML("beforeend", indicatorName);
   } 
  //let resultado = `<p>${indicatorName}</p>`
  //indicator.insertAdjacentHTML("beforeend",resultado);
}

dataMexico.forEach(element =>{
  let indicatorName = element.indicatorName;
  print(indicatorName);
})

// const filtered = dataMexico.filter(element => element.indicatorName === "Transición a la escuela secundaria, mujeres (%)")
// const filteredaccess = filtered[0].data;

// console.log(filteredaccess);
// indicator.insertAdjacentHTML("beforeend", filteredaccess);