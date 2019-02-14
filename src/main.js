
const data= window.POKEMON.pokemon; //trae la data//
const initialPage=document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage=document.getElementById('pokemon-page'); //página de pokemones//
const pokeballButton=document.getElementById('pokeball-button'); 
const printList = document.getElementById('print-list'); 
const buttonType=document.getElementsByClassName('type-button'); 
const pokeButtonHome=document.getElementById('poke-button-home'); 
const weight = document.getElementById('weight');
const counterCollection=document.getElementById('counterCollection');
const printType= document.getElementById('printType');


pokeballButton.addEventListener('click',()=> { // ocultar página de inicio//
 initialPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(data)=>{
    let totalWeight= 0;
    data.forEach(element => {
        totalWeight += parseFloat(element.weight);
        let result = `<div class="wrapper">
        <div class="pokemon-cart"> 
        <div class="pokemon-card-image">
        <img src="${element.img}">
        </div>
        <div class="box-card">
        <p>Número:${element.num}</p>
        <p>${element.name}</p>
        </div>
        </div>
        </div>`
        printList.insertAdjacentHTML("beforeend",result);
        return print;
    });
   const averageWeight= totalWeight/data.length;
   weight.innerHTML=averageWeight;
   counterCollection.innerHTML= data.length;
};

print(data)


for(let i = 0; i <buttonType.length; i++ ){
  buttonType[i].addEventListener('click',() => {
  let pokemonElegido = buttonType[i].id
  printList.innerHTML = '';
  const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido);
    print(pokemonFiltrados)
    printType.innerHTML= pokemonElegido;
});
}

//bolahome ya estaba
pokeButtonHome.addEventListener('click',() => {
    printList.innerHTML='';
    print(data)
});

