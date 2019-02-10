const data= POKEMON.pokemon; //trae la data//
const initialPage=document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage=document.getElementById('pokemon-page'); //página de pokemones//
const pokeballButton=document.getElementById('pokeball-button'); 
const printList = document.getElementById('print-list'); 
const buttonType=document.getElementsByClassName('type-button'); 
const imgPokebolaChica=document.getElementById('img-pokebola-chica'); 

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
     </div>
   </div>
     </div>`
   printList.insertAdjacentHTML("beforeend",result);
   return print;
  });
};

print(data)

for(let i = 0; i <buttonType.length; i++ ){
  // console.log(buttonType[i])
  buttonType[i].addEventListener('click',() => {
  let pokemonElegido = buttonType[i].id
  printList.innerHTML = '';
  const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido )
    print(pokemonFiltrados)
})
}


