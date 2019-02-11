//get the data showThePanel (this is only used if we preffer to show the panel via javascrip and not in the css)
//First we need to declare our buttons
// let buttonPedestrians =  document.getElementById('pedestrians-show');
// let buttonPedalcyclists =  document.getElementById('pedalcyclists-show');
// let buttonBus_occupants =  document.getElementById('bus_occupants-show');
// let buttonCar_occupants =  document.getElementById('car_occupants-show');
// let buttonMotorcycle =  document.getElementById('motorcyclists-show');
// let content = document.getElementById('content');


const bottonstByMode = Array.from(document.getElementsByClassName('button-transport'));
const contentByMode = Array.from(document.getElementsByClassName('infoBody'));
const tableByMode = Array.from(document.getElementsByClassName('dataTable'));
let isPrintInThisAlready = [];

for (let i = 0; i < bottonstByMode.length; i++) {
  isPrintInThisAlready.push(true);
  bottonstByMode[i].addEventListener('click', function(e) {
    const accidentsData = getNeededData(e.target.name);
    hideAllContent();
    //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
    showThePanel();
    contentByMode[i].style.display = 'block';

    //Print in the information panel all the information
    printTheData(accidentsData, tableByMode[i], isPrintInThisAlready[i]);
    isPrintInThisAlready[i] = false;
  });
}

function hideAllContent() {
  for (let i = 0; i < contentByMode.length; i++) {
    contentByMode[i].style.display = 'none';
  }
}

function getNeededData(fieldToSearch) {
  return window.data.getData(fieldToSearch);

}

//(this is only used if we preffer to show the panel via javascrip and not in the css)
function showThePanel() {
  //open the data Panel

}

function printTheData(accidentsByYear, tableToPrint, canPrint) {
  accidentsByYear.forEach(element => {
    printDataInHTML(element.year, element.number, tableToPrint, canPrint);
  });
}

function printDataInHTML(year, number, tableToPrint, canPrint) {
  if (canPrint) {
    tableToPrint.insertAdjacentHTML('beforeend', `<tr><td>${year}</td><td>${number}</td></tr>`);
  }
}
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
}*/
