//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;

//función para traer el elemento del html donde vamos a pintar la data
const indicator = document.getElementById('element');

//función para imprimir elementos en el html
const print = (indicatorName) => {
  let result = `<a href="./data_page.html"><div id = ${indicatorName}>${indicatorName}</div></a>`
  indicator.insertAdjacentHTML("beforeend", result);  
}

//document.getElementById('Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)').innerHTML
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
    if(indicatorName==='Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)'){
      console.log(`year.${data} = ${year[data]}`);
    }
    //console.log(indicatorName, `year.${data} = ${year[data]}`);
  }
});
//imprime ya todos los valores de la data de todas las variables!!

//función de eventos click en los indicadores
/*const indicatorClick = indicator.addEventListener('click', () =>{
  if(indicator.value === 'Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)'){
    return document.getElementById('indicator').innerHTML = indicator.value.data;
  } else if (indicator.value === 'Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)'){
    console.log(indicator.value);
  }
})

//guardar event.target en una función 
//console.log(event.target)

const eventClick = () => {
  const triggered = event.target.tagName;
  //const indicatorValue = document.getElementById('indicatorName');
  console.log(triggered);
}



//const indicatorValue = document.getElementById('indicatorName').innerHTML = indicatorName.value;

//Voy a hacerlo de manera manual, en lo que encontramos una forma de agregar eventos dinámicamente
const extractInformation = (dataMex) => {
  let idValue = document.getElementById('');
  for(let i = 0; i < dataMex.length; i++){
    if(idValue === 0){
      console.log(dataMex[0]);
    }
  }
}

const indicator0 = document.getElementById('0');
//crear eventos en las opciones
const eventsOptions = indicator0.addEventListener('click', () =>{
  document.getElementById('result').innerHTML = dataMex[0];
})
*/
