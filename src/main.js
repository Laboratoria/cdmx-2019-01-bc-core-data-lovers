const data= POKEMON.pokemon; //trae la data//
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
  const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido )
    print(pokemonFiltrados)
});
}




















































// const typeSortButton=document.getElementsByClassName('type-sort-button');//lo agregue 110219
const ascendente=document.getElementById('Ascendente');//lo agregue 110219
//const mayor=document.getElementById('Mayor');
//data.name=undefined

//lo agregue 110219
let nameSortAscend=[];
ascendente.addEventListener('click',() =>{
  data.forEach(element => {
    nameSortAscend.push(element.name)
   });
   //console.log(nameSortAscend.sort())
 })
 
// let ordenarCandies = candies.sort((a,b)=>{
// if(a.candy_count>b.candy_count){
//   return 1;
// }if(a.candy_count<b.candy_count){
//   return -1;
// } return 0;
// });

// console.log(ordenarCandies)



// mayor.addEventListener('click',() =>{
//   data.forEach(element => {
//    // console.log(element.candy_count)
//    });
   
 
//  })
 
  



//let candy = data.candy_count
//console.log(candy)
//const pokemonOrdenados = window.pokesaurius.typeSort(data,ordenElegido)




//bolahome ya estaba
pokeButtonHome.addEventListener('click',() => {
    printList.innerHTML='';
    print(data)
});

