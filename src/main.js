//filtrar datos para usar los indicadores relacionados con la educació
//const WORLDBANK = WORLDBANK;
const dataMex = WORLDBANK.MEX.indicators;
let filteredIndicators = [];
//filtra los datos por botones


// const filterFunction = (dataMex, wordToCompare) => {
//   if (wordToCompare === 'educación') {
//     dataMex.forEach((element) => {
//       /educación/i.test(element.indicatorName)
//       filteredIndicators.push(element);
//     })
//   } else if (wordToCompare === 'laboral'){
//     dataMex.forEach((element) => {
//       /laboral/i.test(element.indicatorName)
//       filteredIndicators.push(element);
//     } )
//   } else if (wordToCompare === 'población'){
//     dataMex.forEach((element) => {
//       /población/i.test(element.indicatorName)
//       filteredIndicators.push(element);
//     })
//   }
//   return filteredIndicators;
// }


// console.log(populationIndicators);

//filtrar base de datos, para seleccionar indicadores que contengan la palabra "educación"
// let wordToCompare = "";
// const educationButton = document.getElementById('education');
// const laboralButton = document.getElementById('laboral');
// const demographicButton = document.getElementById ('demographic');
const elements = document.getElementsByClassName('elements')
// const print = (indicatorName, indicatorCode) => {
//     let result = `<li value = "${indicatorCode}" > ${indicatorName} </li>`
//     indicator.insertAdjacentHTML('beforeend', result);
// }

//   educationButton.addEventListener('click',()=>{
//   wordToCompare = educationButton.value;
//   filterFunction(dataMex, wordToCompare);
//   filteredIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   print(indicatorName, indicatorCode);
//   })
  
// })



const typeIndicator = () => {
  button.addEventListener ('click', () => {
     console.log(button.value);
  } )
}



// const education = document.getElementById('education');
// const laboral = document.getElementById ('laboral');
// const demographic = document.getElementById ('demographic');

// // Funcion que imprime los indicadores de educación en el select
// education.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const print = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   education.insertAdjacentHTML('beforeend', result);
// }

// //función de extraer elementos:
// educationIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   print(indicatorName, indicatorCode)
// });

// // Funcion que imprime los indicadores de laboral en el select
// laboral.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const printLaboral = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   laboral.insertAdjacentHTML('beforeend', result);
// }


// //función de extraer elementos:
// laboralIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   printLaboral(indicatorName, indicatorCode)
// });

// // Funcion que imprime los indicadores de demográfico en el select

// demographic.insertAdjacentHTML ("beforeend", '<option value="">Selecciona un indicador</option>');
// const printDemographic = (indicatorName, indicatorCode) => {
//   let result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
//   demographic.insertAdjacentHTML('beforeend', result);
// }

// //función de extraer elementos:
// demographicIndicators.forEach(element => {
//   let indicatorName = element.indicatorName;
//   let indicatorCode = element.indicatorCode;
//   printDemographic(indicatorName, indicatorCode)
// });

// //función para imprimir datos de variable en el html
// education.addEventListener("change", ()=> {
//   document.getElementById('indicator-name').innerHTML = '';
//   document.getElementById('indicator-result').innerHTML='';
//   let indicatorSelect = education.value;
//   educationIndicatiors.forEach( element => {
//     if(element.indicatorCode == indicatorSelect){
//       let indicatorName = element.indicatorName;
//       let year = element.data;
//       console.log(element.data);
//       for (let data in year) {
//         indicatorResult = `<ol>${data} = ${year[data]}</ol>`;
//         document.getElementById('indicator-name').innerHTML = indicatorName + ':';
//         document.getElementById('indicator-result').insertAdjacentHTML('beforeend', indicatorResult);
//       }
//     }
//   })
// })


// //EVENTO EN EL INDICADOR
// let indicatorResult = ('');

// //Eventos, variables
// const sectionOne = document.getElementById('section-1');
// const sectionTwo = document.getElementById('section-2');

// //Evento del botón "Volver a inicio"
// // const startButton = document.getElementById('startButton');

// // startButton.addEventListener('click', () => {
// //   sectionTwo.classList.add('hide');
// //   sectionOne.classList.remove('hide');
// // })



// /*
// let educationData = dataMex.find(element => {
//   element.indicatorName == /educación/i.test
// })
// console.log(educationData);


for(let i = 0; i<elements.length; i++){
  elements[i].addEventListener('click', () => {
    let valElement = elements[i].value;
    window.worldBank.filter(dataMex, valElement);
  })
}