// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

// Traer elementos del data
const dataMex = WORLDBANK.MEX.indicators;
//console.log(dataMex)

// recorrer elementos 
/*const dataEducation = dataMex. forEach (element => {
  let indicatorName = element.indicatorName;
  for (year in indicatorName) {
    console.log(indicatorName,year)
  }
});*/

const levelOfInstruction = () => {
  let instruction = dataEducation.filter (
    dataEducation => dataEducation.indicatorName = educacion
  )
}

