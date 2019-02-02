// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

// Traer elementos del data
const dataMex = WORLDBANK.MEX.indicators;
//console.log(dataMex)

// extraer elementos 
const levelOfInstruction = () => {
  let instruction = dataMex.filter(
    dataMex.indicatorName
  )
  console.log(levelOfInstruction)
};

