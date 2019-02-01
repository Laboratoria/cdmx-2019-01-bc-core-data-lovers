//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');

const startButton = document.getElementById('start-button');
const back = document.getElementById('back');
const imprimirLista = document.getElementById('imprimir-lista');


//Evento del boton Comenzar
startButton.addEventListener('click',()=>{
  start.classList.add('hide');
  championList.classList.remove('hide');
});

back.addEventListener('click', ()=>{
  championList.classList.add('hide');
  start.classList.remove('hide');
});


//Apartir de aquí inicia la iteración de los objetos desde lol.js
/*var string1 = "";
const dataLOL = LOL.type;
//console.log(dataLOL);
for (let type in LOL){
  let name =LOL[type].data
  string1 = LOL[type];
  console.log(LOL)
  console.log(name)
}
*/

const search = document.getElementById('search')

const buscadora = () => {
  console.log(search.value)
  for (const key in dataLol) {
    if (dataLol.hasOwnProperty(key)) {
      const element = dataLol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img;
  
      if(search.value === 'A'){
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

    if(search.value === 'A'){
      console.log('encontrado')
    }


    //console.log(element.info.defense)
    
  }
}

//console.log(string1.Aatrox);
// expected output: "123"


/*
const data =  LOL;
const print=(type) => {
    let result = `<p>Tipo: ${type}</p>`
    imprimirLista.insertAdjacentHTML("beforeend",result);
    return result;
}

for(const type in data => {
    console.log(type);
});*/
