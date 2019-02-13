var WORLDBANK; //variable que nos permite validar el test de object
const dataWorldbank = WORLDBANK; //variable que nos permite enlazar la data y utlizarla
const buttonCountries = document.getElementsByClassName("button");
const selectIndicator = document.getElementById("indicator");
const dataYear = document.getElementById("data-year");

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
  selectIndicator.innerHTML="";
  const dataFilter = result.filter(indicator => {
    let printIndicatorName = indicator.indicatorName;
    let education = /educación/i
    let matchs = printIndicatorName.match(education);
    if (matchs !== null) {
      let indicatorOption = `<option value="${printIndicatorName}" >${printIndicatorName}</option>`
      selectIndicator.insertAdjacentHTML("beforeend", indicatorOption);
      return matchs
    }
  });
  selectIndicator.addEventListener("change", () => {
    let matchYear = event.target.value;
    let resultYear = window.WorldBank.percentAndYear(dataFilter, matchYear);
    printYears(resultYear);
  })
}

const printYears = (resultYear) => {
  let indicatorDataYear = "";
  dataYear.innerHTML = "";
  for (const key in resultYear) {
    if (resultYear.hasOwnProperty(key)) {
      let element = resultYear[key];
      const year = key;
      if (element !== "") {
        indicatorDataYear = `<p>Año: <span>${year}   </span> <span>${parseFloat(element).toFixed(2)}%</span></p>`
        dataYear.insertAdjacentHTML("beforeend", indicatorDataYear);
      }
    }
  }
}
