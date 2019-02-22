const homePage = document.getElementById('homePage')
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage')
const curiousPokemonFactsPage= document.getElementById('curiousPokemonFactsPage');
const buttonFilterPokemon = document.getElementById("buttonFilterPokemon");
const totalData = document.getElementById("total-data");
const pokemonData = window.POKEMON.pokemon;
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
const pokemonJson = ("./data/pokemon/pokemon.json")

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



const allPokemon = 151
const averageWeight = window.pokemonFunction.averageWeight(pokemonData, allPokemon);
const averageHeight =window.pokemonFunction.averageHeight(pokemonData, allPokemon);
averageWeightPokemon.innerHTML = `<div class ="averageWeightPokemonText">The average weight of all Pokémon is  ${averageWeight} kilograms.</div>`;
averageHeightPokemon.innerHTML = `<div class ="averageWeightPokemonText">The average height of all Pokémon is ${averageHeight} meters.</div>`;


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

const weightAscending = (arrayPokemon) => {
  const filterWeight = window.pokemonFunction.sortByWeightAscending(arrayPokemon);
  return filterWeight;
}

const heightAscending = (arrayPokemon,property) => {
  const filterHeight = window.pokemonFunction.sortFunction(arrayPokemon,property);
  return filterHeight;
}

const printProperty =(arrayPokemon) => {
  arrayPokemon.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
});
};

const printHeight = (arrayPokemon) => {
  arrayPokemon.forEach(element=> {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name,img,height);
  });
};

checkboxWeightLight.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  fetch(pokemonJson)
  .then(response => response.json())
  .then( dataPokemon => {
  const weightLight= dataPokemon.pokemon
  const pokemonsLight = window.pokemonFunction.filterByWeightLight(weightLight);
  const pokemonSortedLight = heightAscending(pokemonsLight,property);
  printProperty(pokemonSortedLight);
  });
});


checkboxWeightHeavy.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
   const property = "weight"
   fetch(pokemonJson)
   .then(response => response.json())
   .then( dataPokemon => {
    const weightHeavy = dataPokemon.pokemon 
    const pokemonsHeavy = window.pokemonFunction.filterByWeightHeavy(weightHeavy);
    const pokemonSortedHeavy = weightAscending(pokemonsHeavy,property);
    printProperty(pokemonSortedHeavy);
   })
});

checkboxHeightSmall.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "height"
  fetch(pokemonJson)
  .then(response => response.json())
  .then(dataPokemon => {
    const heightSmall = dataPokemon.pokemon
    const pokemonSmall = window.pokemonFunction.filterByHeightSmall(heightSmall);
    const pokemonSortedSmall = heightAscending(pokemonSmall,property);
    printHeight(pokemonSortedSmall);
  });
});

checkboxHeightMedium.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";  
  const property = "height"
  fetch(pokemonJson)
  .then (response=> response.json())
  .then (dataPokemon=> {
    const medium = dataPokemon.pokemon
    const pokemosMedium = window.pokemonFunction.filterByHeightMedium(medium);
    const pokemonSortedMedium = heightAscending(pokemosMedium,property);
    printHeight(pokemonSortedMedium);
  });
});

checkboxHeightTall.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
   const property = "height"
   fetch(pokemonJson)
   .then(response => response.json())
   .then (dataPokemon => {
     const tall = dataPokemon.pokemon
     const pokemonsTall = window.pokemonFunction.filterByHeightTall(tall);
     const pokemonSortedTall = heightAscending(pokemonsTall,property);
     printHeight(pokemonSortedTall);
   });
});

checkboxHeightAscending.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
   const property = "height"
   fetch (pokemonJson)
   .then( response=> response.json())
   .then( dataPokemon => {
     const height = dataPokemon.pokemon
     const pokemonSortHeight = heightAscending(height,property);
     printHeight(pokemonSortHeight);
   });
});

