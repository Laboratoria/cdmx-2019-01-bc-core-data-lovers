// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const filterTheme = () => {
  return 'filterTheme';
};
window.filterTheme = filterTheme;*/

const dataMexico = WORLDBANK.MEX.indicators;
//console.log(dataMexico);
const indicator =  document.getElementById("informacion__filtrada");

const print = (indicatorName) => {
  let resultado = `<p>${indicatorName}</p>`
  indicator.insertAdjacentHTML("beforeend",resultado);
}

dataMexico.forEach(element =>{
  let indicatorName = element.indicatorName;
  print(indicatorName);
})

