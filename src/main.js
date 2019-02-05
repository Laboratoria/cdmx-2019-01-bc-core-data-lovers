//Variable para los indicadores de cada pais
const dataChl= WORLDBANK.CHL.indicators;
console.log(dataChl)
const dataBra= WORLDBANK.BRA.indicators;
console.log(dataBra)
const dataMex= WORLDBANK.MEX.indicators;
console.log(dataMex)
const dataPer= WORLDBANK.PER.indicators;
console.log(dataPer)

//funcion para traer el elemento del HTML donde vamos a pintar los indicadores
const indicator= document.getElementById("indicator");
//funcion para imprimir elementos en el HTML
const printChl=(indicatorName)=> {
    let result=`<p>${indicatorName}</p>`
    indicator.insertAdjacentHTML("beforeend",result);
    }
dataChl.forEach(element =>{
    let indicatorName=element.indicatorName;
    printChl(indicatorName)
});



