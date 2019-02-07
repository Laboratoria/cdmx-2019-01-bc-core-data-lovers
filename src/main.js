//const dataMexico = WORLDBANK.MEX.indicators;
//console.log(dataMexico);
// const indicator =  document.getElementById("information-filter-inner");
// const print = (indicatorName) => {
//    if(indicatorName === "Transición a la escuela secundaria, mujeres (%)"){
//     console.log(indicatorName);
//     indicator.insertAdjacentHTML("beforeend", indicatorName);
//    } 
//   //let resultado = `<p>${indicatorName}</p>`
//   //indicator.insertAdjacentHTML("beforeend",resultado);
// }

// dataMexico.forEach(element =>{
//   let indicatorName = element.indicatorName;
//   print(indicatorName);
// })

// const filtered = dataMexico.filter(element => element.indicatorName === "Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)")
// const filteredaccess = filtered;

// console.log(filteredaccess);
// indicator.insertAdjacentHTML("beforeend", filteredaccess);

// function navOcultar(){
// navMenu.classList.toggle("ocultar");
// };
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
navIcon.addEventListener('click', () =>{
  navMenu.classList.toggle('ocultar');
});
btnAbout.addEventListener('click', () =>{
  about.classList.remove('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.remove('mostrar-news');
});
btnNews.addEventListener('click', () =>{
  about.classList.add('ocultar');
  filters.classList.add('ocultar');
  navMenu.classList.add('ocultar');
  news.classList.add('mostrar-news');
});
btnFilters.addEventListener('click', () =>{
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
document.getElementById('btn_mex').addEventListener('click', () =>{
  limpiarSelect()//limpiar un select
  setearCiudad('ciudadesMex')
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona un tema</option>');
  ciudadesMex.forEach(ciudad =>{//elemento
    //inserta options en el select 
    listQuestion.insertAdjacentHTML('beforeend',`<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

//filtrar 
listQuestion.addEventListener("change", () =>{
  indicator.innerHTML = "";
  console.log(indicator)
  let selectQuestion = listQuestion.options[listQuestion.selectedIndex].text;
  let countrySelect = listQuestion.value;
  let country = listQuestion.dataset.ciudad;
  //let  tabla = '';
  if(country == 'ciudadesMex' ){
    ciudadesMex.forEach(ciudad =>{
      if(ciudad.indicatorCode == countrySelect){
        console.log(ciudad.data);
        //let resultado = (ciudad.data);
        //let resultado= JSON.stringify(ciudad.data);
        //indicator.insertAdjacentHTML("beforeend", resultado);
        for(let resultado in ciudad.data){
          
          //tabla = `<p>Año: ${resultado} = ${ciudad.data[resultado] || 0} %</p>` 
          let parrafo = document.createElement('p');
          parrafo.innerHTML = `Año: ${resultado} = ${ciudad.data[resultado] || 0} `
          //indicator.insertAdjacentHTML("beforebegin", tabla);
          indicator.appendChild(parrafo);
        }
      }
    });
  }
});

function limpiarSelect(){
  listQuestion.innerHTML = "";
}
function setearCiudad(ciudad){
  listQuestion.dataset.ciudad =  ciudad;
}

