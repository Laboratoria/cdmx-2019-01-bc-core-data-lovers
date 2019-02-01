const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');

const btn4 = document.getElementById("btn4");
const totalData= document.getElementById("total-data");
const pokemonLi= document.getElementById("Pokemon-light");
const pokemonHe= document.getElementById("Pokemon-Heavy");

const pokemonData = POKEMON.pokemon;

//Botón de entrada
enterToPikapedia.addEventListener("click", () => {

    page1.classList.add('hide');
    page2.classList.remove('hide');
  })

  btn5.addEventListener("click", () => {
    page2.classList.add('hide');
    page1.classList.add('show');
  })

btn4.addEventListener("click",() =>{
  page2.classList.add('hide');
  page3.classList.remove('hide');
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

 const print2=(namelight,weightLight)=>{
   let resultLight =`<p>${namelight}</p>
   <p>${weightLight}</p>`;
   pokemonLi.insertAdjacentHTML("beforeend",resultLight);

 }

 const print3=(nameHeavy,weightHeavy)=>{
   let resultHeavy=`<p>${nameHeavy}</p>
   <p>${weightHeavy}</p>`;
   pokemonHe.insertAdjacentHTML("beforeend",resultHeavy);
 }

 /*pokemonData.forEach(element =>{
   let pokemonsLight=parseInt(element.weight);
   if (pokemonsLight<30);{
   print2(pokemonsLight)
   }
   console.log(pokemonsLight);
 });*/

//Función para filtrar los pokemons más ligeros
 const pokemonsLight = pokemonData.filter( pokemon=>(parseInt(pokemon.weight) < 30));
 pokemonsLight.forEach(element =>{
   let namelight=element.name;
   let weightLight=element.weight;
   print2(namelight,weightLight);
 });

const pokemonsHeavy= pokemonData.filter(pokemon => parseInt(pokemon.weight) >30);
pokemonsHeavy.forEach(element =>{
  let nameHeavy=element.name;
  let weightHeavy=element.weight;
  print3(nameHeavy,weightHeavy);
});
 


 /*const pokemons=pokemonData.map( pokemons=> `${pokemons.name} ${pokemons.num} ${pokemons.type} `);
 print(pokemons)
 console.log(pokemons);*/




  page1.classList.add('hide');
  page2.classList.remove('hide');
})

btn5.addEventListener("click", () => {
  page2.classList.add('hide');
  page1.classList.add('show');
})

const print = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
  spawn_time, multipliers, weaknesses, next_evolution) => {
  let result = `<h1>${num}</h1> 
        <h2>${name}</h2>
        <div><img src=${img}></div>
        <p> TYPE : ${type}</p>
        <p> HEIGHT : ${height}</p>
        <p> WEIGHT: ${weight}</p>
        <p>CANDY: ${candy}</p>
        <p>CANDY COUNT: ${candy_count}</p>
        <p>EGG: ${egg}</p>
        <p>SPAWN CHANCE: ${spawn_chance}</p>
        <p>AVERANGE SPAWNS: ${avg_spawns}</p>
        <p>SPAWN TIME: ${spawn_time}</p>
        <p>MULTIPLIERS: ${multipliers}</p>
        <p>WEAKNESSES: ${weaknesses}</p>
        <p>NEXT EVOLUTION: ${next_evolution}</p>`;
  totalData.insertAdjacentHTML("beforeend", result);
}


pokemonData.forEach(element => {
  let num = element.num;
  let name = element.name;
  let img = element.img;
  let type = element.type;
  let height = element.height;
  let weight = element.weight;
  let candy = element.candy;
  let candy_count = element.candy_count;
  let egg = element.egg;
  let spawn_chance = element.spawn_chance;
  let avg_spawns = element.avg_spawns;
  let spawn_time = element.spawn_time;
  let multipliers = element.multipliers;
  let weaknesses = element.weaknesses;
  let next_evolution = element.next_evolution;
  print(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers,
    weaknesses, next_evolution);
});




/*const pokemons=pokemonData.map( pokemons=> `${pokemons.name} ${pokemons.num} ${pokemons.type} `);
print(pokemons)
console.log(pokemons);*/

