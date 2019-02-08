//Arreglo de años
const arrayYears = Array.from(document.getElementsByClassName("year"));
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


searchbutton.addEventListener("click", ()=>{
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;

  //console.log(yearValue, userValue);
  resultsecc.innerHTML=window.data.consult(yearValue, userValue);
})


// const printpage = (year, total, moto, bike, walk, transit) => {
//  let result = `<b>Año:</b> <i>${yearValue}</i> <br><b>Total de heridos en ${userValue};</i>`
//  knowsecc.insertAdjacentHTML("beforeend", result);
