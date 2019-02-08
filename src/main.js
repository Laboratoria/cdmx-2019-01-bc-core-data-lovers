const enterPage = document.getElementById('enterPage');
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage');
const searchPage = document.getElementById('searchPage');
const stadisticsPage = document.getElementById('stadisticsPage');
const aboutPikapedia = document.getElementById('aboutPikapedia');
const filterButton = document.getElementById("filterButton");
const totalData = document.getElementById("total-data");
const pokemonLight = document.getElementById("Pokemon-light");
const pokemonHe = document.getElementById("Pokemon-Heavy");
const pokemonData = POKEMON.pokemon;
const buttonBack = document.getElementById("buttonBack");
const pokemonSm = document.getElementById('pokemon-Small');
const pokemonMedium = document.getElementById('pokemon-Medium');
const pokemonTall = document.getElementById('pokemon-Tall');
const buttonBackFilterPage = document.getElementById('buttonBackFilterPage');
const buttonSearchPokemon = document.getElementById('buttonSearchPokemon');
const pokemonSortHeight = document.getElementById('pokemon-Sort-Height');
const pokemonSortWeight = document.getElementById('pokemon-Sort-Weight');
const enterToPikapedia=document.getElementById("enterToPikapedia");
const pokemonTypeAll = document.getElementById("pokemonTypeAll");
const checkboxWeightLight = document.getElementById("checkboxWeightLight");
const checkboxWeightHeavy = document.getElementById("checkboxWeightHeavy");
const checkboxWeightAscending = document.getElementById("checkboxWeightAscending");
const checkboxWeightDescending = document.getElementById("checkboxWeightDescending")
const checkboxHeightSmall = document.getElementById("checkboxHeightSmall");
const checkboxHeightMedium = document.getElementById("checkboxHeightMedium");
const checkboxHeightTall = document.getElementById("checkboxHeightTall");
const checkboxHeightAscending = document.getElementById("checkboxHeightAscending")
const FiltersType = document.getElementById("FiltersType");
const ButtonGround = document.getElementById("ButtonGround");
const ButtonRock = document.getElementById("ButtonRock");
const ButtonElectric = document.getElementById("ButtonElectric");
const ButtonBug = document.getElementById("ButtonBug");
const ButtonNormal = document.getElementById("ButtonNormal");
const ButtonFighting = document.getElementById("ButtonFighting");
const ButtonDragon = document.getElementById("ButtonDragon");
const checkboxType = document.getElementById('checkboxType');
const checkboxTypePage = document.getElementById('checkboxTypePage')
const buttonPokemonFire = document.getElementById('buttonPokemonFire');
const buttonPokemonGrass=document.getElementById('buttonPokemonGrass');
const buttonPokemonIce=document.getElementById('buttonPokemonIce');
const buttonPokemonPoison=document.getElementById('buttonPokemonPoison');
const buttonPokemonFlying=document.getElementById('buttonPokemonFlying');
const buttonPokemonPsychic=document.getElementById('buttonPokemonPsychic');
const buttonPokemonWater=document.getElementById('buttonPokemonWater');
const typePokemonPage=document.getElementById('typePokemonPage');



//Botón de entrada
enterToPikapedia.addEventListener("click", () => {

  enterPage.classList.add('hide');
  pageKanto.classList.remove('hide');
});

buttonBack.addEventListener("click", () => {
  pageKanto.classList.add('hide');
  enterPage.classList.add('show');
});

filterButton.addEventListener("click", () => {
  pageKanto.classList.add('hide');
  filterPage.classList.remove('hide');
});

buttonBackFilterPage.addEventListener("click", () => {
  filterPage.classList.add('hide');
  pageKanto.classList.remove('hide');
});

buttonSearchPokemon.addEventListener("click", () => {
  pageKanto.classList.add('hide');
  searchPage.classList.remove('hide');
});

checkboxTypeFilter.addEventListener("click", () =>{
  filterPage.classList.add("hide");
  typePokemonPage.classList.remove("hide");

});

const printPokemonWeight= (name, img, weight) => {
  let resultLight = `<h1 class="nameLight">${name}</h1>
   <div><img src=${img}></div>
   <p class="pokemonWeightLight">WEIGHT: ${weight}</p>`; 
   pokemonLight.insertAdjacentHTML("beforeend", resultLight);
};

const printPokemonHeight= (name, img, height) => {
  let resultSmall = `<h1>${name}</h1>
   <div><img src=${img}></div>
   <p>HEIGHT: ${height}</p>`;
  pokemonSm.insertAdjacentHTML("beforeend", resultSmall);
};

const printPokemonSortByHeight=  (name, img, sortHeight) => {
  let resultSort = `<h1>${name}</h1>
   <div><img src=${img}></div>
   <p>HEIGHT: ${sortHeight}</p>`;
  pokemonSortHeight.insertAdjacentHTML('beforeend', resultSort);
};

