//Constante de la sección know del HTML
const knowsecc = document.getElementById("know");
//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");
//Constante de la sección know del HTML
const resultesecc = document.getElementById("result");



searchbutton.addEventListener("click", ()=>{
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  let datos = window.data.consultYear(yearValue, userValue)
  
});

// const printpage = (year, total, moto, bike, walk, transit) => {
//  let result = `<b>Año:</b> <i>${yearValue}</i> <br><b>Total de heridos en ${userValue};</i>`
//  knowsecc.insertAdjacentHTML("beforeend", result);
//      //Le digo qué quiero que imprima. Deben ir en orden.
//printpage(year, total, moto, bike, walk, transit)