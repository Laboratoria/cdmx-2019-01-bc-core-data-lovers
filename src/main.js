//Creamos las constantes que traeran la data
const injuriesby = INJURIES;
// ConsoleLog = Array(33) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

//Constante del elemento root del HTML
const totalsecc = document.getElementById("total")
//Función para imprimir en html 
const printpage = (year) => {
  let result = `Año: ${year}<br>`
  totalsecc.insertAdjacentHTML("beforeend", result);
}
//Función ForEach para recorrer elementos.
injuriesby.forEach(element => {
let total = element.Total_Injured_Persons;
let moto = element.Total_Injured_Persons_Motorcyclists;
let year = element.Year;
let bike = element.Total_Injured_Persons_Pedalcyclists;
let walk = element.Total_Injured_Persons_Pedestrians;
let transit = element.Total_Injured_Persons_Transit_Total;

printpage(year)
//ConsoleLog si muestra todos los elementos console.log(total)

});
// root.insertAdjacentHTML('beforeend', );
//console.log(injuriesby);

