const data=  POKEMON.pokemon;
const pokeballPage=document.getElementById('pokeball-page');
const pokemonPage=document.getElementById('pokemon-page');
const pokeballButton=document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const filterType = document.getElementById('filter');
const botonFilter=Array.from(document.getElementsByClassName("boton-filter"));//clase exclusi va para js



pokeballButton.addEventListener('click',()=> {
 pokeballPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(toPrint) => {
   toPrint.forEach(element => {
    let result = `<div class="wrapper">
    <div class="pokemon-cart"> <!--body-->
      <div class="pokemon-cart-image">
        <img src="${element.img}">
      </div>
      <div class="box-cart">
        <p>Número:${element.num}</p>
        <p>${element.name}</p>
      </div>
    </div>
      </div>`
    printList.insertAdjacentHTML("beforeend",result);
   });
    return result;
};

const typePokemon=(arrayButtons)=> {
    arrayButtons.map((buttonType)=> {
        buttonType.addEventListener('click', (event)=>{ //event accede a las propiedades de un boton
        const buttonType= event.target.id; //target accede a los elementos de un boton
        const finalArrayPokemon=window.pokesaurius.typeFilter(data,buttonType);
        print(finalArrayPokemon)
        })
    })
}

typePokemon(botonFilter);






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



 