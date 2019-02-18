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
const buttonSearchByTypeOnCuriousPage = document.getElementById('buttonSearchByTypeOnCuriousPage');
const buttonFilterOnCuriousPage = document.getElementById('buttonFilterOnCuriousPage');

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

checkboxWeightLight.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const pokemonsLight = window.pokemonFunction.filterByWeightLight(pokemonData);
  const pokemonSortedLight = window.pokemonFunction.sortByWeightAscending(pokemonsLight)
  pokemonSortedLight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  });
});
checkboxWeightHeavy.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
  const pokemonsHeavy = window.pokemonFunction.filterByWeightHeavy(pokemonData);
  const pokemonSortedHeavy = window.pokemonFunction.sortByWeightAscending(pokemonsHeavy);
  pokemonSortedHeavy.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  });
});

checkboxHeightSmall.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const pokemonsSmall = window.pokemonFunction.filterByHeightSmall(pokemonData);
  const pokemonSortedSmall = window.pokemonFunction.sortByHeightAscending(pokemonsSmall);
  pokemonSortedSmall.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxHeightMedium.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";  
  const pokemosMedium = window.pokemonFunction.filterByHeightMedium(pokemonData);
  const pokemonSortedMedium = window.pokemonFunction.sortByHeightAscending(pokemosMedium);
  pokemonSortedMedium.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxHeightTall.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
  const pokemonsTall = window.pokemonFunction.filterByHeightTall(pokemonData);
  const pokemonSortedTall = window.pokemonFunction.sortByHeightAscending(pokemonsTall);
  pokemonSortedTall.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxHeightAscending.addEventListener("click", () => {
   printPokemonFilter.innerHTML = "";
  const pokemonSortHeight = window.pokemonFunction.sortByHeightAscending(pokemonData);
  pokemonSortHeight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxWeightAscending.addEventListener("click", () => {
  printPokemonFilter.innerHTML = "";
  const pokemonsSortWeight = window.pokemonFunction.sortByWeightAscending(pokemonData);
  pokemonsSortWeight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  });
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
})

function filtrar(id_tipo) {

  if (id_tipo == 1) { //tipo fuego
    const fireType = "Fire";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, fireType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type);
    });
  } else if (id_tipo == 2) { //tipo grass
    const grassType = "Grass";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, grassType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type);
    });

  } else if (id_tipo == 3) { //tipo ice
    const iceType = "Ice";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, iceType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 4) { //tipo poison
    const poisonType = "Poison";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, poisonType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 5) { //tipo Flying
    const FlyingType = "Flying";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, FlyingType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 6) { //tipo psychic
    const psychicType = "Psychic";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, psychicType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 7) { //tipo water
    const waterType = "Water";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, waterType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 8) { //tipo Ground
    const groundType = "Ground";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, groundType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 9) { //tipo Rock
    const rockType = "Rock";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, rockType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 10) { //tipo Electric
    const electricType = "Electric";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, electricType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 11) { //tipo Bug
    const bugType = "Bug";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, bugType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 12) { //tipo Normal
    const normalType = "Normal";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, normalType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 13) { //tipo Fighting
    const fightingType = "Fighting";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, fightingType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  } else if (id_tipo == 14) { //tipo Dragon
    const dragonType = "Dragon";
    const pokemonType = window.pokemonFunction.pokemonFilterType(pokemonData, dragonType);
    const pokemonSortedName = window.pokemonFunction.sortByName(pokemonType);
    pokemonSortedName.forEach(element => {
      let name = element.name;
      let img = element.img;
      let type = element.type;
      printAll(name, img, type)
    });
  }
}


