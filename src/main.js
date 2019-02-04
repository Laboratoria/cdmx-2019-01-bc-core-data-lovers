//Definiendo el array de los indicadores con los que vamos a trabajar de Perú
const indicatorsPeru = [];
indicatorsPeru[0] = WORLDBANK.PER.indicators[109];
indicatorsPeru[1] = WORLDBANK.PER.indicators[110];
indicatorsPeru[2] = WORLDBANK.PER.indicators[112];

const yearPeru = document.getElementById("year");
const print = (indicatorName) => {
  let result = `<p>${indicatorName}</p>`;
  yearPeru.insertAdjacentHTML("beforeend", result);
}

//Definiendo el array de los indicadores con los que vamos a trabajar de México
const indicatorsMexico= [];
indicatorsMexico[0]= WORLDBANK.MEX.indicators[109];
indicatorsMexico[1]= WORLDBANK.MEX.indicators[110];
indicatorsMexico[2]= WORLDBANK.MEX.indicators[112];

const yearMexico = document.getElementById("year");
const printMex= (indicatorNameMex)=>{
  let result= `<p>${indicatorNameMex}</p>`;
  yearMexico.insertAdjacentHTML("beforeend", result);
}

//Definiendo el array de los indicadores con los que vamos a trabajar de Chile
const indicatorsChile= [];
indicatorsChile[0]= WORLDBANK.CHL.indicators[109];
indicatorsChile[1]= WORLDBANK.CHL.indicators[110];
indicatorsChile[2]= WORLDBANK.CHL.indicators[112];

const yearChile = document.getElementById("year");
const printChile= (indicatorNameChl)=>{
  let result= `<p>${indicatorNameChl}</p>`;
  yearChile.insertAdjacentHTML("beforeend", result);
}

//Definiendo el array de los indicadores con los que vamos a trabajar de Brasil
const indicatorsBrasil= [];
indicatorsBrasil[0]= WORLDBANK.BRA.indicators[109];
indicatorsBrasil[1]= WORLDBANK.BRA.indicators[110];
indicatorsBrasil[2]= WORLDBANK.BRA.indicators[112];

const yearBrasil = document.getElementById("year");
const printBrasil= (indicatorNameBra)=>{
  let result= `<p>${indicatorNameBra}</p>`;
  yearBrasil.insertAdjacentHTML("beforeend", result);
}

//Eventos de los botones de banderas
const botonPeru = document.getElementById("").addEventListener("click", function () {
      indicatorsPeru.forEach(element => {
      let indicatorName = element.indicatorName;
      print(indicatorName); 
    })
  })

const botonMexico = document.getElementById("").addEventListener("click", function (){
  indicatorsMexico.forEach(element=> {
    let indicatorNameMex =element.indicatorName;
    printMex(indicatorNameMex);
  })
})

const botonChile = document.getElementById("").addEventListener("click", function (){
  indicatorsChile.forEach(element=> {
    let indicatorNameChl =element.indicatorName;
    printChile(indicatorNameChl);
  })
})

const botonBrasil = document.getElementById("").addEventListener("click", function (){
  indicatorsBrasil.forEach(element=> {
    let indicatorNameBra =element.indicatorName;
    printBrasil(indicatorNameBra);
  })
})