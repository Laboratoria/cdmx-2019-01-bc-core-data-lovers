// function limpiarSelect(){
//   listQuestion.innerHTML = "";
// }
// function setearCiudad(ciudad){
//   listQuestion.dataset.ciudad =  ciudad;
// }
// const para desplegar menu
const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementById("nav-menu");
// const para opciones de menu 
const btnAbout = document.getElementById("btn-about");
const btnNews = document.getElementById("btn-news");
const btnFilters = document.getElementById("btn-general-filter");
//para informacion mostrada 
const news = document.getElementById("news");
const about = document.getElementById("about");
const filters = document.getElementById("general-filter");
//evento para ocultar y mostrar elementos
navIcon.addEventListener('click', () => {

  navMenu.classList.toggle('ocultar');

});
btnAbout.addEventListener('click', () => {
  about.classList.remove('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('ocultar');
});
//comentario

btnNews.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.remove('ocultar');
});
btnFilters.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.remove('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('ocultar');
});
window.onload = function cargar(){
  filters.classList.remove('ocultar');
}
//acceder a la data de cada pais

const data = window.WORLDBANK;


// const countryMex = WORLDBANK.MEX.indicators;
// const countryPer = WORLDBANK.PER.indicators;
// const countryBra= WORLDBANK.BRA.indicators;
// const countryChl= WORLDBANK.CHL.indicators;



// section donde esta la informacion y el select
const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");


// ejecutar el llenado del selector dependiendo del país
const buttonTypes = Array.from(document.getElementsByClassName('search-country'));
//console.log(buttonTypes);
for (let boton in buttonTypes){
  buttonTypes[boton].addEventListener('click',(e) =>{
    e.preventDefault() //e.target()
    let paisElegido = data[e.target.dataset.ciudad].indicators;
    listQuestion.innerHTML = "";
    listQuestion.dataset.ciudad = e.target.dataset.ciudad;
    listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>'); 
    paisElegido.forEach( ciudad => {
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
    });

  })
}

//filtrar 
const avg = document.getElementById("avg");
listQuestion.addEventListener("change", () => {
  indicator.innerHTML = "";//Limpiar funcion
  let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
  let QuestionText = listQuestion.options[listQuestion.selectedIndex].text;
  let countrySelect = listQuestion.value;
  const resultado = window.WorldBank.filterCountry(data, country,countrySelect)//Datos de data.js
  for (let resultYear in resultado) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
    indicator.insertAdjacentHTML('beforeend', `<p><b>Año</b>: ${resultYear} => ${resultado[resultYear] || "N/A"}</p>`);
   // onbtemos datos para grafica
    
   var years = []; // para almacenar los años
   var dataPerYear = []; // para almacenar el dato por cada año
    // recorremos el dataciudad
     years.push(resultYear); // anadimos al final del array years (para eso es push() ) el valor del año que tenemos en la posicion 1..n
     dataPerYear.push(resultado[resultYear].toString()); // añadimos al final de array los datos reales por año
  
   // llamos a la funcion de graficar (par1 eje x par2 eje y, par3 titulo de la grafica)
   graficar(years, dataPerYear, QuestionText)
  
  
  }
  //Promediar
  //let mediaContent = document.createElement('span');
  const media = window.WorldBank.getMathMedia(resultado);
  avg.innerHTML = `Media porcentual:${media}`;
  //indicator.appendChild(mediaContent);
  

 
});


const radioFilters = Array.from(document.getElementsByClassName('radio__filter'));
//console.log(radioFilters)
for (let radioItem in radioFilters){
  radioFilters[radioItem].addEventListener('change',(e) =>{
    e.preventDefault() //e.target()
    indicator.innerHTML = "";//Limpiar funcion
    let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
    let countrySelect = listQuestion.value;
    const resultado = window.WorldBank.filterCountry(data, country,countrySelect)//Datos de data.js
    const resultadoOrder = window.WorldBank.orderData(resultado, e.target.dataset.sortby, e.target.dataset.sortorder)//Datos de data.js
    
    for (let resultadoYear in resultadoOrder) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
      let parrafo = document.createElement('p'); // creamos un elemento p temporal ira grafica
      parrafo.innerHTML = `<b>Año</b>: ${resultadoOrder[resultadoYear]} = ${resultado[resultadoOrder[resultadoYear]] || "N/A"} ` //imprimimos el año y numeros
      indicator.appendChild(parrafo); //limpiamos para que no se dublique en el html
    }

  })
}

function graficar(datosx, datosy, leyenda){
  // aqui graficamos
  //intanciamos chart y como parametro (elemento donde se va a colocar la grafica)
  var myLineChart = new Chart(graficaDatos, {
    type: 'line', // graficar linear
    data:{ // data general
      labels: datosx, // ["1960","1961"] asi es la estructura
      datasets: [{ 
        data: datosy, //  ["14.1", "14.4"] asi es la estructura
        label: 'Total: ', // etiqueta que aparece al hover del cursor en cada punto de la grafica
        borderColor: "#ff6182", // color del borde de la linea, en color salmon
        fill: false, // si la grafica esta rellena desde los picos hasta el eje x
      }]
      
    },
    options: { // opciones de la grafica
      title: { // titulo de la grafica
          display: true, // si se despliega o no
          text: leyenda // le pasamos el texto de la pregunta que seleccionamos en el select
      }
    }
  }); 

}

// const avg = document.getElementById("avg");
// avg_result = document.getElementById("avg_result");
// avg.addEventListener("click", () => {
//   // avg_result.innerHTML = '<p>g</p>'
//   const resultado = window.WorldBank.computeStats()
//   //avg_result.innerHTML = resultado
//   for (let resultadoValor in resultado) { 
//     avg_result.insertAdjacentHTML('beforeend', `${resultado[resultadoValor]}`);
//     console.log(avg_result)
//   }
// });

// on radio filters change 
// const radioYearMayor = document.getElementById("asc");
// radioYearMayor.addEventListener("change", () => {
//   indicator.innerHTML = "";//Limpiar funcion
//   const resultado = window.WorldBank.filterCountry(data, listQuestion)//Datos de data.js
//   const resultadoOrder = window.WorldBank.orderData(resultado, 'years', 'asc')//Datos de data.js
//   for (let resultadoYear in resultadoOrder) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
//     let parrafo = document.createElement('p');// creamos un elemento p temporal ira grafica
//     parrafo.innerHTML = `<b>Año</b>: ${resultadoOrder[resultadoYear]} => ${resultado[resultadoOrder[resultadoYear]] || 0} ` //imprimimos el año y numeros
//     indicator.appendChild(parrafo); //limpiamos para que no se dublique en el html
//   }
// })




// for(let i = 0; i<elements.length ; i++){
// elements[i].addEventListener("click", () => {
//   let valElement = elements[i].value
//   window.worldbank.filterData(ciudadesMex, valElement)
//   )};
// }

