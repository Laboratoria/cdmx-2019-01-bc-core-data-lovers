const table = document.getElementById("table-year-data");
const tableBody = document.getElementById("table-indicators");
const country = document.getElementsByClassName("country");
const selects = document.getElementById("selects");
const sorting = document.getElementsByClassName("order");
const sort = document.getElementById("sort");
const tableTitle = document.getElementById("table-title");
const countryName = document.getElementById("country-name");
const average = document.getElementById("resulting");
let countryIndicatorsArr;
let indicatorName;
let indicatorData;
let years;
let values;
let countryNameValue;

//Oculta tabla, sorters y el botón e input del promedio
table.style.display = "none";
average.style.display = "none";
sort.style.display = "none";

function fetchingData(country) {
  fetch("./data/worldbank/worldbank.json")
    .then((response) => response.json())
    .then((data) => (countryIndicatorsArr = data[country]));
}

function filteringIndicators(arr, selectVal) {
  let selectedInidicatorArr = arr.filter((indicator) =>
    indicator.indicatorCode.includes(selectVal)
  );
  extractingCountryData(selectedInidicatorArr);
}

function extractingCountryData(arr) {
  countryNameValue = arr[0].countryName;
  indicatorName = arr[0].indicatorName;
  indicatorData = arr[0].data;
  for (let year in indicatorData) {
    years = `${year}`;
    values = `${parseFloat(indicatorData[year]).toFixed(2)}`;
    if (values > 0) {
      printing(indicatorName, years, values, countryNameValue);
    }
  }
}

Array.from(country).forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    element.classList.toggle("active");
    fetchingData(element.value);
  });
});

selects.addEventListener("change", () => {
  document.getElementById("result").innerHTML = "";
  let selectVal = selects.value;
  let indicatorsArr = countryIndicatorsArr.indicators;
  filteringIndicators(indicatorsArr, selectVal);
});

//Evento para ordenar
for (let i = 0; i < sorting.length; i++) {
  sorting[i].addEventListener("click", () => {
    tableBody.innerHTML = "";
    //Con el for se recorre el array de radios y se guarda el valor (upward o downward) en una variable
    let sortingValue = sorting[i].value;
    //Hace un array con las propiedades del objeto indicatorData
    let sortingObject = Object.keys(indicatorData);
    let sortedArray = window.data.sort(sortingObject, sortingValue);
    //Recorre los elementos del array ordenado y "k" toma esos valores.
    for (let i = 0; i < sortedArray.length; i++) {
      let k = sortedArray[i];
      //"Years" se pasa como parámetro a printing, con los valores de "k" y se usa para buscar en indicatorData los valores asociados a years.
      years = `${k}`;
      percent = `${parseFloat(indicatorData[years]).toFixed(2)}`;
      if (percent > 0) {
        printing(indicatorName, years, percent, countryNameValue);
      }
    }
  });
}

//Evento que calcula el promedio
average.addEventListener("click", () => {
  let values = [];
  //Itera en las propiedades del objeto "indicatorData"
  for (let years in indicatorData) {
    //Si los valores de years son mayores que cero, hace un array con esos valores y los parsea para tenerlos como números
    if (indicatorData[years] > 0) {
      values.push(parseInt(indicatorData[years]));
    }
  }
  let avg = window.data.average(values);
  document.getElementById("result").innerHTML = `El promedio es: ${parseFloat(
    avg
  ).toFixed(2)}%`;
});

//Función que pinta los años y datos filtrados en una tabla
const printing = (indicatorName, years, percent, country) => {
  sort.style.display = "flex";
  table.style.display = "grid";
  average.style.display = "block";
  tableTitle.innerHTML = `${indicatorName}`;
  countryName.innerHTML = country;
  let row = tableBody.insertRow(0);
  let cellYear = row.insertCell(0);
  let cellPercent = row.insertCell(1);
  cellYear.innerHTML = `${years}`;
  cellPercent.innerHTML = `${percent}`;
};

const navigator = document.getElementById("naving");
navigator.addEventListener("click", () => {
  if (navigator.className === "hipatia-nav") {
    navigator.className += " responsive";
  } else {
    navigator.className = "hipatia-nav";
  }
});
