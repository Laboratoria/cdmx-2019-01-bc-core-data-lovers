const homePage = document.getElementById('homePage')
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage')
const curiousPokemonFactsPage= document.getElementById('curiousPokemonFactsPage');
const buttonFilterPokemon = document.getElementById("buttonFilterPokemon");
const totalData = document.getElementById("total-data");
const buttonRegionKanto = document.getElementById('buttonRegionKanto')
const buttonCuriousPokemonFacts = document.getElementById('buttonCuriousPokemonFacts');
const buttonHomeOnFilter = document.getElementById('buttonHomeOnFilter');
const buttonSearchByType = document.getElementById('buttonSearchByType');
const pokemonTypeAll = document.getElementById("pokemonTypeAll");
const checkboxWeightLight = document.getElementById("checkboxWeightLight");
const checkboxWeightHeavy = document.getElementById("checkboxWeightHeavy");
const checkboxWeightAscending = document.getElementById("checkboxWeightAscending");
const checkboxWeightDescending = document.getElementById("checkboxWeightDescending");
const checkboxHeightSmall = document.getElementById("checkboxHeightSmall");
const checkboxHeightMedium = document.getElementById("checkboxHeightMedium");
const checkboxHeightTall = document.getElementById("checkboxHeightTall");
const checkboxHeightAscending = document.getElementById("checkboxHeightAscending")
const checkboxHeightDescending = document.getElementById("checkboxHeightDescending")
const ButtonGround = document.getElementById("ButtonGround");
const ButtonRock = document.getElementById("ButtonRock");
const ButtonElectric = document.getElementById("ButtonElectric");
const ButtonBug = document.getElementById("ButtonBug");
const ButtonNormal = document.getElementById("ButtonNormal");
const ButtonFighting = document.getElementById("ButtonFighting");
const ButtonDragon = document.getElementById("ButtonDragon");
const buttonPokemonFire = document.getElementById('buttonPokemonFire');
const buttonPokemonGrass = document.getElementById('buttonPokemonGrass');
const buttonPokemonIce = document.getElementById('buttonPokemonIce');
const buttonPokemonPoison = document.getElementById('buttonPokemonPoison');
const buttonPokemonFlying = document.getElementById('buttonPokemonFlying');
const buttonPokemonPsychic = document.getElementById('buttonPokemonPsychic');
const buttonPokemonWater = document.getElementById('buttonPokemonWater');
const typePokemonPage = document.getElementById('typePokemonPage');
const printPokemonFilter = document.getElementById('printPokemonFilter');
const buttonSearchPokemonOnFilter = document.getElementById("buttonSearchPokemonOnFilter");
const buttonCuriousPokemonFactsOnFilter = document.getElementById("buttonCuriousPokemonFactsOnFilter");
const buttonHomeTypePage = document.getElementById('buttonHomeTypePage')
const averageHeightPokemon = document.getElementById('averageHeightPokemon');
const averageWeightPokemon = document.getElementById ('averageWeightPokemon');
const buttonRegionKantoOnFilter = document.getElementById('buttonRegionKantoOnFilter');
const buttonHomeOnCuriousPage = document.getElementById('buttonHomeOnCuriousPage');
const buttonRegionKantoOnCuriousPage = document.getElementById("buttonRegionKantoOnCuriousPage");
const buttonSearchByTypeOnCuriousPage = document.getElementById('buttonSearchByTypeOnCuriousPage');
const buttonFilterOnCuriousPage = document.getElementById('buttonFilterOnCuriousPage');
const buttonHomeOnKantoPage = document.getElementById("buttonHomeOnKantoPage");
const buttonCuriousOnKanto = document.getElementById("buttonCuriousOnKanto");
const buttonSearchByTypeOnKanto = document.getElementById("buttonSearchByTypeOnKanto");
const buttonFilterPokemonOnKanto = document.getElementById("buttonFilterPokemonOnKanto");
const pokemonJson = ("./data/pokemon/pokemon.json");

