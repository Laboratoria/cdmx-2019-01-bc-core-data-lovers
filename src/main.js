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

//Al evento de click de toma el valor de Usuario y del Año. 
searchbutton.addEventListener("click", ()=>{
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  const result = window.data.consult(yearValue,userValue)
  //console.log(yearValue, userValue);
  resultsecc.innerHTML=result;
})


// const printpage = (year, total, moto, bike, walk, transit) => {
//  let result = `<b>Año:</b> <i>${yearValue}</i> <br><b>Total de heridos en ${userValue};</i>`
//  knowsecc.insertAdjacentHTML("beforeend", result);
