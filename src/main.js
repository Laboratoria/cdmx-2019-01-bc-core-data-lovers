/*global google: true*/
const dataToSearch = window.INJURIES;

const bottonstByMode = Array.from(document.getElementsByClassName('button-transport'));
const contentByMode = Array.from(document.getElementsByClassName('infoBody'));
const tableByMode = Array.from(document.getElementsByClassName('dataTable'));
const graphicsByMode = Array.from(document.getElementsByClassName('chart_div'));
let printOnce = [];

for (let i = 0; i < bottonstByMode.length; i++) {
  printOnce.push(true);
  bottonstByMode[i].addEventListener('click', function(e) {
    const accidentsData = getNeededData(e.target.name);
    const accidentsDataAsArray = getNeededDataAsArray(e.target.name);
    hideAllContent();
    //Display the information panel (this is only used if we preffer to show the panel via javascrip and not in the css)
    contentByMode[i].style.display = 'block';
    //Print in the information panel all the information
    printTheData(accidentsData, tableByMode[i], printOnce[i]);

    drawGraphic(accidentsDataAsArray, graphicsByMode[i]);

    printOnce[i] = false;
  })
}

function hideAllContent() {
  for (let i = 0; i < contentByMode.length; i++) {
    contentByMode[i].style.display = 'none';
  }
}

function getNeededData(fieldToSearch) {
  return window.data.getData(fieldToSearch);
}

function getNeededDataAsArray(fieldToSearch) {
  return window.data.getDataAsArray(fieldToSearch);
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

// Declaramos las variables de la sección de Year
let selectedYear = document.getElementById('selected_year');
let visualizeData = document.getElementById('visualize_data');
let resultGraphic = document.getElementById('result_graphic');
// let indicator = document.getElementsByName();


//Función para que al evento de click sobre el botón de Visualize Data
visualizeData.addEventListener("click", () => {
  let yearValue = selectedYear.value;
  const resultData = window.data.consult(dataToSearch, yearValue);
  // console.log(resultData)
  //con el método Object.values convertimos en arreglo el objeto resultData y sólo nos devuelve los valores
  let arrayData = Object.values(resultData);
  // console.log(arrayData);
  resultGraphic.innerHTML = `<b>Year:  </b>${selectedYear.value.substr(0,4)}<br><br><b>Pedestrians:  </b>${arrayData[0]} <br><b>Bikecyclists:  </b>${arrayData[1]} <br><b>Bus Occupants:  </b>${arrayData[2]} <br><b>Car Occupants:  </b>${arrayData[3]} <br><b>Motorcyclists:  </b>${arrayData[4]}`;
  return arrayData;
});

function drawGraphic(arraysToPrint, graphicToDraw) {
  google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(() => {
    drawBasic(arraysToPrint, graphicToDraw);
  });
}

function drawBasic(arraysToPrint, graphicToDraw){
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Injuries');

  data.addRows(arraysToPrint);

  var options = {
    hAxis: {
      title: 'Years'
    },
    vAxis: {
      title: 'Injuries'
    }
  };

  var chart = new google.visualization.ColumnChart(graphicToDraw);

  chart.draw(data, options);
}

// Declaramos las variables de la sección de Year
// let selectedYear = document.getElementById('selected_year');
// let visualizeData = document.getElementById('visualize_data');
// let resultGraphic = document.getElementById('result_graphic');
let chartByMode = document.getElementById('piechart');
// let indicator = document.getElementsByName();

//Función para que al evento de click sobre el botón de Visualize Data
visualizeData.addEventListener("click", () => {
 let yearValue = selectedYear.value;
 const resultData = window.data.consult(dataToSearch, yearValue);
 // console.log(resultData)
 //con el método Object.values convertimos en arreglo el objeto resultData y sólo nos devuelve los valores
 let arrayData = Object.values(resultData);
 // console.log(arrayData);
 resultGraphic.innerHTML = `<b>Year:  </b>${selectedYear.value.substr(0, 4)}<br><br><b>Pedestrians:  </b>${arrayData[0]} <br><b>Bikecyclists:  </b>${arrayData[1]} <br><b>Bus Occupants:  </b>${arrayData[2]} <br><b>Car Occupants:  </b>${arrayData[3]} <br><b>Motorcyclists:  </b>${arrayData[4]}`;
 drawChart(arrayData, chartByMode);
 return arrayData;
});

google.charts.load('current', {
 packages: ['corechart']
});
// google.charts.setOnLoadCallback(drawChart);

function drawChart(arrayData) {

 var data = google.visualization.arrayToDataTable([
   ['Mode', 'Injured persons'],
   ['Pedestrians', arrayData[0]],
   ['Bikecyclists', arrayData[1]],
   ['Bus Occupants', arrayData[2]],
   ['Car Occupants', arrayData[3]],
   ['Motorcyclists', arrayData[4]]
 ]);
 var options = {
   title: 'Total of injured persons by transportation mode',
 };

 var chart = new google.visualization.PieChart(document.getElementById('piechart'));

 chart.draw(data, options);
}
