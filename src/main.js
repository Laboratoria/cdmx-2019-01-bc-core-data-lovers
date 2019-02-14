//const pokemon = document.getElementById("POKEMON");
const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido= document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');
const pantalla2=document.getElementById('pantalla2');
//const showPokemons = document.getElementById('showPokemons');
const root =  document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas')
const dataPokemon = POKEMON.pokemon;
//const Water = document.getElementById('Water');
//const Flying = document.getElementById('Flying')

btngetName.addEventListener ("click",() => {
const name = trainerName.value;
bienvenido.innerHTML = '¡Hola entrenador '  +  name  +'. Bienvenido!';
sectionName.style.display ="none";
pantalla2.style.display  ="block"
 })

const printData = (data) => {
  root.innerHTML = '';
  data.forEach( pokemon => {
    let namePokemon = `<figure class="tarjeta"> <h1> ${pokemon.num} </h1> <h2> ${pokemon.name} </h2>
    <div> <img = class "imageBox" src ="${pokemon.img}"> </div>
    <p> TYPE: ${pokemon.type} </p>
    <p>HEIGHT:${pokemon.height}</p>
    <p>WEIGHT:${pokemon.weight}</p>
    <p>CANDY:${pokemon.candy}</p>
    <p>CANDY COUNT:${pokemon.candy_count}</p>
    <p>EGG: ${pokemon.egg}</p>
    <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
    <p>SPAWN TIME:${pokemon.spawn_time}</p>
    <p>MULTIPLIERS:${pokemon.multipliers}</p>
    <p>WEAKNESSES:${pokemon.weaknesses}</p> </figure>
    `
    root.insertAdjacentHTML("beforeend",namePokemon);

  })}
  // dataPokemon.forEach(element =>{
    //  let num = element.num;
    //  let name = element.name;
    //  let img = element.img;
    //  let type = element.type;
    //  let height = element.height;
    //  let weight = element.weight;
    //  let candy = element.candy;
    //  let candy_count= element.candy_count;
    //  let egg = element.egg;
    //  let spawn_chance = element.spawn_chance;
    //  let avg_spawns = element.avg_spawns;
    //  let spawn_time = element.spawn_time;
    //  let multipliers = element.multipliers;
    //  let weaknesses = element.weaknesses;
    //  printPokemon(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers, weaknesses);
    // })
//Water.addEventListener("click", ()=>{
  //let elementPokemon = "Water"


//})

for (let i = 0; i< cajitas.length; i++){
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id
    let pokemonType = window.pokemon.filterPokemons(dataPokemon,elementPokemon);
 window.pokemon.ordernarPorNombre(pokemonType);
printData(pokemonType);

  })
}
