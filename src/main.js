//Cambio de páginas
/*function myFunction() {
    document.getElementById("page1").style.display = "none"
    document.getElementById("page2").style.display = "block"
   }
   
   function functionA() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("results").style.display = "block";
   }*/



var WORLDBANK;
const dataWorldbank = WORLDBANK; //Traer base de datos
const buttonCountries = document.getElementsByClassName('btnCountry');
const selectIndicator = document.getElementById('indicator')
const dataYear = document.getElementById('data-year')


const buttonClick = () => {
  let countries = event.target.id;
  let result = window.WorldBank.dataCountries(dataWorldbank, countries)
  printOption(result)
}

for (let i = 0; i < buttonCountries.length; i++) {
  buttonCountries[i].addEventListener('click', buttonClick)
}

const printOption = (result) => {
  const dataFilter = result.filter(indicator => {
    let printIndicatorName = indicator.indicatorName
    let education = /educación/i
    let matchs = printIndicatorName.match(education)
    if (matchs !== null) {
      let indicatorOption = `<option value="${printIndicatorName}" >${printIndicatorName}</option>`
      selectIndicator.insertAdjacentHTML('beforeend', indicatorOption)
      return matchs
    }
  });
  selectIndicator.addEventListener('change', () => {
    let matchYear = event.target.value
    let resultYear = window.WorldBank.percentAndYear(dataFilter, matchYear)
    printYears(resultYear);
  })
}

const printYears = (resultYear) => {
  for (const key in resultYear) {
    if (resultYear.hasOwnProperty(key)) {
      let element = resultYear[key];
      const year = key;
      if (element !== "") {
        let indicatorDataYear = `<p>Año: <span>${year}   </span> <span>${parseFloat(element).toFixed(2)}%</span></p>`
        dataYear.insertAdjacentHTML('beforeend', indicatorDataYear)
      }
    }
  }

}
