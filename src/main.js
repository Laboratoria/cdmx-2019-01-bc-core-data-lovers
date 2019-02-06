const data=  POKEMON.pokemon;
const pokeballPage=document.getElementById('pokeball-page');
const pokemonPage=document.getElementById('pokemon-page');
const pokeballButton=document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const filterType = document.getElementById('filter');

let orderName=[];

//const resultOrderName= orderName.sort();
//console.log(resultOrderName);

//console.log
//function ejercicio2(){
  //  let prueba=(orderName.sort((a, b)=>{return a.toLowerCase().localeCompare(b.toLowerCase());}))
//console.log(prueba)
//};

pokeballButton.addEventListener('click',()=> {
 pokeballPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(toPrint) => {
   toPrint.forEach(element => {
    let result = `<div class=fua><img src="${element.img}">  <p>${element.name}</p> <p>Tipo: ${element.type}</p></div>`
    printList.insertAdjacentHTML("beforeend",result);
   });
    return result;
};


const procesarData = (data) => {
        const toPrint = window.pokesaurius.typeFilter(data)
        print(toPrint)
    }
// console.log(typeof orderName);   


filterType.addEventListener('change',()=>{
    console.log(newData)
    let userChoice= event.target.value;
    console.log(userChoice);
    const tipoFiltrado= window.pokesaurius.typeFilter(userChoice);
 });

 procesarData(data)



 