// const pokemonTypes = {
//   Fire, 
//   Ice, 

// };

buttonFilterPokemon.addEventListener('click', () => {
  homePage.classList.add('hide');
  filterPage.classList.remove('hide');
});
buttonHomeOnFilter.addEventListener('click', () => {
  filterPage.classList.add('hide');
  homePage.classList.remove('hide');
});
buttonSearchByType.addEventListener('click', () => {
  homePage.classList.add('hide');
  typePokemonPage.classList.remove('hide');
});
buttonCuriousPokemonFacts .addEventListener('click', () => {
  homePage.classList.add('hide');
  curiousPokemonFactsPage.classList.remove('hide');
});
buttonRegionKanto.addEventListener('click', () => {
  homePage.classList.add('hide');
  pageKanto.classList.remove('hide');
})
buttonSearchPokemonOnFilter.addEventListener('click', () => {
  filterPage.classList.add('hide');
  typePokemonPage.classList.remove('hide');
});
buttonCuriousPokemonFactsOnFilter.addEventListener('click', () => {
  filterPage.classList.add('hide');
  curiousPokemonFactsPage.classList.remove('hide');
});
buttonRegionKantoOnFilter.addEventListener('click', () =>{
  filterPage.classList.add('hide');
  pageKanto.classList.remove('hide');
})
buttonHomeTypePage.addEventListener("click", () => {
  typePokemonPage.classList.add('hide');
  homePage.classList.remove('hide');
})
buttonHomeOnCuriousPage.addEventListener("click", ()=>{
  curiousPokemonFactsPage.classList.add('hide');
  homePage.classList.remove('hide');
})
buttonSearchByTypeOnCuriousPage.addEventListener('click',() =>{
  curiousPokemonFactsPage.classList.add ('hide');
  typePokemonPage.classList.remove('hide');
})
buttonFilterOnCuriousPage.addEventListener("click", () =>{
  curiousPokemonFactsPage.classList.add('hide');
  filterPage.classList.remove('hide');
})

buttonRegionKantoOnCuriousPage.addEventListener("click", ()=>{
  curiousPokemonFactsPage.classList.add('hide');
  pageKanto.classList.remove('hide');
})

buttonHomeOnKantoPage.addEventListener("click", () => {
  pageKanto.classList.add("hide");
  homePage.classList.remove("hide");
})

buttonCuriousOnKanto.addEventListener("click", () => {
  pageKanto.classList.add("hide");
  curiousPokemonFactsPage.classList.remove("hide");
})

buttonSearchByTypeOnKanto.addEventListener("click", () =>{
  pageKanto.classList.add("hide");
  typePokemonPage.classList.remove("hide");
})

buttonFilterPokemonOnKanto.addEventListener("click", () => {
  pageKanto.classList.add("hide");
  filterPage.classList.remove("hide");
})



/*const allPokemon = 151
const averageWeight = window.pokemonFunction.averageWeight(pokemonData, allPokemon);
const averageHeight =window.pokemonFunction.averageHeight(pokemonData, allPokemon);
averageWeightPokemon.innerHTML = `<div class ="averageWeightPokemonText">The average weight of all Pokémon is  ${averageWeight} kilograms.</div>`;
averageHeightPokemon.innerHTML = `<div class ="averageWeightPokemonText">The average height of all Pokémon is ${averageHeight} meters.</div>`;
*/

