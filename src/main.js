
const principalpage = document.getElementById('principalpage');
const pedestrianspage = document.getElementById('pedestrianspage');
const pedalcyclistspage = document.getElementById('pedalcyclistspage');
const busoccupantspage = document.getElementById('busoccupantspage');
const caroccupantspage = document.getElementById('caroccupantspage');
const motorcyclistspage = document.getElementById('motorcyclistspage');

const pedestrian_data = () => {
    page1.classList.add('hide');
    page2.classList.remove('hide');
  }
//función Elena 

let tableToPrint = document.getElementById('dataTable');
//let openMenuButton = document.getElementById('burger'); ? 

//función para llamar los botones e inyectar la data a los eventos
//const listeners(years, injuresByMode) = {
//función para darle a todos los botones de modos un evento de click
  //const buttonsByMode = document.getElementsByClassName('buttons_by_mode');
  //const arrayButtons = {Array.from(buttonsByMode)}; //identifica los 5 botones en el menú
};
buttons_by_mode.addEventListener("click", ()=>{
  let pedestrianValue = pedestrianspage.value;
  let pedalcyclistValue = pedalcyclistspage.value;
  let busoccupantsValue = busoccupantspage.value;
  let caroccupantsValue = caroccupantspage.value;
  let motorcyclistsValue = motorcyclistspage.value;
  let accidentsData = window.data.getDatabyMode(pedestrianValue, pedalcyclistValue, busoccupantsValue, caroccupantsValue, motorcyclistsValue);
});
//arrayButtons.forEach((button) => {
  //button.addEventListener('click', (event) => {
    //const mode =event.target.innerHTML
    //printDataHTML(element.year, element.number); //invoco la función que me va a imprimir la data
  //})
  //return = mode;
//});

let accidentsData = window.data.getDatabyMode();


accidentsData.forEach(element => {
  printDataInHTML(element.year, element.number);
});



function printDataInHTML(year, number){
  tableToPrint.insertAdjacentHTML('beforeend', `<tr><td>${year}</td><td>${number}</td></tr>`);
}