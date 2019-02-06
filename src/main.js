//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;

//función para traer el elemento del html donde vamos a pintar la data
const indicator = document.getElementById('indicator');

//función para imprimir elementos en el html
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');

const print = (indicatorName, indicatorCode) => {
  let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML("beforeend", result);
}

//document.getElementById('Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)').innerHTML
//imprime todo, pero "data" es un objeto, así que para iterarlo, hay que hacer un forIn

//función de extraer elementos:
dataMex.forEach(element => {
  let indicatorName = element.indicatorName;
  let indicatorCode = element.indicatorCode;
  print(indicatorName, indicatorCode)
});

//función que extrae data, e itera ese arreglo para imprimir el contenido del indicador, dependiendo del indicador al que le de click

//función para imprimir datos de variable en el html
indicator.addEventListener("change", ()=> {
  document.getElementById('indicator-name').innerHTML = '';
  document.getElementById('indicator-result').innerHTML='';
  let indicatorSelect = indicator.value;
  dataMex.forEach( element => {
    if(element.indicatorCode == indicatorSelect){
      let indicatorName = element.indicatorName;
      let year = element.data;
      console.log(element.data);
      for (let data in year) {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      }
    }
  })
})

//EVENTO EN EL INDICADOR
let indicatorResult = ('');

//Eventos, variables
const sectionOne = document.getElementById('section-1');
const sectionTwo = document.getElementById('section-2');

//Evento del botón "Volver a inicio"
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  sectionTwo.classList.add('hide');
  sectionOne.classList.remove('hide');
})

//filtrar base de datos, para seleccionar indicadores que contengan la palabra "educación"

let educationIndicators = [];
let laboralIndicators = [];
let populationIndicators = [];

dataMex.forEach((element) => {
  if(/educación/i.test(element.indicatorName)) {
  educationIndicators.push(element);
  } else if (/laboral/i.test(element.indicatorName)) {
  laboralIndicators.push(element);
  } else if (/población/i.test(element.indicatorName)){
    populationIndicators.push(element);
  }
})
console.log(populationIndicators);


/*
let educationData = dataMex.find(element => {
  element.indicatorName == /educación/i.test
})
console.log(educationData);
*/