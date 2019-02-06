//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const imprimirLista = document.getElementById('imprimir-lista');
const sq = document.getElementById('sq');
const rol = document.getElementsByClassName('rol');
//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');

const lolData = LOL.data;
//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
  const toPrint = window.lol.showData(lolData);
});

//Función para imprimir la data en el HTML
const print = (img, name, tags, tags2)=>{
  let result = `<div class="champion"> <img src="${img}">
  <h3> ${name} </h3> <div class="tags"> <p> ${tags} </p> <p> ${tags2} </p> </div></div>`;
  sq.insertAdjacentHTML("beforeend",result);
}

 for( let i= 0; i<rol.length; i++){
    rol[i].addEventListener("click",() => {
    let rolId = rol[i].id;

    let newArray = [];
    const arrayData = Object.values(lolData);
    arrayData.forEach(element => {
    const roles = element.tags[0];
      if(roles === rolId){
        newArray.push(element);
    }
});
  console.log(newArray);
})}







/*
tank.addEventListener('click', () => {
  const tankFilter = window.lol.searchData(lolData);
});*/


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
