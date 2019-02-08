const indicators = [{
    name: "Desempleo total",
    peru: WORLDBANK.PER.indicators[106],
    mexico: WORLDBANK.MEX.indicators[76],
    chile: WORLDBANK.CHL.indicators[106],
    brasil: WORLDBANK.BRA.indicators[76]
  },
  {
    name: "Desempleo mujeres",
    peru: WORLDBANK.PER.indicators[109],
    chile: WORLDBANK.CHL.indicators[109],
    mexico: WORLDBANK.MEX.indicators[79],
    brasil: WORLDBANK.BRA.indicators[79]
  },
  {
    name: "Desempleo hombres",
    peru: WORLDBANK.PER.indicators[107],
    chile: WORLDBANK.CHL.indicators[107],
    mexico: WORLDBANK.MEX.indicators[77],
    brasil: WORLDBANK.BRA.indicators[77]
  },
  {
    name: "Participación en la fuerza laboral total",
    peru: WORLDBANK.PER.indicators[4],
    chile: WORLDBANK.CHL.indicators[4],
    mexico: WORLDBANK.MEX.indicators[103],
    brasil: WORLDBANK.BRA.indicators[103]
  },
  {
    name: "Participación en la fuerza laboral mujeres",
    peru: WORLDBANK.PER.indicators[9],
    chile: WORLDBANK.CHL.indicators[9],
    mexico: WORLDBANK.MEX.indicators[108],
    brasil: WORLDBANK.BRA.indicators[108]
  },
  {
    name: "Participación en la fuerza laboral hombres",
    peru: WORLDBANK.PER.indicators[5],
    chile: WORLDBANK.CHL.indicators[5],
    mexico: WORLDBANK.MEX.indicators[104],
    brasil: WORLDBANK.BRA.indicators[104]
  }
]

const country = document.getElementsByClassName('country')
const selects = document.getElementById('selects')
let chosenIndicator = {};

selects.addEventListener('change', () => {
  let selectVal = selects.value;
  for (let i = 0; i < indicators.length; i++) {
    if (selectVal === indicators[i].name) {
      chosenIndicator = indicators[i];
      console.log(chosenIndicator);
    }
  }
})

for (let i = 0; i < country.length; i++) {
  country[i].addEventListener("click", () => {
    let countryValue = country[i].value
    for (let countryS in chosenIndicator) {
      if (countryS === countryValue) {
        const dataCountry = chosenIndicator[countryS].data;
        for (let year in dataCountry) {
          if (dataCountry[year] > 0) {
            const years = `${year} ${parseInt(dataCountry[year])}`
            printing(years);
          }
        }
      }
    }
  })
}