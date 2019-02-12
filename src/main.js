
const data= window.POKEMON.pokemon; //trae la data//
const initialPage=document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage=document.getElementById('pokemon-page'); //página de pokemones//
const pokeballButton=document.getElementById('pokeball-button'); 
const printList = document.getElementById('print-list'); 
const buttonType=document.getElementsByClassName('type-button'); 
const pokeButtonHome=document.getElementById('poke-button-home'); 



pokeballButton.addEventListener('click',()=> { // ocultar página de inicio//
 initialPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(data)=>{
  
data.forEach(element => {
   let result = `<div class="wrapper">
   <div class="pokemon-cart"> 
     <div class="pokemon-card-image">
       <img src="${element.img}">
     </div>
     <div class="box-card">
       <p>Número:${element.num}</p>
       <p>${element.name}</p>
       <p>${element.candy_count}</p> <!--lo agregue 110219-->
     </div>
   </div>
     </div>`
   printList.insertAdjacentHTML("beforeend",result);
   return print;
  });
  
};

print(data)


for(let i = 0; i <buttonType.length; i++ ){
  buttonType[i].addEventListener('click',() => {
  let pokemonElegido = buttonType[i].id
  
  printList.innerHTML = '';
  const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido);
    print(pokemonFiltrados)
});
}

//bolahome ya estaba
pokeButtonHome.addEventListener('click',() => {
    printList.innerHTML='';
    print(data)
});

