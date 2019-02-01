// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/


//Traer array

const dataEducacion = WORLDBANK.MEX.indicators;
console.log(dataEducacion)

// Enlazar elementos del DOM
const indicador = document.getElementById("indicador");

// función para imprimir elementos en el html
const print = (indicadorName) => {
  let result = `<h5> ${indicadorName} </h5>`
  indicador.insertAdjacentHTML("beforeend", result)
};

// extraer elementos
dataEducacion.forEach (element => {
  let indicadorName = element.indicatorName;
  print(indicadorName)
});
