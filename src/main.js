//Creamos las constantes que traeran la data
const injuriesby = INJURIES;
// ConsoleLog = Array(33) [ {…}, {…}, {…},]

//Constante del elemento root del HTML
const totalsecc = document.getElementById("know")

//Función para imprimir en html 
const printpage = (year, total, moto, bike, walk, transit) => {
  let result = `<b>Año:</b> <i>${year}</i> <br><b>Total de heridos:</b> <i>${total};</i> <b>en Moto:</b> <i>${moto};</i> <b>en bici:</b> <i>${bike}</i>; <b>peatones:</b> <i>${walk}</i>; <b>autos:</b> <i>${transit};</i>  <br><br> `
  totalsecc.insertAdjacentHTML("beforeend", result);
}
//Función ForEach para recorrer elementos.
injuriesby.forEach(element => {

  let year = element.Year;
  let total = element.Total_Injured_Persons;
  let moto = element.Total_Injured_Persons_Motorcyclists;
  let bike = element.Total_Injured_Persons_Pedalcyclists;
  let walk = element.Total_Injured_Persons_Pedestrians;
  let transit = element.Total_Injured_Persons_Transit_Total;

  //Le digo qué quiero que imprima. Deben ir en orden. 
  printpage(year, total, moto, bike, walk, transit)

  //ConsoleLog si muestra todos los elementos console.log(total)

});
