let tableToPrint = document.getElementById('dataTable');
//let openMenuButton = document.getElementById('burger');

/*openMenuButton.addEventListener('click', ()=>{
  openNav();
});*/
let accidentsData = window.data.getData('Total_Injured_Persons_Motorcyclists');


accidentsData.forEach(element => {
  printDataInHTML(element.year, element.number);
});



function printDataInHTML(year, number){
  tableToPrint.insertAdjacentHTML('beforeend', `<tr><td>${year}</td><td>${number}</td></tr>`);
}
//alert("hola mundo");
//console.log(INJURIES);

//console.log(INJURIES[0].Year);
//pedalcyclistspage.addEventListener()

//menu
/*function openNav() {
  document.getElementById("side_menu").style.width = "250px";
}

function closeNav() {
  document.getElementById("side_menu").style.width = "0";
}*/
