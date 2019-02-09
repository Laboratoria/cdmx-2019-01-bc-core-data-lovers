//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const cardSummary = document.getElementById('card-summary');
const rol = document.getElementsByClassName('rol');
//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');
const attack = document.getElementById('attack');
const magic = document.getElementById('magic');
const defense = document.getElementById('defense');
const back = document.getElementById('back');

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

//Esta función es para seleccionar el rol por el cual se va a filtrar
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

attack.addEventListener('click', () => {
  const arr = window.lol.showData(lolData);
  const attackSort = window.lol.sorterByAttack(arr);
  print(attackSort);
});

magic.addEventListener('click', () => {
  const arr = window.lol.showData(lolData);
  const magicSort = window.lol.sorterByMagic(arr);
  print(magicSort);
});

defense.addEventListener('click', () => {
  const arr = window.lol.showData(lolData);
  const defenseSort = window.lol.sorterByDefense(arr);
  print(defenseSort);
});

back.addEventListener('click', () => {
  championList.classList.add('hide');
  start.classList.remove('hide');
});
