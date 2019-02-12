//get the data showThePanel (this is only used if we preffer to show the panel via javascrip and not in the css)
//First we need to declare our buttons
// let buttonPedestrians =  document.getElementById('pedestrians-show');
// let buttonPedalcyclists =  document.getElementById('pedalcyclists-show');
// let buttonBus_occupants =  document.getElementById('bus_occupants-show');
// let buttonCar_occupants =  document.getElementById('car_occupants-show');
// let buttonMotorcycle =  document.getElementById('motorcyclists-show');
// let content = document.getElementById('content');

// const dataToSearch = window.INJURIES;
const bottonstByMode = Array.from(document.getElementsByClassName('button-transport'));
const contentByMode = Array.from(document.getElementsByClassName('infoBody'));
const tableByMode = Array.from(document.getElementsByClassName('dataTable'));
let printOnce = [];

for (let i = 0; i < bottonstByMode.length; i++) {
  printOnce.push(true);
  bottonstByMode[i].addEventListener('click', function(e) {
    const accidentsData = getNeededData(e.target.name);
    hideAllContent();
    //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
    showThePanel();
    contentByMode[i].style.display = 'block';
    //Print in the information panel all the information
    printTheData(accidentsData, tableByMode[i], printOnce[i]);
    printOnce[i] = false;
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
