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
    let result = `<section> <img src="${img}"> nombre: ${name} Tipo: ${type}</section>`
    printList.insertAdjacentHTML("beforeend",result);
    return result;
};

data.forEach(element => {
    let name=element.name;
    let type=element.type;
    let img=element.img;
    print(name,type,img);
});
