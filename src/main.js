var WORLDBANK; //variable que nos permite validar el test de object
const dataWorldbank = WORLDBANK; //variable que nos permite enlazar la data y utlizarla
const buttonCountries = document.getElementsByClassName("btnCountry");
const selectIndicator = document.getElementById("indicator");
const dataYear = document.getElementById("data-year");

let dataFilter = {}

//Con esta función enlazamos mediante el id del botón,la data de cada país. Para eso fue necesario poner
//una misma clase a todos los botones y escribir el ID igual que como está en  la data.
const buttonClick = () => {
  let countries = event.target.id;
  let result = window.WorldBank.dataCountries(dataWorldbank, countries);
  printOption(result);
}

for (let i = 0; i < buttonCountries.length; i++) {
  buttonCountries[i].addEventListener("click", buttonClick);
}

const printOption = (result) => {
  selectIndicator.innerHTML = "";
  dataYear.innerHTML = "";
  dataFilter = result.filter(indicator => {
    let printIndicatorName = indicator.indicatorName;
    let education = /educación/i
    let matchs = printIndicatorName.match(education);
    if (matchs !== null) {
      let indicatorOption = `<option value="${printIndicatorName}" >${printIndicatorName}</option>`
      selectIndicator.insertAdjacentHTML("beforeend", indicatorOption);
      return matchs
    }
  });

}

const printYears = (resultYear) => {
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
      obj = new Object()
      sortFinal.forEach(element=> {
        let percent=  element[1];
        let year = element[0];
       obj[percent]  = year;
    })
    printPercents2(obj);
  })
}

const printPercents2 = (resultYear) => {
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