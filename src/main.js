var WORLDBANK; //variable que nos permite validar el test de object
const dataWorldbank = WORLDBANK; //variable que nos permite enlazar la data y utlizarla
const buttonCountries = document.getElementsByClassName("button");
const selectIndicator = document.getElementById("indicator");
const dataYear = document.getElementById("data-year");
const sort = document.getElementById("sort");

let dataFilter = {}
let resultYear = {}
//Con esta función enlazamos mediante el id del botón,la data de cada país. Para eso fue necesario poner
//una misma clase a todos los botones y escribir el ID igual que como está en la data.
const buttonClick = () => {
  sort.classList.remove("hide");
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
        let indicatorDataYear = `<p>Año: <span>${year}   </span> <span><b>${parseFloat(element).toFixed(2)}%</b></span></p>`
        dataYear.insertAdjacentHTML("beforeend", indicatorDataYear);
      }
    }
  }
}

const prueba = () => {
  const sortRadio = document.getElementsByName("sort");
  let matchYear = event.target.value;
  resultYear = window.WorlDbank.percentAndYear(dataFilter, matchYear);
  printYears(resultYear);
  let arrResultYear = [];
  for (let i = 0; i < sortRadio.length; i++) {
    sortRadio[i].addEventListener('click', () => {
      let sortValue = sortRadio[i].value
      for (let key in resultYear) {
        if (resultYear.hasOwnProperty(key)) {
          arrResultYear.push([key, resultYear[key]]);
        }
      }

      let sortUpward = window.WorldBank.sortPercentAndYear(arrResultYear, sortValue);
      let obj = new Object()
      sortUpward.forEach(element => {
        let percent = element[1]
        let year = element[0]
        obj[percent] = year

      })
      printYears2(obj);
    })
  }

}


const printYears2 = (resultYear) => {
  dataYear.innerHTML = "";
  for (const key in resultYear) {
    if (resultYear.hasOwnProperty(key)) {
      let element = resultYear[key];
      const year = key;
      if (year !== "") {
        let indicatorDataYear = `<p>Año: <span>${element}   </span> <span><b>${parseFloat(year).toFixed(2)}%</b></span></p>`
        dataYear.insertAdjacentHTML("beforeend", indicatorDataYear);
      }

    }
  }
}


selectIndicator.addEventListener("change", prueba);
const buttonAverage = document.getElementById('average');
const inputAverage = document.getElementById('value-average');

const printAverage = () => {
        let arrAverage = Object.values(resultYear);
        let arrData = []
        for (let i in arrAverage) {
          if (arrAverage[i] === "") {
            arrData.push(0)
          } else {
            arrData.push(parseInt(arrAverage[i]))
          }
        }
        let resultAverage = window.WorldBank.average(arrData);
        let totalAverage = `<p><b>${parseFloat(resultAverage).toFixed(2)}%</b></p>`
        inputAverage.innerHTML = totalAverage;
        return totalAverage
    }

    buttonAverage.addEventListener('click', printAverage);
