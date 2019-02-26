const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido = document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');

const pantalla2 = document.getElementById('pantalla2');
const showPokemons = document.getElementById('showPokemons');
const root = document.getElementById('root');
const cajitas = document.getElementsByClassName('cajitas')
// const dataPokemon = window.POKEMON.pokemon;
const forWeight = document.getElementById("forWeight");
const url = ('./data/pokemon/pokemon.json')

  const newData = JSON.parse(localStorage.getItem("pokemoncitos"))
btngetName.addEventListener("click", () => {

  const name = trainerName.value;
  bienvenido.innerHTML = '¡Hola entrenador ' + name + '. Bienvenido!';
  sectionName.style.display = "none";
  pantalla2.style.display = "block"





})





const printData = (data) => {
  root.innerHTML = '';

  data.forEach(pokemon => {
    let namePokemon = `<figure class="tarjeta"> <h1> ${pokemon.num} </h1> <h2> ${pokemon.name} </h2>    <div> <img = class "imageBox" src ="${pokemon.img}"> </div>
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

    root.insertAdjacentHTML("beforeend", namePokemon);
  })
}



for (let i = 0; i < cajitas.length; i++) {
  cajitas[i].addEventListener('click', () => {
    let elementPokemon = cajitas[i].id;
    let pokemonType = window.pokemon.filterPokemons(newData, elementPokemon);
    window.pokemon.ordenarPorNombre(pokemonType);
    printData(pokemonType);

  });


}


forWeight.addEventListener("click",() => {
  const newData = JSON.parse(localStorage.getItem("pokemoncitos"))
  const pokemonTotalPeso =  window.pokemon.totalWeightPokemon(newData);
  root.innerHTML= pokemonTotalPeso;




});


showPokemons.addEventListener("click",() => {
  const newData = JSON.parse(localStorage.getItem("pokemoncitos"))
   printData(newData)

})






fetch(url)
  .then(response => response.json())
  .then(printJson => printJson.pokemon)
  .then(data => { //window.pokemon(data
    localStorage.setItem ("pokemoncitos", JSON.stringify (data))
    

  })

/* .then (filter=> filterPokemons (filter))
  console.log(filterPokemons(filter))
.then (sort => ordenarPorNombre(sort))
.then (wieght =>totalWeightPokemon(wieght))

*/
  //.catch(error => console.error(error));
