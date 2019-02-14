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
    contentByMode[i].style.display = 'block';
    //Print in the information panel all the information
    printTheData(accidentsData, tableByMode[i], printOnce[i]);
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

function printTheData(accidentsByYear, tableToPrint, canPrint) {
  accidentsByYear.forEach(element => {
    printDataInHTML(element.year, element.number, tableToPrint, canPrint);
  });
}

function printDataInHTML(year, number, tableToPrint, canPrint) {
  if (canPrint) {
    tableToPrint.insertAdjacentHTML('beforeend', `<tr><td>${year}</td><td>${number}</td></tr>`);
  }}

// // Declaramos las variables de la sección de Year
// let selectedYear = document.getElementById('selected_year');
// let visualizeData = document.getElementById('visualize_data');
// //let resultGraphic = document.getElementById('result_graphic');
// //Función para que al evento de click sobre el botón de Visualize Data
// visualizeData.addEventListener("click", () => {
//   let yearValue = selectedYear.value;
//   const resultData = window.data.consult(dataToSearch, yearValue);
//   //console.log(resultData)
//   resultsecc.innerHTML = `<b>Año:</b>${resultData[0]} <b>Total de heridos:</b>${resultData[1]}`;
// });
