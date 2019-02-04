//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;

//función para traer el elemento del html donde vamos a pintar la data
const indicator = document.getElementById('indicator');

//función para imprimir elementos en el html
const print = (indicatorName) => {
  let result = `<a href="#section-2"><div id = ${indicatorName}>${indicatorName}</div></a>`
  indicator.insertAdjacentHTML("beforeend", result);
}

//document.getElementById('Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)').innerHTML
//imprime todo, pero "data" es un objeto, así que para iterarlo, hay que hacer un forIn

//función de extraer elementos:
dataMex.forEach(element => {
  let indicatorName = element.indicatorName;
  print(indicatorName)
});

//función que extrae data, e itera ese arreglo para imprimir el contenido del indicador, dependiendo del indicador al que le de click

//función para imprimir datos de variable en el html


//EVENTO EN EL INDICADOR
let indicatorResult = ('');
/*
const indicatorClick = indicator.addEventListener('click', () => {

  dataMex.forEach(element => {
    let year = element.data;
    let indicatorName = element.indicatorName;
    for (let data in year) {
      if (indicatorName === 'Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)'){
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)'){
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)'){
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)'){
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Proporción de escaños ocupados por mujeres en los parlamentos nacionales (%)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      } else if (indicatorName === 'Educacin terciaria, profesores (% de mujeres)') {
        indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
        document.getElementById('indicator-name').innerHTML= indicatorName +':';
        document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
      }
    }
  })
});
*/


//función con switch

const indicatorClick = indicator.addEventListener('click', () => {
  dataMex.forEach(element => {
    let year = element.data;
    let indicatorName = element.indicatorName;
    for (let data in year) {
      switch (indicatorName) {
        case 'Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)':
          indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
          document.getElementById('indicator-name').innerHTML = indicatorName + ':';
          document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
          sectionTwo.classList.remove('hide');
          sectionOne.classList.add('hide');
          break;
        case 'Prevalencia de anemia entre mujeres en edad fértil (% de mujeres de entre 15 y 49 años)':
          indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
          document.getElementById('indicator-name').innerHTML = indicatorName + ':';
          document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
          sectionTwo.classList.remove('hide');
          sectionOne.classList.add('hide');
          break;
        case 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)':
          indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
          document.getElementById('indicator-name').innerHTML = indicatorName + ':';
          document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
          sectionTwo.classList.remove('hide');
          sectionOne.classList.add('hide');
          break;
        case 'Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)':
          indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
          document.getElementById('indicator-name').innerHTML = indicatorName + ':';
          document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
          sectionTwo.classList.remove('hide');
          sectionOne.classList.add('hide');
          break;
          
      }
    }
  })
})

//Eventos, variables
const sectionOne = document.getElementById('section-1');
const sectionTwo = document.getElementById('section-2');

//Evento del botón "Volver a inicio"
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  sectionTwo.classList.add('hide');
  sectionOne.classList.remove('hide');
})
