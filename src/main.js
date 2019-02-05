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



//acceder a la data de cada pais
const ciudadesMex = WORLDBANK.MEX.indicators;

const indicator = document.getElementById("information-filter-inner");
const listQuestion = document.getElementById("list-question");
//i
document.getElementById('btn_mex').addEventListener('click', () =>{
  limpiarSelect()
  setearCiudad('ciudadesMex')
  listQuestion.insertAdjacentHTML('beforeend', '<option value="">Selecciona una pregunta</option>');
  ciudadesMex.forEach(ciudad =>{
    listQuestion.insertAdjacentHTML('beforeend',`<option value="${ciudad.indicatorCode}">${ciudad.indicatorName}</option>`);
  });
});

//filtrar 
listQuestion.addEventListener("change", () =>{
  let selectQuestion = listQuestion.options[listQuestion.selectedIndex].text;
  let countrySelect = listQuestion.value;
  let country = listQuestion.dataset.ciudad;
  if(country == 'ciudadesMex' ){
    ciudadesMex.forEach(ciudad =>{
      if(ciudad.indicatorCode == countrySelect){
        console.log(ciudad.data);
        let resultado = ciudad.data;
        indicator.insertAdjacentHTML("beforeend", resultado);
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

