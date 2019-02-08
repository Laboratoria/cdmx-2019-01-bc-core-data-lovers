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
const ciudadesMex = WORLDBANK.MEX.indicators;

const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");
//datos en select para mexico
document.getElementById('btn_mex').addEventListener('click', () => {
  listQuestion.innerHTML = "";//limpiar un select
  listQuestion.dataset.ciudad = 'ciudadesMex'; //setearCiudad('ciudadesMex')
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  ciudadesMex.forEach(ciudad => {//elemento
    //inserta options en el select 
    listQuestion.insertAdjacentHTML('beforeend', `<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

//filtrar 
listQuestion.addEventListener("change", () => {
  indicator.innerHTML = "";
 
  //let selectQuestion = listQuestion.options[listQuestion.selectedIndex].text;
  const resultado = window.WorldBank.filterCountry(ciudadesMex, listQuestion)
  console.log(resultado)
  for (let resultadoAño in resultado) {
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Año: ${resultadoAño} = ${resultado[resultadoAño] || 0} `
    indicator.appendChild(parrafo);
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



const bra = document.getElementById('BRA');
const indicador = document.getElementById('indicador');

bra.addEventListener('click', () => {
  const res = window.prueba.myfuncion()
  indicador.innerHTML = res
  alert("si")
});