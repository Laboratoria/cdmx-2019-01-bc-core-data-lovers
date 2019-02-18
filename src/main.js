var WORLDBANK; //variable que nos permite validar el test 
const dataWorldbank = WORLDBANK; //variable que nos permite enlazar la data y utlizarla
const buttonCountries = document.getElementsByClassName("btnCountry");
const selectIndicator = document.getElementById("indicator");
const dataYear = document.getElementById("data-year");

let dataFilter = {}

//Constante para cachar el evento y puntualizar mediante id, el resultado de la función
const buttonClick = () => { 
  let countries = event.target.id;
  let result = window.WorldBank.dataCountries(dataWorldbank, countries);
  printOption(result);
}

for (let i = 0; i < buttonCountries.length; i++) {
  buttonCountries[i].addEventListener("click", buttonClick); //Agregar evento a cada uno de los botones
}

const printOption = (result) => { // Filtrar los indicadores del select por palabra "educación"
  selectIndicator.innerHTML = ""; //Evita la acumulación de los indicadores cada vez que se da click
  dataYear.innerHTML = "";
  dataFilter = result.filter(indicator => {
    let printIndicatorName = indicator.indicatorName;
    let education = /educación/i; // Se usa la expresión regular -educación- para incorporar los indicadores al select
    let matchs = printIndicatorName.match(education);
    if (matchs !== null) {  // Retirar indicadores con valores vacíos
      let indicatorOption = `<option value="${printIndicatorName}" >${printIndicatorName}</option>`;
      selectIndicator.insertAdjacentHTML("beforeend", indicatorOption);
      return matchs
    }
  });

}

const printYears = (resultYear) => {  // Imprimir los datos(año-porcentaje) del indicador-original-prueba
  dataYear.innerHTML = "";
  for (const key in resultYear) {
    if (resultYear.hasOwnProperty(key)) {
      let element = resultYear[key];
      const year = key;
      if (element !== "") {
        let indicatorDataYear = `<p>Año: <span>${year}   </span> <span>${parseFloat(element).toFixed(2)}%</span></p>`
        dataYear.insertAdjacentHTML("beforeend", indicatorDataYear);
      }

    }
  }
}

const sortByPercent = () => {
  const sortSelect = document.getElementById("sort");
  let matchYear = event.target.value;
  let resultYear = window.WorldBank.percentAndYear(dataFilter, matchYear);
  printYears(resultYear);
  let arrResultYear = [];
    sortSelect.addEventListener('change', () => {
      let sortValue = sortSelect.value;
      for (let key in resultYear) {
        if (resultYear.hasOwnProperty(key)) {
          arrResultYear.push([key, resultYear[key]]);
        }
      }
      let sortFinal = window.WorldBank.sortPercentAndYear(arrResultYear, sortValue);
      arrResultYear = new Object()
      sortFinal.forEach(element=> {
        let percent=  element[1];
        let year = element[0];
       arrResultYear[percent]  = year;
    })
    printPercents(arrResultYear);
  })
}

const printPercents = (resultYear) => {
  dataYear.innerHTML = "";
  for (const key in resultYear) {
    if (resultYear.hasOwnProperty(key)) {
      let element = resultYear[key];
      const year = key;
      if (year !== "") {
        let indicatorDataYear = `<p>Año: <span>${element}   </span> <span>${parseFloat(year).toFixed(2)}%</span></p>`
        dataYear.insertAdjacentHTML("beforeend", indicatorDataYear);
      }

    }
  }
}

selectIndicator.addEventListener("change", sortByPercent); 



