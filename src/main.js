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



<<<<<<< HEAD
// const orderByAttack = {lolData.info.attack};
// numbers.sort(compare = (a, b)=>  {
//   return a - b;
// });
// console.log(orderByAttack);
// 
// orderByAttack();
//
//
//
//
// var maxSpeed = {
//     car: 300,
//     bike: 60,
//     motorbike: 200,
//     airplane: 1000,
//     helicopter: 400,
//     rocket: 8 * 60 * 60
// };
//
// var sortable = [];
// for (const vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }
// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });

//[["bike", 60], ["motorbike", 200], ["car", 300],

//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

/*
tank.addEventListener('click', () => {
  const tankFilter = window.lol.searchData(lolData);
});*/


=======
>>>>>>> origin/master
//Apartir de aquí inicia la iteración de los objetos desde lol.js
/*const search = document.getElementById('search')
const buscadora = () => {
  console.log(search.value)
  for (const key in dataLol) {
    if (dataLol.hasOwnProperty(key)) {
      const element = dataLol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img; for( let i= 0; i<rol.length;i++){
              rol[i].addEventListener("click",() => {
                let rolId = rol[i].id;
                let nuevoArreglo = [];
                const arrayData = Object.values(dataLol);
                arrayData.forEach(element => {
                  const roles = element.tags[0];
                  if(roles === rolId ){
                    nuevoArreglo.push(element);
                  }
                });
                console.log(nuevoArreglo);
              })}

      if (search.value === 'A') {
        console.log(name)
      }
      //console.log(element.info.defense)
    }
  }
}

search.addEventListener('keyup', buscadora)

console.log(LOL.data.Aatrox)

const dataLol = LOL.data
for (const key in dataLol) {
  if (dataLol.hasOwnProperty(key)) {
    const element = dataLol[key];
    let name = element.name;
    let tag = element.tags[0];
    let img = element.img;

   //se usa para el buscado
    if (search.value === 'A') {
      console.log('encontrado')
    }
    //console.log(element.info.defense)
  }
}
*/
