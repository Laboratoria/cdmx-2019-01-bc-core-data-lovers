const data=  POKEMON.pokemon;
const pokeballPage=document.getElementById('pokeball-page');
const pokemonPage=document.getElementById('pokemon-page');
const pokeballButton=document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');


pokeballButton.addEventListener('click',()=> {
 pokeballPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(name,type,img) => {
    let result = `<div class=fua> <img src="${img}">  <p>${name}</p> <p>Tipo: ${type}</p></div>`
    printList.insertAdjacentHTML("beforeend",result);
    let datasort=window.
    return result;
};

data.forEach(element => {
    let name=element.name;
    let type=element.type;
    let img=element.img;
    print(name,type,img);
});
