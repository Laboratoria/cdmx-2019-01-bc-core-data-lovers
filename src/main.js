//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
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

//función que extrae data, e itera ese arreglo para imprimir el contenido en el otro HTML
const indicatorContent = dataMex.forEach(element => {
  let year = element.data;
  let indicatorName = element.indicatorName;
  for (let data in year) {
    return indicatorName, `year.${data} = ${year[data]}`; 
  }
}) 
//imprime ya todos los valores de la data de todas las variables!!
console.log(indicator.value);

//función de eventos click en los indicadores
const indicatorClick = indicator.addEventListener('click', () =>{
  if(indicator.value === 'Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)'){
    return document.getElementById('indicator').innerHTML = indicator.value.data;
  } else if (indicator.value === 'Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)'){
    console.log(indicator.value);
  }
})




