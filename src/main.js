
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


  //const print = (year) => {
  //let resultMex = `<h4>${year}</h4>`
  //indicator.insertAdjacentHTML("beforeend", resultMex);
  //};

});
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
        }
      }

  }

  //   // console.log(dataMEX);
  //   if (dataMEX >= 1)
  //     console.log(dataMEX);
});

//Impresión de Database Perú
selectPeru.addEventListener('change', () => {
  dataPER.forEach(function (dataPER) {
    // console.log(dataPER);
    if (dataPER >= 1)
      console.log(dataPER);
  });
  
})

//Impresión de Database Brasil
selectBrasil.addEventListener('change', () => {
  dataBRA.forEach(function (dataBRA) {
    // console.log(dataBRA);
     if (dataBRA >= 1)
    console.log(dataBRA);
   
  });
})