const printPokemon = (name, img, quality) => {
  let resultPokemonPrint = `<div class="filterCard"><h1>${name}</h1>
   <div><img class="filterimg" src=${img}></div>
   <p class='quality'> ${quality}</p></div>`;
  printPokemonFilter.insertAdjacentHTML("beforeend", resultPokemonPrint);
};
const printData = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
  spawn_time, multipliers, weaknesses) => {
  let result = `<div class="boxesContainer"><div class="cardBox">
  <div class="card"><div class="front">
        <img class= "imageCard"src=${img}>
        </div>
        <div class="back"><article class ="informationCard">  <h2>${name}</h2><p> TYPE : ${type}</p>
        <p> HEIGHT : ${height}</p>
        <p> WEIGHT: ${weight}</p>
        <p>CANDY: ${candy}</p>
        <p>CANDY COUNT: ${candy_count}</p>
        <p>EGG: ${egg}</p>
        <p>WEAKNESSES: ${weaknesses}</p></article></div></div></div></div>`;
  totalData.insertAdjacentHTML("beforeend", result);
}

const printAll = (name, img, type) => {
  let resultTypeAll = `<div class="typeCard"><h1 class="nameTypeCard">${name}</h1>
   <div class="imageType"><img src=${img}></div>
   <div class="descriptionType"><p>TYPE : ${type}</p></div></div>`;
  pokemonTypeAll.insertAdjacentHTML("beforeend", resultTypeAll);
};


//Función sort () general para peso y altura
const heightAscending = (arrayPokemon,property) => {
  const filterHeight = window.pokemonFunction.sortFunction(arrayPokemon,property);
  return filterHeight;
}
//itera para nombre, img y peso 
const printProperty =(arrayPokemon) => {
  arrayPokemon.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
});
};
//itera para nombre, img, y altura 
const printHeight = (arrayPokemon) => {
  arrayPokemon.forEach(element=> {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name,img,height);
  });
};

//JSON que pinta en la región Kanto y guarda en local storage
fetch(pokemonJson)
.then(response => response.json())

.then(dataPokemon => {
  const allPokemon = dataPokemon.pokemon
  localStorage.setItem("pokemon",JSON.stringify(allPokemon));
  pokemonjson(allPokemon);
})

//itera para imprimir en todos los elementos de las tarjetas de la region kanto 
const pokemonjson = (pokemonArray) => { pokemonArray.forEach(element => {
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
})
}

//Invoca json para pokemones ligeros 
checkboxWeightLight.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemonsLight = window.pokemonFunction.filterByWeightLight(newData);
  const pokemonSortedLight = heightAscending(pokemonsLight,property);
  printProperty(pokemonSortedLight);
  
});

//Invoca json para pokemones pesados 
checkboxWeightHeavy.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemonsHeavy = window.pokemonFunction.filterByWeightHeavy(newData);
  const pokemonSortedHeavy = heightAscending(pokemonsHeavy,property);
  printProperty(pokemonSortedHeavy);
   
});

//invoca json para pokemones pequeños 
checkboxHeightSmall.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "height"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemonSmall = window.pokemonFunction.filterByHeightSmall(newData);
  const pokemonSortedSmall = heightAscending(pokemonSmall,property);
  printHeight(pokemonSortedSmall);
  
});

//invoca json para pokemones medianos
checkboxHeightMedium.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";  
  const property = "height"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemosMedium = window.pokemonFunction.filterByHeightMedium(newData);
  const pokemonSortedMedium = heightAscending(pokemosMedium,property);
  printHeight(pokemonSortedMedium);
});

//invoca json para pokemons altos
checkboxHeightTall.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "height"
  const newData= JSON.parse(localStorage.getItem("pokemon"));
  const pokemonsTall = window.pokemonFunction.filterByHeightTall(newData);
  const pokemonSortedTall = heightAscending(pokemonsTall,property);
  printHeight(pokemonSortedTall);
   
});

//Invoca json para pokemones ordenados por altura de manera ascendente
checkboxHeightAscending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "height"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemonSortHeight = heightAscending(newData,property);
  printHeight(pokemonSortHeight);
   
});

//Invoca json para pokemones oredenados por peso de manera ascendete
checkboxWeightAscending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const pokemonsSortWeight = heightAscending(newData,property);
  printProperty(pokemonsSortWeight);
});

