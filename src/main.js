var WORLDBANK;
const perIndicators = WORLDBANK.PER.indicators;
const mexIndicators = WORLDBANK.MEX.indicators;
const chlIndicators = WORLDBANK.CHL.indicators;
const braIndicators = WORLDBANK.BRA.indicators;

const indicators = [{
    name: "Desempleo total",
    peru: perIndicators[106],
    mexico: mexIndicators[76],
    chile: chlIndicators[106],
    brasil: braIndicators[76]
  },
  {
    name: "Desempleo mujeres",
    peru: perIndicators[109],
    chile: chlIndicators[109],
    mexico: mexIndicators[79],
    brasil: braIndicators[79]
  },
  {
    name: "Desempleo hombres",
    peru: perIndicators[107],
    chile: chlIndicators[107],
    mexico: mexIndicators[77],
    brasil: braIndicators[77]
  },
  {
    name: "Participación en la fuerza laboral total",
    peru: perIndicators[4],
    chile: chlIndicators[4],
    mexico: mexIndicators[103],
    brasil: braIndicators[103]
  },
  {
    name: "Participación en la fuerza laboral mujeres",
    peru: perIndicators[9],
    chile: chlIndicators[9],
    mexico: mexIndicators[108],
    brasil: braIndicators[108]
  },
  {
    name: "Participación en la fuerza laboral hombres",
    peru: perIndicators[5],
    chile: chlIndicators[5],
    mexico: mexIndicators[104],
    brasil: braIndicators[104]
  },
  {
    name: "Desempleo total de jovenes",
    peru: perIndicators[114],
    chile: chlIndicators[114],
    mexico: mexIndicators[84],
    brasil: braIndicators[84]
  },
  {
    name: "Desempleo total de jovenes mujeres",
    peru: perIndicators[117],
    chile: chlIndicators[117],
    mexico: mexIndicators[87],
    brasil: braIndicators[87]
  },
  {
    name: "Desempleo total de jovenes varones",
    peru: perIndicators[115],
    chile: chlIndicators[115],
    mexico: mexIndicators[85],
    brasil: braIndicators[85]
  },
  {
    name: "Proporcion de mujeres y hombres en la fuerza laboral",
    peru: perIndicators[7],
    chile: chlIndicators[7],
    mexico: mexIndicators[106],
    brasil: braIndicators[106]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años",
    peru: perIndicators[20],
    chile: chlIndicators[20],
    mexico: mexIndicators[119],
    brasil: braIndicators[119]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años, mujeres",
    peru: perIndicators[24],
    chile: chlIndicators[24],
    mexico: mexIndicators[123],
    brasil: braIndicators[123]
  },
  {
    name: "Participacion en la fuerza laboral de 15 a 24 años, varones",
    peru: perIndicators[22],
    chile: chlIndicators[22],
    mexico: mexIndicators[121],
    brasil: braIndicators[121]
  },
  {
    name: "Fuerza laboral con educación básica",
    peru: perIndicators[10],
    chile: chlIndicators[10],
    mexico: mexIndicators[109],
    brasil: braIndicators[109]
  },
  {
    name: "Fuerza laboral con educación básica, mujeres",
    peru: perIndicators[12],
    chile: chlIndicators[12],
    mexico: mexIndicators[111],
    brasil: braIndicators[111]
  },
  {
    name: "Fuerza laboral con educación básica, varones",
    peru: perIndicators[11],
    chile: chlIndicators[11],
    mexico: mexIndicators[110],
    brasil: braIndicators[110]
  },
  {
    name: "Fuerza laboral con educación intermedia",
    peru: perIndicators[1],
    chile: chlIndicators[1],
    mexico: mexIndicators[100],
    brasil: braIndicators[100]
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
    peru: perIndicators[2],
    chile: chlIndicators[2],
    mexico: mexIndicators[101],
    brasil: braIndicators[101]
  },
  {
    name: "Fuerza laboral con educación avanzada",
    peru: perIndicators[13],
    chile: chlIndicators[13],
    mexico: mexIndicators[112],
    brasil: braIndicators[112]
  },
  {
    name: "Fuerza laboral con educación avanzada, mujeres",
    peru: perIndicators[15],
    chile: chlIndicators[15],
    mexico: mexIndicators[114],
    brasil: braIndicators[114]
  },
  {
    name: "Fuerza laboral con educación avanzada, varones",
    peru: perIndicators[14],
    chile: chlIndicators[14],
    mexico: mexIndicators[113],
    brasil: braIndicators[113]
  },
]

