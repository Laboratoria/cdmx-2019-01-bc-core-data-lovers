//filtrar datos para usar los indicadores relacionados con la educació
const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;

//función para traer el elemento del html donde vamos a pintar la data
const indicator = document.getElementById('indicator');

//función para imprimir elementos en el html
const print = (indicatorName) => {
  let result = `<h4>${indicatorName}</h4>`
  indicator.insertAdjacentHTML("beforeend", result);
}
//imprime todo, pero "data" es un objeto, así que para iterarlo, hay que hacer un forIn

//función de extraer elementos:
 dataMex.forEach(element => {
  let indicatorName = element.indicatorName;
  print(indicatorName)
});

//función de eventos click en los indicadores
//const indicatorClick = document. 

//función que extrae data, e itera ese arreglo para imprimir el contenido en el otro HTML
dataMex.forEach(element => {
  let year = element.data;
  let indicatorName = element.indicatorName;
  for (let data in year) {
   // if ()
    return indicatorName, `year.${data} = ${year[data]}`; 
  }
}) 
//imprime ya todos los valores de la data de todas las variables!!






