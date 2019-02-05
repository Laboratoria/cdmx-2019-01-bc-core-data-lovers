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
const navMenu = document.getElementById("nav-menu");

function navOcultar(){
navMenu.classList.toggle("ocultar");
};

//acceder a la data de cada pais
const ciudadesMex = WORLDBANK.MEX.indicators;

const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");
//datos en select para mexico
document.getElementById('btn_mex').addEventListener('click', () =>{
  limpiarSelect()//limpiar un select
  setearCiudad('ciudadesMex')
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona una pregunta</option>');
  ciudadesMex.forEach(ciudad =>{//elemento
    //inserta options en el select 
    listQuestion.insertAdjacentHTML('beforeend',`<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

//filtrar 
listQuestion.addEventListener("change", () =>{
  indicator.innerHTML = " ";
  let selectQuestion = listQuestion.options[listQuestion.selectedIndex].text;
  let countrySelect = listQuestion.value;
  let country = listQuestion.dataset.ciudad;
  if(country == 'ciudadesMex' ){
    ciudadesMex.forEach(ciudad =>{
      if(ciudad.indicatorCode == countrySelect){
        console.log(ciudad.data);
        let resultado = (ciudad.data);
        //let resultado= JSON.stringify(ciudad.data);
        //indicator.insertAdjacentHTML("beforeend", resultado);
        for(let resultado in ciudad.data){
          let tabla =`<p>Año: ${resultado} = ${ciudad.data[resultado] }%</p>` 
          indicator.insertAdjacentHTML("beforebegin", tabla);
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

