const data=  POKEMON.pokemon;
const pokeballPage=document.getElementById('pokeball-page');
const pokemonPage=document.getElementById('pokemon-page');
const pokeballButton=document.getElementById('pokeball-button');
const printList = document.getElementById('print-list');
const buttonType=document.getElementsByClassName('type-button');


pokeballButton.addEventListener('click',()=> {
 pokeballPage.classList.add('hideElement');    
 pokemonPage.classList.remove('hideElement');
});

const print=(data) => {
   data.forEach(element => {
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

const pokemonType=(arrayButtons)=> {
  arrayButtons.map(buttonType => {
  buttonType.addEventListener('click',(event) =>{
  const buttonType=event.target.id;
  console.log(buttonType);
  const newData= window.pokesaurius.filterType(pokemon,buttonType);
  return print(newData)
    });
  });
};

pokemonType(buttonType)





//const procesarData = (data) => {
  //      const toPrint = window.pokesaurius.typeFilter(data)
    //    print(toPrint)
  //  }
 //console.log(typeof orderName);   


//filterType.addEventListener('click',()=>{
  //  console.log(newData)
  //  let userChoice= event.target.value;
  //  console.log(userChoice);
  //  const tipoFiltrado= window.pokesaurius.typeFilter(userChoice);
 //});

 //procesarData(data)



 