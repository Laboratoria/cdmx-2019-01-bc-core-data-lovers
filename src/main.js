//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const cardSummary = document.getElementById('card-summary');
const rol = document.getElementsByClassName('rol');
//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');

const lolData = LOL.data;
//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
  const arr = window.lol.showData(lolData);
  print(arr);
});

//Función para imprimir la data en el HTML
const print = (arr) => {
  cardSummary.innerHTML = "";
  arr.forEach(champ => {
    let result = `<div class="champion"> <img src="${champ.splash}">
    <h3> ${champ.name} </h3> <div class="tags"> <p> ${champ.primaryRol} </p> <p> ${champ.secondaryRol} </p> </div></div>`;
    cardSummary.insertAdjacentHTML("beforeend", result);
  })
}

const selectRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("click", () => {
      let rolId = rol[i].id;
      const arr = window.lol.showData(lolData);
      const arrayFiltered = window.lol.filterByRol(rolId, arr);
      print(arrayFiltered);
    })
  }
}

selectRol();

