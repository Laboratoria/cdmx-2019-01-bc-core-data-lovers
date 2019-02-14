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
//Input para buscar por nombre
let search = document.getElementById('search');

const lolData = window.LOL.data;
//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
  const newArrayChamp = window.lol.showData(lolData);
  printData(newArrayChamp);
});

//Función para imprimir la data en el HTML
const printData = (newArrayInfo) => {
  cardSummary.innerHTML = "";
  newArrayInfo.forEach(champ => {
    let result = `<div class="champion"> <img src="${champ.splash}">
    <h3> ${champ.name} </h3> <div class="tags"> <p> ${champ.primaryRol} </p> <p> ${champ.secondaryRol} </p> </div></div>`;
    cardSummary.insertAdjacentHTML("beforeend", result);
  })
}

//Funcion para agregar el evento key up al input para filtrar por nombre
search.addEventListener('keyup', () => {
  let name2 = search.value;
  // let search3 = searchByName.toLowerCase();
  const newArrayChamp = window.lol.showData(lolData);
  let filtered = window.lol.filterByName(newArrayChamp, name2);
  if (name2 == "" ) {
    printData(newArrayChamp);
  } else {
      printData(filtered);
}
})

//Esta función es para seleccionar el rol por el cual se va a filtrar
const selectRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("click", () => {
      let rolId = rol[i].id;
      const newArrayChamp = window.lol.showData(lolData);
      const arrayFiltered = window.lol.filterByRol(newArrayChamp, rolId);
      printData(arrayFiltered);

    })
  }
}

selectRol();

attack.addEventListener('click', () => {
  const newArrayChamp = window.lol.showData(lolData);
  const attackSort = window.lol.sorterByAttack(newArrayChamp);
  printData(attackSort);
});

magic.addEventListener('click', () => {
  const newArrayChamp = window.lol.showData(lolData);
  const magicSort = window.lol.sorterByMagic(newArrayChamp);
  printData(magicSort);
});

defense.addEventListener('click', () => {
  const newArrayChamp = window.lol.showData(lolData);
  const defenseSort = window.lol.sorterByDefense(newArrayChamp);
  printData(defenseSort);
});

back.addEventListener('click', () => {
  championList.classList.add('hide');
  start.classList.remove('hide');
});
