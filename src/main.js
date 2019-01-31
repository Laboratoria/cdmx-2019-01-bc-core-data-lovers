const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');
const totalData= document.getElementById("total-data");
const pokemonData = POKEMON.pokemon

//Botón de entrada
enterToPikapedia.addEventListener("click", () => {
    page1.classList.add('hide');
    page2.classList.remove('hide');
  })

  btn5.addEventListener("click", () => {
    page2.classList.add('hide');
    page1.classList.add('show');
  })

  const print =(namePokemons, num, type)=>{
    let result=`<p> ${namePokemons}</p>
    <p>${num}</p>
    <p>${type}</p>`;
    totalData.insertAdjacentHTML("beforeend", result);
  
  }
  
 pokemonData.forEach(element =>{
  let namePokemons= element.name;
  let num =element.num;
  let type = element.type;
   print(namePokemons, num, type);
   
 });

 


 /*const pokemons=pokemonData.map( pokemons=> `${pokemons.name} ${pokemons.num} ${pokemons.type} `);
 print(pokemons)
 console.log(pokemons);*/



