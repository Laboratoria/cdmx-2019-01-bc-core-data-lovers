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
  },
  {
    name: "Desempleo total de jovenes",
    peru: WORLDBANK.PER.indicators[114],
    chile: WORLDBANK.CHL.indicators[114],
    mexico: WORLDBANK.MEX.indicators[84],
    brasil: WORLDBANK.BRA.indicators[84]
  },
  {
    name: "Desempleo total de jovenes mujeres",
    peru: WORLDBANK.PER.indicators[117],
    chile: WORLDBANK.CHL.indicators[117],
    mexico: WORLDBANK.MEX.indicators[87],
    brasil: WORLDBANK.BRA.indicators[87]
  },
  {
    name: "Desempleo total de jovenes varones",
    peru: WORLDBANK.PER.indicators[115],
    chile: WORLDBANK.CHL.indicators[115],
    mexico: WORLDBANK.MEX.indicators[85],
    brasil: WORLDBANK.BRA.indicators[85]
  },
  {
    name: "Proporcion de mujeres y hombres en la fuerza laboral",
    peru: WORLDBANK.PER.indicators[7],
    chile: WORLDBANK.CHL.indicators[7],
    mexico: WORLDBANK.MEX.indicators[106],
    brasil: WORLDBANK.BRA.indicators[106]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años",
    peru: WORLDBANK.PER.indicators[20],
    chile: WORLDBANK.CHL.indicators[20],
    mexico: WORLDBANK.MEX.indicators[119],
    brasil: WORLDBANK.BRA.indicators[119]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años, mujeres",
    peru: WORLDBANK.PER.indicators[24],
    chile: WORLDBANK.CHL.indicators[24],
    mexico: WORLDBANK.MEX.indicators[123],
    brasil: WORLDBANK.BRA.indicators[123]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años, varones",
    peru: WORLDBANK.PER.indicators[22],
    chile: WORLDBANK.CHL.indicators[22],
    mexico: WORLDBANK.MEX.indicators[121],
    brasil: WORLDBANK.BRA.indicators[121]
  },
  {
    name: "Fuerza laboral con educación básica",
    peru: WORLDBANK.PER.indicators[10],
    chile: WORLDBANK.CHL.indicators[10],
    mexico: WORLDBANK.MEX.indicators[109],
    brasil: WORLDBANK.BRA.indicators[109]
  },
  {
    name: "Fuerza laboral con educación básica, mujeres",
    peru: WORLDBANK.PER.indicators[12],
    chile: WORLDBANK.CHL.indicators[12],
    mexico: WORLDBANK.MEX.indicators[111],
    brasil: WORLDBANK.BRA.indicators[111]
  },
  {
    name: "Fuerza laboral con educación básica, varones",
    peru: WORLDBANK.PER.indicators[11],
    chile: WORLDBANK.CHL.indicators[11],
    mexico: WORLDBANK.MEX.indicators[110],
    brasil: WORLDBANK.BRA.indicators[110]
  },
  {
    name: "Fuerza laboral con educación intermedia",
    peru: WORLDBANK.PER.indicators[1],
    chile: WORLDBANK.CHL.indicators[1],
    mexico: WORLDBANK.MEX.indicators[100],
    brasil: WORLDBANK.BRA.indicators[100]
  },
  {
    name: "Fuerza laboral con educación intermedia, mujeres",
    peru: WORLDBANK.PER.indicators[3],
    chile: WORLDBANK.CHL.indicators[3],
    mexico: WORLDBANK.MEX.indicators[102],
    brasil: WORLDBANK.BRA.indicators[102]
  },
  {
    name: "Fuerza laboral con educación intermedia, varones",
    peru: WORLDBANK.PER.indicators[2],
    chile: WORLDBANK.CHL.indicators[2],
    mexico: WORLDBANK.MEX.indicators[101],
    brasil: WORLDBANK.BRA.indicators[101]
  },
  {
    name: "Fuerza laboral con educación avanzada",
    peru: WORLDBANK.PER.indicators[13],
    chile: WORLDBANK.CHL.indicators[13],
    mexico: WORLDBANK.MEX.indicators[112],
    brasil: WORLDBANK.BRA.indicators[112]
  },
  {
    name: "Fuerza laboral con educación avanzada, mujeres",
    peru: WORLDBANK.PER.indicators[15],
    chile: WORLDBANK.CHL.indicators[15],
    mexico: WORLDBANK.MEX.indicators[114],
    brasil: WORLDBANK.BRA.indicators[114]
  },
  {
    name: "Fuerza laboral con educación avanzada, varones",
    peru: WORLDBANK.PER.indicators[14],
    chile: WORLDBANK.CHL.indicators[14],
    mexico: WORLDBANK.MEX.indicators[113],
    brasil: WORLDBANK.BRA.indicators[113]
  },
]
const country = document.getElementsByClassName('country')
const selects = document.getElementById('selects')

//Guarda el valor del input select para poderlo usar en la función filter de data.js
selects.addEventListener('change', () => {
  let selectVal = selects.value;
  window.worldbank.filter(selectVal);
})

//Recorre el array de botones de países y guarda el value del botón seleccionado
for (let i = 0; i < country.length; i++) {
  country[i].addEventListener("click", () => {
    let countryValue = country[i].value
//Llama al objeto seleccionado en la función filter de data.js    
    let indicatorSelected=window.worldbank.filter(chosenIndicator);
//Recorre el objeto del indicador seleccionado y guarda el objeto correspondiente al país seleccionado con los botones
    for (let countryS in indicatorSelected) {
      if (countryS === countryValue) {
        const dataCountry = indicatorSelected[countryS].data;
//Recorre la data del objeto del país seleccionado y pinta el año y el dato del indicador
        for (let year in dataCountry) {
            const years = `${year}`
            const percent= `${parseInt(dataCountry[year])}`
            printing(years, percent);
        }
      }
    }
  })
}

//Función que pinta los años y datos filtrados en una tabla
const table = document.getElementById("table-indicators");
    const printing = (years, percent) => {
      let row = table.insertRow(0);
      let cellYear = row.insertCell(0);
      let cellPercent = row.insertCell(1);
      cellYear.innerHTML = `${years}`;
      cellPercent.innerHTML = `${percent}`;
    }