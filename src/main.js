//filtrar datos para usar los indicadores relacionados con la educación

//open space john
const dataMex = WORLDBANK.MEX.indicators;
console.log(dataMex);

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

//función que extrae data, e itera ese arreglo para imprimir el contenido en el otro HTML
dataMex.forEach(element => {
  let year = element.data;
  let indicatorName = element.indicatorName;
  for (let data in year) {
    console.log(indicatorName, `year.${data} = ${year[data]}`); 
  }
}) 
//imprime ya todos los valores de la data de todas las variables!!






