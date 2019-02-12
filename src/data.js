//En este archivo esperamos que implementes las funciones detalladas en la sección de Pruebas Unitarias.

window.worldbank = {
  chosenIndicator: {},
//Funcón que filtra por indicador 
  filter: (selectVal) => {
    for (let i = 0; i < indicators.length; i++) {
      if (selectVal === indicators[i].name) {
        chosenIndicator = indicators[i];
      }
    }
    return chosenIndicator;
  }
}

//Slides

let myIndex = 0
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