//invoca json para pokemones de ordenados por altura de manera descendete
checkboxHeightDescending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "height"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const heightDescending = window.pokemonFunction.sortByDescending(newData,property);
  printHeight(heightDescending);
  
});

//invoca json por peso de manera descendente
checkboxWeightDescending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  const newData = JSON.parse(localStorage.getItem("pokemon"));
  const weightDescending = window.pokemonFunction.sortByDescending(newData,property);
  printProperty(weightDescending);
 
});


buttonPokemonFire.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(1);
});
buttonPokemonGrass.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(2);
});
buttonPokemonIce.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(3);
});
buttonPokemonPoison.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(4);
})
buttonPokemonFlying.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(5);
})
buttonPokemonPsychic.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(6);
})
buttonPokemonWater.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(7);
})
ButtonGround.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(8);
});
ButtonRock.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(9);
});
ButtonElectric.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(10);
});
ButtonBug.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(11);
});
ButtonNormal.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(12);
});
ButtonFighting.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(13);
});
ButtonDragon.addEventListener("click", () => {
  pokemonTypeAll.innerHTML = "";
  filtrar(14);
})

//itera para obtener nombre, img y tipo
const printType = (pokemonSortedName) =>{ pokemonSortedName.forEach(element => {
  let name = element.name;
  let img = element.img;
  let type = element.type;
  printAll(name, img, type);
})
};

//Es la función general para seleccionar por tipo
const filterType = (arrayPokemon,str) => {
  const typePokemon = window.pokemonFunction.pokemonFilterType(arrayPokemon,str);
  
  return typePokemon;
}
// es la funcion sort () para ordenar por nombre
const sortName = (arrayPokemon) => {
  const nameSorted = window.pokemonFunction.sortByName(arrayPokemon);
  return nameSorted;
}

//Funciones por tipo 
function filtrar(id_tipo) {

  if (id_tipo == 1) { //tipo fuego

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const fire = "Fire";
    const pokemonType = filterType(newData,fire);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);

}else if (id_tipo == 2) { //tipo grass
  
    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const grass = "Grass";
    const pokemonType = filterType(newData,grass);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);

  } else if (id_tipo == 3) { //tipo ice
  
    const newData = JSON.parse(localStorage.getItem("pokemon"));  
    const ice = "Ice";
    const pokemonType = filterType(newData,ice);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
   
  } else if (id_tipo == 4) { //tipo poison

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const poison = "Poison";
    const pokemonType = filterType(newData,poison);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 5) { //tipo Flying

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const flying = "Flying";
    const pokemonType = filterType(newData,flying);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 6) { //tipo psychic

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const psychic = "Psychic";
    const pokemonType = filterType(newData,psychic);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 7) { //tipo water

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const water = "Water";
    const pokemonType = filterType(newData,water);
    const pokemonSortedName = sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 8) { //tipo Ground

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const ground = "Ground";
    const pokemonType = filterType(newData,ground);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 9) { //tipo Rock

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const rock = "Rock";
    const pokemonType = filterType(newData,rock);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 10) { //tipo Electric

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const electric = "Electric";
    const pokemonType = filterType(newData,electric);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 11) { //tipo Bug

    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const bug = "Bug";
    const pokemonType = filterType(newData,bug);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 12) { //tipo Normal

    const newData = JSON.parse(localStorage.getItem("pokemon")); 
    const normal = "Normal";
    const pokemonType = filterType(newData,normal);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 13) { //tipo Fighting
    
    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const fighting = "Fighting";
    const pokemonType = filterType(newData,fighting);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  } else if (id_tipo == 14) { //tipo Dragon
    
    const newData = JSON.parse(localStorage.getItem("pokemon"));
    const dragon = "Dragon";
    const pokemonType = filterType(newData,dragon);
    const pokemonSortedName=sortName(pokemonType);
    printType(pokemonSortedName);
    
  }
}












