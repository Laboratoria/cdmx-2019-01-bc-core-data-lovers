// const para desplegar menu
const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementById("nav-menu");
const container = document.getElementById('ctn__general');
const body = document.getElementById('body');
const header = document.getElementById('header');
// const para opciones de menu 
const btnAbout = document.getElementById("btn-about");
const btnNews = document.getElementById("btn-news");
const btnFilters = document.getElementById("btn-general-filter");
//para informacion mostrada 
const news = document.getElementById("news");
const about = document.getElementById("about");
const filters = document.getElementById("general-filter");
//evento para hide y mostrar elementos
navIcon.addEventListener("click", () =>{  
  navIcon.classList.toggle("open");

	navMenu.classList.toggle("open");
  container.classList.toggle("open");
  body.classList.toggle("fixed");
  header.classList.toggle("open");
})
btnAbout.addEventListener('click', () => {
  about.classList.remove('hide');
  filters.classList.add('hide');
  news.classList.add('hide');
  container.classList.toggle("open");
  navIcon.classList.remove("open");
});
btnNews.addEventListener('click', () => {
  about.classList.add('hide');
  filters.classList.add('hide');
  news.classList.remove('hide');
  container.classList.toggle("open");
  navIcon.classList.remove("open");
});
btnFilters.addEventListener('click', () => {
  about.classList.add('hide');
  filters.classList.remove('hide');
  news.classList.add('hide');
  container.classList.toggle("open");
  navIcon.classList.remove("open");
});
window.onload = function cargar(){
  filters.classList.remove('hide');
}

var elementsArray = document.querySelectorAll('.item-menu');

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
      navIcon.classList.remove("open");
      container.classList.remove("open");

      navMenu.classList.remove("open");
      body.classList.remove("fixed");
      header.classList.remove("open");
    });
});

//acceder a la data de cada pais
//const data = window.WORLDBANK;
let data = {};
const fetchData =  fetch('./data/worldbank/worldbank.json')
.then( response => {
    return response.json();
  }).then(pais => {
  data = pais;
  return pais
})
window.fetchData = fetchData;
// section donde esta la informacion y el select
const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");

// ejecutar el llenado del selector dependiendo del país
const buttonTypes = Array.from(document.getElementsByClassName('search-country'));//tomar botones 4  en una sola clase
//console.log(buttonTypes);
for (let boton in buttonTypes){
  buttonTypes[boton].addEventListener('click',(e) =>{
   // e.preventDefault() //e.target()
    indicator.innerHTML = "";
    let chooseCoutry = data[e.target.dataset.ciudad].indicators;//ayuda a identificar el pais que dimos click en ingresamos a la data especifica
    listQuestion.innerHTML = "";
    listQuestion.dataset.ciudad = e.target.dataset.ciudad;// para que tomme el pais y logremos pintarlo
    listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>'); 
    chooseCoutry.forEach( ciudad => {
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
    });
  })
}

//filtrar 
const graficaDatos = document.getElementById("graph").getContext('2d');// grafica
const avg = document.getElementById("avg");//media porcentual
listQuestion.addEventListener("change", () => {
  indicator.innerHTML = "";//Limpiar funcion
  let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
  let countrySelect = listQuestion.value; //obtenemos el indicator code
  let QuestionText = listQuestion.options[listQuestion.selectedIndex].text;//listQuestion.selectedIndex obetnemos por numero de tema y texto del tema 
  const result = window.WorldBank.filterCountry(data, country,countrySelect)//Datos de data.js año valor
  //console.log(data, country,countrySelect)
  //para almacenar ddatos de la grafica
  var years = []; // para almacenar los años
  var dataPerYear = []; // para almacenar el dato por cada año
  for (let resultYear in result) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
    indicator.insertAdjacentHTML('beforeend', `<p><b>Año</b>: ${resultYear} = ${result[resultYear] || "N/A"}</p>`);
      //Datos en la grafica
      years.push(resultYear); // anadimos al final del array years (para eso es push() ) el valor del año que tenemos en la posicion 1..n
      dataPerYear.push(result[resultYear].toString()); // añadimos al final de array los datos reales por año
      // llamos a la funcion de graficar (par1 eje x par2 eje y, par3 titulo de la grafica)
    graficar(years, dataPerYear, QuestionText)
  }
  //hide y mostrar grafica para que elimine el espacio que genera en el html
  const showCanva = document.getElementById("show-canvas");
  showCanva.classList.remove('hide');
  //codigo prueba 
  //let mediaContent = document.createElement('span');
  const media = window.WorldBank.getMathMedia(result);
  avg.innerHTML = `Media porcentual:${media}`;
  //indicator.appendChild(mediaContent);
});

const radioFilters = Array.from(document.getElementsByClassName('radio__filter'));
for (let radioItem in radioFilters){
  radioFilters[radioItem].addEventListener('change',(e) =>{
    e.preventDefault() //e.target()
    indicator.innerHTML = "";//Limpiar funcion
    let country = listQuestion.dataset.ciudad;// Obtenemos la ciudad de la que vamos a filtrar, es decir, obtenemos el data-ciudad del select
    let countrySelect = listQuestion.value;
    const result = window.WorldBank.filterCountry(data, country,countrySelect)//Datos de data.js
    const resultadoOrder = window.WorldBank.orderData(result, e.target.dataset.sortby, e.target.dataset.sortorder)//Datos de data.js 
    for (let resultadoYear in resultadoOrder) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
      let parrafo = document.createElement('p'); // creamos un elemento p temporal ira grafica
      parrafo.innerHTML = `<b>Año</b>: ${resultadoOrder[resultadoYear]} = ${result[resultadoOrder[resultadoYear]] || "N/A"} ` //imprimimos el año y numeros
      indicator.appendChild(parrafo); //limpiamos para que no se dublique en el html
      // onbtemos datos para grafica
    }
  })
}

function graficar(lineX, lineY, textIdocatorName){
  //console.log(datosx)
  // aqui graficamos
  //intanciamos chart y como parametro (elemento donde se va a colocar la grafica)
  let myLineChart = new window.Chart(graficaDatos, {
    type: 'line', // graficar linear
    data:{ // data general
      labels: lineX, // ["1960","1961"] asi es la estructura
      datasets: [{ 
        data: lineY, //  ["14.1", "14.4"] asi es la estructura
        label: 'Datos del indicador: ', // etiqueta que aparece al hover del cursor en cada punto de la grafica
        backgroundColor: [
          'rgba( 6, 40, 91, 0.71)'
        ],
        borderColor: [
          'rgba(17, 105, 238, 1)'  
        ],
        borderWidth: 1
        //borderColor: "#ff6182", // color del borde de la linea, en color salmon
        //fill: false // si la grafica esta rellena desde los picos hasta el eje x
      }]
    },
    options: { // opciones de la grafica
      title: { // titulo de la grafica
          display: true, // si se despliega o no
          text: textIdocatorName // le pasamos el texto de la pregunta que seleccionamos en el select
      }
    }
  }); 
  return myLineChart;
}