const printPokemonSortByWeight=  (name, img, sortWeight) => {
  let resultSort = `<h1>${name}</h1>
  <div><img src=${img}></div>
  <p>WEIGHT: ${sortWeight}</p>`;
  pokemonSortWeight.insertAdjacentHTML('beforeend', resultSort);
};

const printData = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
  spawn_time, multipliers, weaknesses, next_evolution, ) => {
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

const printAll=(namePokemonAll, img, typePokemonAll) => {
  let resultTypeAll = `<h1>${namePokemonAll}</h1>
   <div><img src=${img}></div>
   <p>Type: ${typePokemonAll}</p>`;
   pokemonTypeAll.insertAdjacentHTML("beforeend",resultTypeAll);
};

checkboxWeightLight.addEventListener("click",()=>{
  const pokemonsLight = window.printPokemon.filterByWeight(pokemonData);
 pokemonsLight.forEach(element => {
  let name = element.name;
  let img = element.img;
  let weight = element.weight;
  printPokemonWeight(name, img, weight);
  
});

});

checkboxWeightHeavy.addEventListener("click",() =>{
  const pokemonsHeavy = window.printPokemon.filterByWeight(pokemonData);
pokemonsHeavy.forEach(element => {
  let name = element.name;
  let img = element.img;
  let weight = element.weight;
  printPokemonWeight(name, img, weight);
});
});

checkboxHeightSmall.addEventListener("click", () =>{
  const pokemonsSmall = window.printPokemon.filterByHeightSmall(pokemonData);
pokemonsSmall.forEach(element => {
  let name = element.name;
  let img = element.img;
  let height = element.height;
  printPokemonHeight(name, img, height);
});
});

checkboxHeightMedium.addEventListener("click", () =>{
  const pokemosMedium = window.printPokemon.filterByHeightMedium(pokemonData);
pokemosMedium.forEach(element => {
  let nameMedium = element.name;
  let img = element.img;
  let heightMedium = element.height;
  printPokemonHeight(nameMedium, img, heightMedium);
});
});

checkboxHeightTall.addEventListener("click", ()=>{
  const pokemonsTall =window.printPokemon.filterByHeightTall(pokemonData);
pokemonsTall.forEach(element => {
  let nameTall = element.name;
  let img = element.img;
  let heightTall = element.height;
  printPokemonHeight(nameTall, img, heightTall);
});
});




checkboxHeightAscending.addEventListener("click", () =>{
const pokemonSortHeight=window.printPokemon.sortByHeight(pokemonData);
  pokemonSortHeight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let sortHeight = element.height;
    printPokemonSortByHeight(name, img, sortHeight);
  });
  });

checkboxWeightAscending.addEventListener("click", () => {

  const pokemonsSortWeight=window.printPokemon.SortByWeight(pokemonData);
  pokemonsSortWeight.forEach(element => {
    let nameSortByWeight = element.name;
    let img = element.img;
    let weightSort = element.weight;
    printPokemonSortByWeight(nameSortByWeight, img, weightSort);
  });
});




buttonPokemonFire.addEventListener("click", () => {
  filtrar(1);
});

buttonPokemonGrass.addEventListener("click", () => {
  filtrar(2);
});

buttonPokemonIce.addEventListener("click",() => {
  filtrar(3);
});
buttonPokemonPoison.addEventListener("click", () => {
  filtrar(4);
})

buttonPokemonFlying.addEventListener("click", () => {
  filtrar(5);
})

buttonPokemonPsychic.addEventListener("click", () =>{
  filtrar(6);
})

buttonPokemonWater.addEventListener("click", () =>{
  filtrar(7);
})
ButtonGround.addEventListener("click", () => {
  filtrar(8);
  
});

ButtonRock.addEventListener("click", () => {
  filtrar(9);
});

ButtonElectric.addEventListener("click", () => {
  filtrar(10);
});

ButtonBug.addEventListener("click", () =>{
  filtrar(11);
});

ButtonNormal.addEventListener("click", () => {
  filtrar(12);
});

ButtonFighting.addEventListener("click", () => {
  filtrar(13);
});

ButtonDragon.addEventListener("click", () => {
  filtrar(14);
})

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
  printData(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers,
    weaknesses, next_evolution);
});


//Función para ordenar los pokémons por peso


 
/*
//Función para ordenar los pokémons de manera descendente. (falta imprimirlos)
pokemonsSortHeightDescending=pokemonsSortHeight.reverse();
console.log(pokemonsSortHeightDescending);


*/
 