const table = document.getElementById("table-year-data");
table.style.display = "none";
const tableBody = document.getElementById("table-indicators");
const country = document.getElementsByClassName("country");
const selects = document.getElementById("selects");
const sorting = document.getElementsByClassName("order");
const sorters = document.getElementById("sorters");
sorters.style.display = "none";
const tableTitle= document.getElementById("table-title");
const countryName= document.getElementById("country-name");
const average = document.getElementById("average");
average.style.display= "none";
let countryValue="";
let objectSelected = {};
let dataCountry = {};
let indicatorName="";
let years = "";
let percent = "";

//Guarda el valor del input select para poderlo usar en la función filter de data.js
selects.addEventListener("change", () => {
  let selectVal = selects.value;
  objectSelected = window.data.filter(indicators, selectVal);
})

//Recorre el array de botones de países y guarda el value del botón seleccionado
for (let i = 0; i < country.length; i++) {
  country[i].addEventListener("click", () => {
    tableBody.innerHTML = "";
    countryValue = country[i].value
    //Recorre el objeto del indicador seleccionado y guarda el objeto correspondiente al país seleccionado con los botones
    for (let countryS in objectSelected) {
      if (countryS === countryValue) {
        indicatorName=objectSelected[countryS].indicatorName;
        dataCountry = objectSelected[countryS].data;
        //Recorre la data del objeto del país seleccionado y pinta el año y el dato del indicador
        for (let year in dataCountry) {
          years = `${year}`
          percent = `${dataCountry[year]}`
          if (percent > 0) {
            printing(indicatorName, countryValue, years, percent);
          }
        }
      }
    }
  })
}

//Evento para ordenar
for (let i = 0; i < sorting.length; i++) {
  sorting[i].addEventListener("click", () => {
    tableBody.innerHTML = "";
    let sortingValue = sorting[i].value;
    let sortingObject = Object.keys(dataCountry);
    let sortedArray = window.data.sort(sortingObject, sortingValue);
    for (let i = 0; i < sortedArray.length; i++) {
      let k = sortedArray[i]
      years = `${k}`
      percent = `${dataCountry[k]}`
      if (percent > 0) {
        printing(indicatorName, countryValue, years, percent);
      }
    }
  })
}

//Evento que calcula el promedio
average.addEventListener("click", () => {
  let values = [];
  for (let years in dataCountry) {
    if (dataCountry[years] > 0) {
      values.push(parseInt(dataCountry[years]));
    }
  }
  let avg = window.data.average(values);
  document.getElementById("result").innerHTML = `El promedio es: ${parseInt(avg)}%`;
})

//Función que pinta los años y datos filtrados en una tabla

const printing = (indicatorName, countryValue, years, percent) => {
  table.style.display = "block";
  sorters.style.display = "block";
  average.style.display= "block";
  tableTitle.innerHTML= `${indicatorName}`;
  countryName.innerHTML=`${countryValue.toUpperCase()}`;
  let row = tableBody.insertRow(0);
  let cellYear = row.insertCell(0);
  let cellPercent = row.insertCell(1);
  cellYear.innerHTML = `${years}`;
  cellPercent.innerHTML = `${percent}`;
}

//Slides

let myIndex = 0
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
