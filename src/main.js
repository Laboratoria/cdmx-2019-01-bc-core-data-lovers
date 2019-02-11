//Constante de la sección know del HTML
const knowsecc = document.getElementById("know");
//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");

searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  //Al evento de click de toma el valor de Usuario y del Año
  const resultData = window.data.consult(yearValue, userValue)
  console.log(resultData)
  resultsecc.innerHTML = `<b>Año:</b><i>${resultData[0]}</i> <b>total:</b><i>${resultData[1]}</i><br> `
})

