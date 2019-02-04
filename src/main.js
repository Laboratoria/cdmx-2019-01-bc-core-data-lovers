//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');

const startButton = document.getElementById('start-button');
const back = document.getElementById('back');
const imprimirLista = document.getElementById('imprimir-lista');
const es = document.getElementById('es');



//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
});

back.addEventListener('click', () => {
  championList.classList.add('hide');
  start.classList.remove('hide');
});


//Apartir de aquí inicia la iteración de los objetos desde lol.js


/*const search = document.getElementById('search')
const buscadora = () => {
  console.log(search.value)
  for (const key in dataLol) {
    if (dataLol.hasOwnProperty(key)) {
      const element = dataLol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img;

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

const lolData = LOL.data;

const print = (img, name, tags, tags2)=>{
  let result = `<a href="#card"> <div class="champion"> <div class="padre"> <img src="${img}">
  <h3> ${name} </h3></div> <div class="tags"> <p> ${tags} </p> <p> ${tags2} </p> </div></div></a>`;
  es.insertAdjacentHTML("beforeend",result);
}
for (const key in lolData) {
  if (lolData.hasOwnProperty(key)) {

    const element = lolData[key];
    let img = element.img;
    let name = element.name;
    let tags = element.tags;
    let tags2 = element.tags;
    print(img, name, tags[0], tags2[1]);
  }
}
