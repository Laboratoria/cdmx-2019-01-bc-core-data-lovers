//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const cardSummary = document.getElementById('card-summary');
const rol = document.getElementsByClassName('rol');
const modalChamp = document.getElementById('modal-champ');
const modalFun = document.getElementById('modal-fun');

//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');
const attackDesc = document.getElementById('attack-desc');
const attackUpw = document.getElementById('attack-upw');
const magic = document.getElementById('magic');
const defense = document.getElementById('defense');
const back = document.getElementById('back');
//Boton para el modal de curiosidades
const funFacts = document.getElementById('fun-facts');
const closeFunFacts = document.getElementById('close-fun');
const closeModal = document.getElementById('close-modal-fun')

const printModal = (champ) => {
  document.getElementById('printModal').innerHTML = `<h1>${champ.name}</h1>
  <p class="champion-title">${champ.title}</p>
  <div class="background-modal" style="background-image:url(${champ.splash})">
  <h2>${champ.tags[0]}</h2>
  <h2>${champ.tags[1]} </h2>
  <p class="champion-stats">Attack: ${champ.info.attack}</p>
  <p class="champion-stats">Defense: ${champ.info.defense}</p>
  <p class="champion-stats">Magic: ${champ.info.magic}</p>
  <p class="champion-stats">Difficulty: ${champ.info.difficulty}</p>
  <p class="champion-stats">HP: ${champ.stats.hp}</p>
  <p class="champion-stats">MP: ${champ.stats.mp}</p>
  <p class="champion-stats">Armor: ${champ.stats.armor}</p>
  <p class="champion-stats">Crit: ${champ.stats.crit}</p>
  <p class="champion-stats">Attack Damage: ${champ.stats.attackdamage}</p>
  <p class="champion-stats">Move Speed: ${champ.stats.movespeed}</p>
  </div>`;
  }

//Input para buscar por nombre
let search = document.getElementById('search');
//Variable para extraer la data
const lolData = window.LOL.data;

//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
  const newArrayChamp = window.lol.showData(lolData);
  printData(newArrayChamp);
});

//Esta variable es para seleccionar el campeón que queremos visualizar
const champion = document.getElementsByClassName('champion');

//Función para imprimir la data en el HTML
const printData = (newArrayInfo) => {
  cardSummary.innerHTML = "";
  newArrayInfo.forEach(champ => {
    let result = `<div id='${champ.name}' class="champion"> <img src="${champ.splash}">
    <h3> ${champ.name} </h3> <div class="tags"> <p> ${champ.primaryRol} </p> <p> ${champ.secondaryRol} </p> </div></div>`;
    cardSummary.insertAdjacentHTML("beforeend", result);
  })

  for (let i = 0; i < champion.length; i++) {
    champion[i].addEventListener("click", () => {
      let champElegido = champion[i].id;
      const champ = window.lol.toModal(lolData, champElegido);
      printModal(champ);
      modalChamp.classList.remove('hide');
    })
  }
}

//Función para el boton que cierra los modales de los campeones
closeFunFacts.addEventListener('click', () => {
  modalChamp.classList.add('hide');
});

//Función para el boton que cierra el modal de average
closeModal.addEventListener('click', () => {
  modalFun.classList.add('hide');
});

//Funcion para agregar el evento key up al input para filtrar por nombre
search.addEventListener('keyup', () => {
  let name2 = search.value;
  // let search3 = searchByName.toLowerCase();
  const newArrayChamp = window.lol.showData(lolData);
  let filtered = window.lol.filterByName(newArrayChamp, name2);
  if (name2 == "") {
    printData(newArrayChamp);
  } else {
    printData(filtered);
  }
});

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

//Funciones con las que se ordena de manera Descendente
attackDesc.addEventListener('click', () => {
  const newArrayChamp = window.lol.showData(lolData);
  const attackSortDesc = window.lol.sorterByAttackDesc(newArrayChamp);
  printData(attackSortDesc);
});

//Funciones con las que se ordena de manera Ascendente
attackUpw.addEventListener('click', () => {
  const newArrayChamp = window.lol.showData(lolData);
  const attackSortUpw = window.lol.sorterByAttackUpw(newArrayChamp);
  printData(attackSortUpw);
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

//Función para llamar a la función de reduce

funFacts.addEventListener('click', ()=> {
  const newArrayChamp = window.lol.showData(lolData);
  const reduce = window.lol.toReduce(newArrayChamp);
  modalFun.classList.remove('hide');
  let average = reduce / newArrayChamp.length;
  document.getElementById('average').innerHTML = average;
})
