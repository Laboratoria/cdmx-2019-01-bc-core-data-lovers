const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
const pageForData = documente.getElementById('info');
const selectorPais = document.getElementById('selectElementId'); //constantes para seleccionar el país y se dispare el evento al seleccionar uno   
const pagesjumps = document.getElementById('donations', 'commits' , 'impact')//constantes para brincar a la section que se utiliza como una pagina

<<<<<<< HEAD
  
document.getElementById('informate').addEventListener ('click' , ( ) => { 
welcomePage.style.display = 'none';
pageForData.style.display = 'block';  

jumpto(anchor)(); {
window.location.href = "#"+anchor;
}
});
const dataGlobal = WORLDBANK.indicators;
const GlobalIndicator = document.getElementById("IndicatorName ");


countries.addEventListener('change', () => { //Impresión Database para cada país
  let enclick = selectorPais.value;
  if (enclick === 'countries') {
    dataGlobal.forEach(element => {
      
    });
    // console.log(dataMEX[15].data)
    let años = dataGlobal[15].data
    for (const año in años) {
      if (años.hasOwnProperty(año)) {
        let element = años[año];
        element = parseFloat(element)
        // console.log(  parseInt(element)) 
        if (element > 0) {
          console.log(element)
=======
//boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const botonInfo = document.getElementById('botonInfo');

//constantes de cada section para que se muestran y ocultan creando la simulación de pagínas
const root = document.getElementById('root');
const informate = document.getElementById('informate');

//constantes para seleccionar el país y se dispare el evento al seleccionar uno   
const selectorPais = document.getElementById('selectorPais');
const selectMex = document.getElementById('selectorPais');
const selectPeru = document.getElementById('selectorPais');
const selectBrasil = document.getElementById('selectorPais');


//const para cada pais en el selector 




//const para cada pais en el selector 

const dataMEX = WORLDBANK.MEX.indicators;
const indicatorMex = document.getElementById("selectMex");

const dataPER = WORLDBANK.PER.indicators;
const indicatorPeru = document.getElementById("selectPeru");

const dataBRA = WORLDBANK.BRA.indicators;
const indicatorBrasil = document.getElementById("selectBrasil");

//función que dispara el evento de mostrar y ocultar la pagina root a la pagina informate 
botonInfo.addEventListener('click', () => {
  root.classList.add('hideElement');
  informate.classList.remove('hideElement');



//Impresión Database México
selectMex.addEventListener('change', () => {
  let enclick = selectMex.value;
  if(enclick === 'MEX'){
    dataMEX.forEach(element => {
      // console.log(element.data)
      });
      // console.log(dataMEX[15].data)
      let años = dataMEX[15].data
      for (const año in años) {
        if (años.hasOwnProperty(año)) {
          let element = años[año];
          element = parseFloat(element)
          // console.log(  parseInt(element)) 
          if(element > 0){
            console.log(element)
          }
>>>>>>> 404064f4229161b093184efee159f8509c56bf3f
        }
      }
    }

<<<<<<< HEAD
  }

});
=======

})
>>>>>>> 404064f4229161b093184efee159f8509c56bf3f

