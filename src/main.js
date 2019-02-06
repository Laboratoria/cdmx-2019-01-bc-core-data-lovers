const data=  POKEMON.pokemon;
const pokeballPage=document.getElementById('pokeball-page');
const pokemonPage=document.getElementById('pokemon-page');
const pokeballButton=document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const sort = document.getElementById('sort');

const sortear = () => {
    orderName.sort()
    //console.log(event.target.value)
}
console.log(sortear)


pokeballButton.addEventListener('click',()=> {
 pokeballPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(name,type,img) => {
    let result = `<div class=fua> <img src="${img}">  <p>${name}</p> <p>Tipo: ${type}</p></div>`
    printList.insertAdjacentHTML("beforeend",result);
    return result;
};

let orderName=[];
let orderNamesi=[];
data.forEach(element => {
    let name=element.name;
    let type=element.type;
    let img=element.img;
    orderName.push(name);
    print(name,type,img);
});
// console.log(typeof orderName);   
console.log(orderName)


 sort.addEventListener('change', sortear)