//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultsecc = document.getElementById("result");
//Constante que contiene la data
const injuriesBy = window.INJURIES;

searchbutton.addEventListener("click", () => {
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  //const resultYear = window.data.consult(yearValue,userValue)
  //const resultUser = window.data.consult(userValue)
const resultData= window.data.consult(injuriesBy, yearValue, userValue);
resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
});
//<br><b>Total de heridos en ${userValue};</i>