//retorna los tipos de pokemones gaby 
function filtrar(id_tipo) {
  
  if (id_tipo == 1) { //tipo fuego
    const fireType= "Fire";
    const pokemonType=window.printPokemon.pokemonFilterType(pokemonData,fireType);
    pokemonType.forEach(element => {
      let namePokemonFire = element.name;
      let img = element.img;
      let typePokemonFire = element.type;
      printAll(namePokemonFire,img,typePokemonFire);
  });   
}else if(id_tipo==2){//tipo grass
    const grassType ="Grass";
    const pokemonType= window.printPokemon.pokemonFilterType(pokemonData,grassType);
    pokemonType.forEach(element =>{
      let namePokemonGrass = element.name;
      let typePokemonGrass = element.type;
      let img = element.img;
      printAll(namePokemonGrass, img, typePokemonGrass);
    });

  } else if (id_tipo == 3) { //tipo ice
    const iceType="Ice";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,iceType);
    pokemonType.forEach(element => {
      let namePokemonIce = element.name;
      let typePokemonIce = element.type;
      let img = element.img;
      printAll(namePokemonIce, img, typePokemonIce)
    });
  } else if (id_tipo == 4) { //tipo poison
    const poisonType="Poison";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,poisonType);
    pokemonType.forEach(element => {
      let namePokemonPoison = element.name;
      let typePokemonPoison = element.type;
      let img = element.img;
      printAll(namePokemonPoison, img, typePokemonPoison)
    });
  } else if (id_tipo == 5) { //tipo Flying
    const FlyingType="Flying";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,FlyingType);
    pokemonType.forEach(element => {
      let namePokemonFlying = element.name;
      let typePokemonFlying = element.type;
      let img = element.img;
      printAll(namePokemonFlying, img, typePokemonFlying)
    });
  } else if (id_tipo == 6) { //tipo psychic
    const psychicType="Psychic";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,psychicType);
    pokemonType.forEach(element => {
      let namePokemonPsychic = element.name;
      let typePokemonPsychic = element.type;
      let img = element.img;
      printAll(namePokemonPsychic, img, typePokemonPsychic)
    });
  } else if (id_tipo == 7) { //tipo water
    const waterType="Water";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,waterType);
    pokemonType.forEach(element => {
      let namePokemonWater = element.name;
      let typePokemonWater = element.type;
      let img = element.img;
      printAll(namePokemonWater, img, typePokemonWater)
    });
  } else if (id_tipo == 8) { //tipo Ground
    const groundType="Ground";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,groundType);
    pokemonType.forEach(element => {
      let namePokemonGround = element.name;
      let typePokemonGround = element.type;
      let img = element.img;
      printAll(namePokemonGround, img, typePokemonGround)
    });
  } else if (id_tipo == 9) { //tipo Rock
    const rockType="Rock";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,rockType);
    pokemonType.forEach(element => {
      let namePokemonRock = element.name;
      let typePokemonRock = element.type;
      let img = element.img;
      printAll(namePokemonRock, img, typePokemonRock)
    });
  } else if (id_tipo == 10) { //tipo Electric
    const electricType="Electric";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,electricType);
    pokemonType.forEach(element => {
      let namePokemonElectric = element.name;
      let typePokemonElectric = element.type;
      let img = element.img;
      printAll(namePokemonElectric, img, typePokemonElectric)
    });
  } else if (id_tipo == 11) { //tipo Bug
    const bugType="Bug";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,bugType);
    pokemonType.forEach(element => {
      let namePokemonBug = element.name;
      let typePokemonBug = element.type;
      let img = element.img;
      printAll(namePokemonBug, img, typePokemonBug)
    });
  } else if (id_tipo == 12) { //tipo Normal
    const normalType= "Normal";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,normalType);
    pokemonType.forEach(element => {
      let namePokemonNormal = element.name;
      let typePokemonNormal = element.type;
      let img = element.img;
      printAll(namePokemonNormal, img, typePokemonNormal)
    });
  } else if (id_tipo == 13) { //tipo Fighting
    const fightingType="Fighting";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,fightingType);
    pokemonType.forEach(element => {
      let namePokemonFighting = element.name;
      let typePokemonFighting = element.type;
      let img = element.img;
      printAll(namePokemonFighting, img, typePokemonFighting)
    });
  } else if (id_tipo == 14) { //tipo Dragon
    const dragonType="Dragon";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData,dragonType);
    pokemonType.forEach(element => {
      let namePokemonDragon = element.name;
      let typePokemonDragon = element.type;
      let img = element.img;
      printAll(namePokemonDragon, img, typePokemonDragon)
    });
  }
}






/*const pokemonsSortHeight=pokemonData.sort(pokemon=>(parseInt(pokemon.height)), function(a, b){return a - b})
pokemonsSortHeight.forEach(element=>{
  let heightSort=element.height;
  let img=element.img;
  print7(heightSort, img);
})




/*
pokemonData.sort(function(a, b){return a - b}).forEach(element =>{ 
  let nameSort=element.name;
  let img=element.img;
  print7(nameSort, img)}
  );












 /*
const search= PokemonData(element => {
  let nameSearch = element.name
  

element => {
  let num = element.num;
  let name = element.name;






const pokemons=pokemonData.map( pokemons=> `${pokemons.name} ${pokemons.num} ${pokemons.type} `);
print(pokemons)
console.log(pokemons);*/

/*pokemonData.forEach(element =>{
  let pokemonsLight=parseInt(element.weight);
  if (pokemonsLight<30);{
  print2(pokemonsLight)
  }
  console.log(pokemonsLight);
})*/