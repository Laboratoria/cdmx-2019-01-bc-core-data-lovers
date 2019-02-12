let tableToPrint = document.getElementById('dataTable');
//get the data showThePanel (this is only used if we preffer to show the panel via javascrip and not in the css)


//First we need to declare our buttons
let buttonPedestrians =  document.getElementById('pedestrians-show');
let buttonPedalcyclists =  document.getElementById('pedalcyclists-show');
let buttonBus_occupants =  document.getElementById('bus_occupants-show');
let buttonCar_occupants =  document.getElementById('car_occupants-show');
let buttonMotorcycle =  document.getElementById('motorcyclists-show');
//Declaramos la constante. Usamos Array.from, método que hace un arreglo de lo que se indique. En este caso de la clase homogénea de cada uno de los botones. 
const bottonstByMode = Array.from(document.getElementsByClassName('button-transport'));

//Comprobamos que nos "jala" la data del modo que seleccionamos
//console.log(bottonstByMode[1]);

for( let i = 0; i < bottonstByMode.length; i++){
  bottonstByMode[i].addEventListener('click', function (e) {
    const accidentsData = getNeededData(e.target.name);
    //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
    //showThePanel();
    //Print in the information pnale all the information
    printTheData(accidentsData);
  });
}
function getNeededData(fieldToSearch){
  console.log(fieldToSearch)
    return window.data.getData(fieldToSearch);
  
  }
  
  function printTheData(accidentsByYear){
    accidentsByYear.forEach(element => {
      printDataInHTML(element.year, element.number);
    });
  }
  
  function printDataInHTML(year, number){
    tableToPrint.insertAdjacentHTML('beforeend', `<tr><td>${year}</td><td>${number}</td></tr>`);
  }

// Declaramos las variables de la sección de Year
let selectedYear = document.getElementById('selected_year');
let visualizeData = document.getElementById('visualize_data');
let resultGraphic = document.getElementById('result_graphic');
//Función para que al evento de click sobre el botón de Visualize Data
visualizeData.addEventListener("click", () => {
  let yearValue = selectedYear.value;
  //let visualizeValue = visualizeData.value;
  const resultData = window.data.consult(yearValue);
  console.log(resultData);

  
  //return = window.data.consult(yearValue, visualizeValue);
  //console.log(yearValue, visualizeValue);
  //resultGraphic.innerHTML = result_graphic;
  
//});
//Add functionality To the buttons
// buttonPedestrians.addEventListener('click', function () {
//   //get the needed dataTable
//   const accidentsData = getNeededData(buttonPedestrians.name);
//   //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
//   showThePanel();
//   //Print in the information pnale all the information
//   printTheData(accidentsData);
// });
//
// //Add functionality To the buttons
// buttonPedalcyclists.addEventListener('click', function () {
//   //get the needed dataTable
//   const accidentsData = getNeededData(buttonPedalcyclists.name);
//   //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
//   showThePanel();
//   //Print in the information pnale all the information
//   printTheData(accidentsData);
// });
//
// //Add functionality To the buttons
// buttonBus_occupants.addEventListener('click', function () {
//   //get the needed dataTable
//   const accidentsData = getNeededData(buttonBus_occupants.name);
//   //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
//   showThePanel();
//   //Print in the information pnale all the information
//   printTheData(accidentsData);
// });
//
// //Add functionality To the buttons
// buttonCar_occupants.addEventListener('click', function () {
//   //get the needed dataTable
//   const accidentsData = getNeededData(buttonCar_occupants.name);
//   //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
//   showThePanel();
//   //Print in the information pnale all the information
//   printTheData(accidentsData);
// });
//
// //Add functionality To the buttons
// buttonMotorcycle.addEventListener('click', function () {
//   //get the needed dataTable
//   const accidentsData = getNeededData(buttonMotorcycle.name);
//   //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
//   showThePanel();
//   //Print in the information pnale all the information
//   printTheData(accidentsData);
// });



/*openMenuButton.addEventListener('click', ()=>{
  openNav();
});*/
// let accidentsData = window.data.getData('Total_Injured_Persons_Motorcyclists');
//
//
// accidentsData.forEach(element => {
//   printDataInHTML(element.year, element.number);
// });





//alert("hola mundo");
//console.log(INJURIES);

//console.log(INJURIES[0].Year);
//pedalcyclistspage.addEventListener()

//menu
/*function openNav() {
  document.getElementById("side_menu").style.width = "250px";
}
function closeNav() {
  document.getElementById("side_menu").style.width = "0";
}