checkboxWeightAscending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const property = "weight"
  fetch(pokemonJson)
  .then (response => response.json())
  .then( datajson => {
    const weight = datajson.pokemon 
    const pokemonsSortWeight = heightAscending(weight,property);
    printProperty(pokemonsSortWeight);
  })
});
checkboxHeightDescending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const pokemonSortHeightDescending = window.pokemonFunction.sortByHeightDescending(pokemonData);
  pokemonSortHeightDescending.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxWeightDescending.addEventListener("click", () => {
 printPokemonFilter.innerHTML = "";
  const pokemonSortWeightDescending = window.pokemonFunction.sortByWeightDescending(pokemonData);
  pokemonSortWeightDescending.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  })
})


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

const printType = (pokemonSortedName) =>{ pokemonSortedName.forEach(element => {
  let name = element.name;
  let img = element.img;
  let type = element.type;
  printAll(name, img, type);
})
};


fetch(pokemonJson)
.then(response => response.json())

.then(dataPokemon => {
  const allPokemon = dataPokemon.pokemon
  pokemonjson(allPokemon);
})

const filterType = (arrayPokemon,str) => {
  const typePokemon = window.pokemonFunction.pokemonFilterType(arrayPokemon,str);
  
  return typePokemon;
}

const sortName = (arrayPokemon, property) => {
  const nameSorted = window.pokemonFunction.sortByName(arrayPokemon, property);
  return nameSorted;
}





function filtrar(id_tipo) {

  if (id_tipo == 1) { //tipo fuego
    fetch(pokemonJson)
.then(response => response.json())
  
.then(datajson => {
  const filterFire = datajson.pokemon
  const fire = "Fire";
  const property = "name";
  const pokemonType = filterType(filterFire,fire);
  const pokemonSortedName=sortName(pokemonType, property);
  printType(pokemonSortedName);
});
    
  } else if (id_tipo == 2) { //tipo grass
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const grass = "Grass"
  const property = "name";
  const pokemonType = filterType(filterFire,grass);
  const pokemonSortedName=sortName(pokemonType, property);
  printType(pokemonSortedName)
    });

  } else if (id_tipo == 3) { //tipo ice
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const ice = "Ice"
  const property = "name";
  const pokemonType = filterType(filterFire,ice);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 4) { //tipo poison
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const poison = "Poison"
  const property = "name";
  const pokemonType = filterType(filterFire,poison);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    
    });
  } else if (id_tipo == 5) { //tipo Flying
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const flying = "Flying"
  const property = "name";
  const pokemonType = filterType(filterFire,flying);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 6) { //tipo psychic
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const psychic = "Psychic"
  const property = "name";
  const pokemonType = filterType(filterFire,psychic);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 7) { //tipo water
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const water = "Water"
  const property = "name";
  const pokemonType = filterType(filterFire,water);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 8) { //tipo Ground
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const ground = "Ground"
  const property = "name";
  const pokemonType = filterType(filterFire,ground);
  const pokemonSortedName=sortName(pokemonType, property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 9) { //tipo Rock
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const rock = "Rock"
  const property = "name";
  const pokemonType = filterType(filterFire,rock);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 10) { //tipo Electric
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const electric = "Electric"
  const property = "name";
  const pokemonType = filterType(filterFire,electric);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 11) { //tipo Bug
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const bug = "Bug"
  const property = "name";
  const pokemonType = filterType(filterFire,bug);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 12) { //tipo Normal
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const normal = "Normal"
  const property = "name";
  const pokemonType = filterType(filterFire,normal);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 13) { //tipo Fighting
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const fighting = "Fighting"
  const property = "name";
  const pokemonType = filterType(filterFire,fighting);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  } else if (id_tipo == 14) { //tipo Dragon
    fetch(pokemonJson)
    .then(response => response.json())
    .then(datajson => {
  const filterFire = datajson.pokemon
  const dragon = "Dragon"
  const property = "name";
  const pokemonType = filterType(filterFire,dragon);
  const pokemonSortedName=sortName(pokemonType,property);
  printType(pokemonSortedName)
    });
  }
}











