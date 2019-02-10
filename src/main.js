const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
const pageForData = documente.getElementById('info');
const selectorPais = document.getElementById('selectElementId'); //constantes para seleccionar el país y se dispare el evento al seleccionar uno   
const pagesjumps = document.getElementById('donations', 'commits' , 'impact')//constantes para brincar a la section que se utiliza como una pagina

  
document.getElementById('informate').addEventListener ('click' , ( ) => { 
welcomePage.style.display = 'none';
pageForData.style.display = 'block';  

jumpto(anchor)() => {
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
        }
      }
    }

  }

});

