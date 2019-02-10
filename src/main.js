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
  news.classList.remove('mostrar-news');
});
btnNews.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('mostrar-news');
});
btnFilters.addEventListener('click', () => {
  about.classList.add('ocultar');
  filters.classList.remove('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.remove('mostrar-news');
});

//acceder a la data de cada pais
const countryMex = WORLDBANK.MEX.indicators;
const countryPer = WORLDBANK.PER.indicators;
const countryBra= WORLDBANK.BRA.indicators;
const countryChl= WORLDBANK.CHL.indicators;

// section donde esta la informacion y el select
const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");

//datos en select para mexico
document.getElementById('btn_mex').addEventListener('click', () => {
  listQuestion.innerHTML = "";//limpiar un select
  listQuestion.dataset.ciudad = 'ciudadesMex'; // setear ciudad que se va  filtrar al hacer click
  // insertamos una opcion por default
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  countryMex.forEach(ciudad => {//elemento
    //Informacion de indicator name del select al dar click
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

document.getElementById('btn_per').addEventListener('click', () => {
  listQuestion.innerHTML = "";//limpiar un select
  listQuestion.dataset.ciudad = 'ciudadesPeru'; 
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  countryPer.forEach(ciudad => {//elemento
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

document.getElementById('btn_bra').addEventListener('click', () => {
  listQuestion.innerHTML = "";//limpiar un select
  listQuestion.dataset.ciudad = 'ciudadesBrasil'; 
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  countryBra.forEach(ciudad => {//elemento
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

document.getElementById('btn_Chl').addEventListener('click', () => {
  listQuestion.innerHTML = "";//limpiar un select
  listQuestion.dataset.ciudad = 'ciudadesChile'; 
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  countryBra.forEach(ciudad => {//elemento
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});


//filtrar 
listQuestion.addEventListener("change", () => {
  indicator.innerHTML = "";//Limpiar funcion
  //listQuestion.options[listQuestion.selectedIndex].text;
  const resultado = window.WorldBank.filterCountry(countryMex, listQuestion)//Datos de data.js
  //console.log(resultado)
  for (let resultadoAño in resultado) { //declaramos una variable y el obejto de donse encuentra lo que vamos a filtrar
    let parrafo = document.createElement('p');// creamos un elemento p temporal ira grafica
    parrafo.innerHTML = `Año: ${resultadoAño} = ${resultado[resultadoAño] || 0} ` //imprimimos el año y numeros
    indicator.appendChild(parrafo); //limpiamos para que no se dublique en el html
  }

  // indicator.innerHTML = "";
  // let selectQuestion = listQuestion.options[listQuestion.selectedIndex].text;
  // let countrySelect = listQuestion.value;
  // let country = listQuestion.dataset.ciudad;

  // if(country == 'ciudadesMex' ){
  //   ciudadesMex.forEach(ciudad =>{
  //     if(ciudad.indicatorCode == countrySelect){
  //       console.log(ciudad.data);
  //       for(let resultado in ciudad.data){

  //         let parrafo = document.createElement('p');
  //         parrafo.innerHTML = `Año: ${resultado} = ${ciudad.data[resultado] || 0} `

  //         indicator.appendChild(parrafo);
  //       }
  //     }
  //   });
  // }

});



// for(let i = 0; i<elements.length ; i++){
// elements[i].addEventListener("click", () => {
//   let valElement = elements[i].value
//   window.worldbank.filterData(ciudadesMex, valElement)
//   )};
// }