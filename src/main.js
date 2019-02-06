//Constante de la sección know del HTML
const knowsecc = document.getElementById("know");
//Declaramos input del año
let yearbutton = document.getElementById("yearbttn");
//Declaramos input del usurio
let userbutton = document.getElementById("user");
//Declaramos input del consulta
let searchbutton = document.getElementById("search");

searchbutton.addEventListener("click", ()=>{
  let yearValue = yearbutton.value;
  let userValue = userbutton.value;
  console.log(yearValue, userValue)
})

//Función para imprimir en html
//const printpage = (year, total, moto, bike, walk, transit) => {
//  let result = `<b>Año:</b> <i>${year}</i> <br><b>Total de heridos:</b> <i>${total};</i> <b>en Moto:</b> <i>${moto};</i> <b>en bici:</b> <i>${bike}</i>; <b>peatones:</b> <i>${walk}</i>; <b>autos:</b> <i>${transit};</i>  <br><br> `
//  knowsecc.insertAdjacentHTML("beforeend", result);
//}
