
const data= window.POKEMON.pokemon; //trae la data//
const initialPage=document.getElementById('initial-page'); //pagina de inicio//
const pokemonPage=document.getElementById('pokemon-page'); //página de pokemones//
const pokeballButton=document.getElementById('pokeball-button'); 
const printList = document.getElementById('print-list'); 
const buttonType=document.getElementsByClassName('type-button'); 
const buttonHome=document.getElementById('button-home'); 
const weight = document.getElementById('weight');
const counterCollection=document.getElementById('counterCollection');
const printType= document.getElementById('printType');
const alphabeticOrderButton=document.getElementById('totales');
const menuToogle=document.getElementById('menu-toogle');
const aside=document.getElementById('aside');
const printIndividualCard=document.getElementById('print-individual-card');



pokeballButton.addEventListener('click',()=> { // ocultar página de inicio//
 initialPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(data)=>{
    let totalWeight= 0;
    data.forEach(element => {
        totalWeight += parseFloat(element.weight);
        let result = `<button class="wrapper">
        <div class="pokemon-card"> 
        <div class="pokemon-card-image">
        <img src="${element.img}">
        </div>
        <div class="box-card">
        <p>Número:${element.num}</p>
        <p>${element.name}</p>
        </div>
        </div>
        </button>`
        printList.insertAdjacentHTML("beforeend",result);
        return print;
    });
   const averageWeight= totalWeight/data.length;
   weight.innerHTML=averageWeight.toFixed(2);
   counterCollection.innerHTML= data.length;
};

print(data)


for(let i = 0; i <buttonType.length; i++ ){
  buttonType[i].addEventListener('click',() => {
    aside.classList.add('hideElement');  
  let pokemonElegido = buttonType[i].id
  printList.innerHTML = '';
  const pokemonFiltrados = window.pokesaurius.typeFilter(data, pokemonElegido);
    print(pokemonFiltrados)
    printType.innerHTML= pokemonElegido;
});
}

buttonHome.addEventListener('click',() => {
    printList.innerHTML='';
    print(data)
});

alphabeticOrderButton.addEventListener('click',()=> {
    printList.innerHTML='';
    const resultSortByName= window.pokesaurius.sortByName(data);
    print(resultSortByName);

});

menuToogle.addEventListener('click',()=>{
    aside.classList.remove('hideElement');
});

const printPokemonValues=(data)=>{
data.forEach(element => {
        let result= `<div class="wrapper2">
        <div class="pokemon-card"> 
              <div class="pokemon-card-image">
                <img class=${element.img}>
      </div>
          <div class="box-card">
              <p>Nombre:"${element.name}"</p> <p>Evoluciones:"${element.next_evolution}"</p>
            <p>Tipo:"${element.type}"</p> <p>Debilidades:"${element.weaknesses}"</p>
              <p>Candies:"${element.candies}"</p>
           <p> Altura:"${element.height}" Peso:${element.weight} </p>
              </div>
              </div>
              </div>`
        printIndividualCard.innerHTML=result;      
} );
    
};
printPokemonValues()



