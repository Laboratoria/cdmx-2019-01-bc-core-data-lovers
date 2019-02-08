// Manipulación de datos a través de arreglos y objetos. La idea de este archivo es contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos.
//En este archivo esperamos que implementes las funciones detalladas en la sección de Pruebas Unitarias.





//Slides

let myIndex=0
carousel();

function carousel(){
    let i;
    let x= document.getElementsByClassName ("mySlides");
    for (i=0 ; i< x.length; i++){
        x[i].style.display= "none";
    }
  myIndex++;
  if(myIndex > x.length) {myIndex=1}  
  x[myIndex-1].style.display="block";
  setTimeout(carousel,3000);
}

















/*
//MAP in-name

const dataPer=WORLDBANK.PER.indicators.map (indicatorPer => `${indicatorPer.indicatorName}`);

console.log (dataPer);

// FOR EACH in-name

const dataPer= WORLDBANK.PER.indicators;
dataPer.forEach(element => {
    let indicatorName=element.indicatorName;

    console.log (indicatorName);


// FILTRADO NOMBRE 
const dataPer=WORLDBANK.PER.indicators.map (indicatorPer => `${indicatorPer.indicatorName}`);
const indicatorPer= dataPer.filter (element => element === "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");

console.log (indicatorPer);

// INDICADORES all propierties array 


const indicatorsMexico= [];
indicatorsMexico[0]= WORLDBANK.MEX.indicators[109];
indicatorsMexico[1]= WORLDBANK.MEX.indicators[110];
indicatorsMexico[2]= WORLDBANK.MEX.indicators[112];

const dataMex=indicatorsMexico.map (element => `${element.data}`);



console.log (indicatorsMexico)

/* 



