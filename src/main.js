const enterPage = document.getElementById('enterPage');
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage');
const searchPage = document.getElementById('searchPage');
const stadisticsPage = document.getElementById('stadisticsPage');
const aboutPikapedia = document.getElementById('aboutPikapedia');
const filterButton = document.getElementById("filterButton");
const buttonBack= document.getElementById("buttonBack");
const totalData= document.getElementById("total-data");
const pokemonLight= document.getElementById("Pokemon-light");
const pokemonHe= document.getElementById("Pokemon-Heavy");

const pokemonData = POKEMON.pokemon;
const enterToPikapedia=document.getElementById("enterToPikapedia");

//Botón de entrada
enterToPikapedia.addEventListener("click", () => {

    enterPage.classList.add('hide');
    pageKanto.classList.remove('hide');
  });

  buttonBack.addEventListener("click", () => {
    pageKanto.classList.add('hide');
    enterPage.classList.add('show');
  });

filterButton.addEventListener("click",() =>{
  pageKanto.classList.add('hide');
  filterPage.classList.remove('hide');
});


 const print2=(namelight,weightLight)=>{
   let resultLight =`<p>${namelight}</p>
   <p>${weightLight}</p>`;
   pokemonLight.insertAdjacentHTML("beforeend",resultLight);

 };

 const print3=(nameHeavy,weightHeavy,image)=>{
   let resultHeavy=`<p>${nameHeavy}</p>
   <p>${weightHeavy}</p>
   <div><img src=${image}></div>`;
   pokemonHe.insertAdjacentHTML("beforeend",resultHeavy);
 };

/*const pokemonsSortWeight = () => pokemonsLight.sort((a,b) =>{
  if ((parseInt(a.weight)) > (parseInt(b.weight))){
    return 1;
  };
  if((parseInt(a.weight)) < (parseInt(b.weight))){
    return -1;
  }else{
    return 0;
  }
})*/

//Función para filtrar los pokemons más ligeros
 const pokemonsLight = pokemonData.filter( pokemon=>(parseInt(pokemon.weight) < 30));
 //pokemonsSortWeight();
 pokemonsLight.forEach(element =>{
   let namelight=element.name;
   let weightLight=element.weight;
   print2(namelight,weightLight);
 });


//Función para filtrar los pokemones más pesados
const pokemonsHeavy= pokemonData.filter(pokemon => parseInt(pokemon.weight) >30);
pokemonsHeavy.forEach(element =>{
  let nameHeavy=element.name;
  let weightHeavy=element.weight;
  let image=element.img;
  print3(nameHeavy,weightHeavy,image);
});
//retorna los tipos de pokemones 
function filtrar(id_tipo) {
  //console.log("hola");
  if (id_tipo==1){//tipo fuego
    const pokemonType= pokemonData.filter(pokemon => pokemon.type.includes("Grass"));
    pokemonType.forEach(element =>{
      console.log(element.name);
      console.log(element.type);
      
});

  }
}
console.log(filtrar(1));




const print = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
  spawn_time, multipliers, weaknesses, next_evolution,) => {
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
};


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
  let next_evolution =element.next_evolution;
  
 
  print(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers,
    weaknesses, next_evolution,);
});

