const enterPage = document.getElementById('enterPage');
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage')
const stadisticsPage = document.getElementById('stadisticsPage');
const buttonAboutPikapedia = document.getElementById('buttonAboutPikapedia');
const filterButton = document.getElementById("filterButton");
const totalData = document.getElementById("total-data");
const pokemonData = window.POKEMON.pokemon;
const buttonBack = document.getElementById("buttonBack");
const buttonStadisticsPage = document.getElementById('buttonStadisticsPage');
const buttonBackFilterPage = document.getElementById('buttonBackFilterPage');
const buttonSearchPokemon = document.getElementById('buttonSearchPokemon');
const enterToPikapedia = document.getElementById("enterToPikapedia");
const pokemonTypeAll = document.getElementById("pokemonTypeAll");
const checkboxWeightLight = document.getElementById("checkboxWeightLight");
const checkboxWeightHeavy = document.getElementById("checkboxWeightHeavy");
const checkboxWeightAscending = document.getElementById("checkboxWeightAscending");
//const checkboxWeightDescending = document.getElementById("checkboxWeightDescending")
const checkboxHeightSmall = document.getElementById("checkboxHeightSmall");
const checkboxHeightMedium = document.getElementById("checkboxHeightMedium");
const checkboxHeightTall = document.getElementById("checkboxHeightTall");
const checkboxHeightAscending = document.getElementById("checkboxHeightAscending")
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
const printPokemonFilter=document.getElementById('printPokemonFilter');
const titlePokemonLight=document.getElementById('titlePokemonLight');
const titlePokemonHeavy=document.getElementById('titlePokemonHeavy');
const titlePokemonSmall=document.getElementById('titlePokemonSmall');
const titlePokemonMedium=document.getElementById('titlePokemonMedium');
const titlePokemonTall=document.getElementById('titlePokemonTall');
const titlePokemonsortByHeightAscending=document.getElementById('titlePokemonsortByHeightAscending');
const titlePokemonsortByWeightAscending=document.getElementById('titlePokemonsortByWeightAscending');
const aboutPikapediaPage = document.getElementById("aboutPikapediaPage");
const buttonSearchPokemonOnFilter = document.getElementById("buttonSearchPokemonOnFilter");
const buttonBackPageKanto = document.getElementById("buttonBackPageKanto");


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
  typePokemonPage.classList.remove('hide');
});

buttonStadisticsPage.addEventListener("click", () => {
  pageKanto.classList.add('hide');
  stadisticsPage.classList.remove('hide');
  const totalWeight = window.printPokemon.totalWeight(pokemonData);
  stadisticsPage.innerHTML = totalWeight;
});


buttonAboutPikapedia.addEventListener("click", () => {
  pageKanto.classList.add("hide");
  aboutPikapediaPage.remove("hide");
});

buttonSearchPokemonOnFilter.addEventListener("click", () => {
  filterPage.classList.add("hide");
  typePokemonPage.classList.remove("hide");
});

buttonBackPageKanto.addEventListener("click", () => {
  typePokemonPage.classList.add("hide");
  pageKanto.classList.remove("hide");
});

buttonAboutPikapedia.addEventListener("click", ()=>{
  pageKanto.classList.add('hide');
  aboutPikapediaPage.classList.remove('hide');
});
const printPokemon= (name, img, quality) => {
  let resultPokemonPrint = `<div class="filterCard"><h1>${name}</h1>
   <div><img src=${img}></div>
   <p class='quality'> ${quality}</p></div>`;
  printPokemonFilter.insertAdjacentHTML("beforeend", resultPokemonPrint);
};



const printData = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
  spawn_time, multipliers, weaknesses ) => {
  let result = `<div class="card"><h1>${num}</h1>
        <h2>${name}</h2>
        <img class= "imageCard"src=${img}>
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
        <p>WEAKNESSES: ${weaknesses}</p><div>`;
  totalData.insertAdjacentHTML("beforeend", result);

};

const printAll = (namePokemonAll, img, typePokemonAll) => {
  let resultTypeAll = `<div class="typeCard"><h1>${namePokemonAll}</h1>
   <div><img src=${img}></div>
   <p>Type: ${typePokemonAll}</p></div>`;
  pokemonTypeAll.insertAdjacentHTML("beforeend", resultTypeAll);
};


checkboxWeightLight.addEventListener("click", () => {
  titlePokemonLight.classList.remove('hide');
  const pokemonsLight = window.printPokemon.filterByWeightLight(pokemonData);
  pokemonsLight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  });
});
checkboxWeightHeavy.addEventListener("click", () => {
  titlePokemonHeavy.classList.remove('hide');
  const pokemonsHeavy = window.printPokemon.filterByWeightHeavy(pokemonData);
  pokemonsHeavy.forEach(element => {
    let name = element.name;
    let img = element.img;
    let weight = element.weight;
    printPokemon(name, img, weight);
  });
});

checkboxHeightSmall.addEventListener("click", () => {
  titlePokemonSmall.classList.remove('hide');
  const pokemonsSmall = window.printPokemon.filterByHeightSmall(pokemonData);
  pokemonsSmall.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxHeightMedium.addEventListener("click", () => {
  titlePokemonMedium.classList.remove('hide')
  const pokemosMedium = window.printPokemon.filterByHeightMedium(pokemonData);
  pokemosMedium.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});

checkboxHeightTall.addEventListener("click", () => {
  titlePokemonTall.classList.remove('hide');
  const pokemonsTall = window.printPokemon.filterByHeightTall(pokemonData);
  pokemonsTall.forEach(element => {
    let name = element.name;
    let img = element.img;
    let height = element.height;
    printPokemon(name, img, height);
  });
});


checkboxHeightAscending.addEventListener("click", () => {
  titlePokemonsortByHeightAscending.classList.remove('hide');
  const pokemonSortHeight = window.printPokemon.sortByHeightAscending(pokemonData);
  pokemonSortHeight.forEach(element => {
    let name = element.name;
    let img = element.img;
    let sortHeight = element.height;
    printPokemon(name, img, sortHeight);
  });
});

checkboxWeightAscending.addEventListener("click", () => {
  titlePokemonsortByWeightAscending.classList.remove('hide');
  const pokemonsSortWeight = window.printPokemon.sortByWeightAscending(pokemonData);
  pokemonsSortWeight.forEach(element => {
    let namesortByWeightAscending = element.name;
    let img = element.img;
    let weightSort = element.weight;
    printPokemon(namesortByWeightAscending, img, weightSort);
  });
});




buttonPokemonFire.addEventListener("click", () => {
  filtrar(1);
});

buttonPokemonGrass.addEventListener("click", () => {
  filtrar(2);
});

buttonPokemonIce.addEventListener("click", () => {
  filtrar(3);
});
buttonPokemonPoison.addEventListener("click", () => {
  filtrar(4);
})

buttonPokemonFlying.addEventListener("click", () => {
  filtrar(5);
})

buttonPokemonPsychic.addEventListener("click", () => {
  filtrar(6);
})

buttonPokemonWater.addEventListener("click", () => {
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

ButtonBug.addEventListener("click", () => {
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
})


function filtrar(id_tipo) {

  if (id_tipo == 1) { //tipo fuego
    const fireType = "Fire";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, fireType);
    pokemonType.forEach(element => {
      let namePokemonFire = element.name;
      let img = element.img;
      let typePokemonFire = element.type;
      printAll(namePokemonFire, img, typePokemonFire);
    });
  } else if (id_tipo == 2) { //tipo grass
    const grassType = "Grass";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, grassType);
    pokemonType.forEach(element => {
      let namePokemonGrass = element.name;
      let typePokemonGrass = element.type;
      let img = element.img;
      printAll(namePokemonGrass, img, typePokemonGrass);
    });

  } else if (id_tipo == 3) { //tipo ice
    const iceType = "Ice";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, iceType);
    pokemonType.forEach(element => {
      let namePokemonIce = element.name;
      let typePokemonIce = element.type;
      let img = element.img;
      printAll(namePokemonIce, img, typePokemonIce)
    });
  } else if (id_tipo == 4) { //tipo poison
    const poisonType = "Poison";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, poisonType);
    pokemonType.forEach(element => {
      let namePokemonPoison = element.name;
      let typePokemonPoison = element.type;
      let img = element.img;
      printAll(namePokemonPoison, img, typePokemonPoison)
    });
  } else if (id_tipo == 5) { //tipo Flying
    const FlyingType = "Flying";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, FlyingType);
    pokemonType.forEach(element => {
      let namePokemonFlying = element.name;
      let typePokemonFlying = element.type;
      let img = element.img;
      printAll(namePokemonFlying, img, typePokemonFlying)
    });
  } else if (id_tipo == 6) { //tipo psychic
    const psychicType = "Psychic";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, psychicType);
    pokemonType.forEach(element => {
      let namePokemonPsychic = element.name;
      let typePokemonPsychic = element.type;
      let img = element.img;
      printAll(namePokemonPsychic, img, typePokemonPsychic)
    });
  } else if (id_tipo == 7) { //tipo water
    const waterType = "Water";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, waterType);
    pokemonType.forEach(element => {
      let namePokemonWater = element.name;
      let typePokemonWater = element.type;
      let img = element.img;
      printAll(namePokemonWater, img, typePokemonWater)
    });
  } else if (id_tipo == 8) { //tipo Ground
    const groundType = "Ground";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, groundType);
    pokemonType.forEach(element => {
      let namePokemonGround = element.name;
      let typePokemonGround = element.type;
      let img = element.img;
      printAll(namePokemonGround, img, typePokemonGround)
    });
  } else if (id_tipo == 9) { //tipo Rock
    const rockType = "Rock";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, rockType);
    pokemonType.forEach(element => {
      let namePokemonRock = element.name;
      let typePokemonRock = element.type;
      let img = element.img;
      printAll(namePokemonRock, img, typePokemonRock)
    });
  } else if (id_tipo == 10) { //tipo Electric
    const electricType = "Electric";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, electricType);
    pokemonType.forEach(element => {
      let namePokemonElectric = element.name;
      let typePokemonElectric = element.type;
      let img = element.img;
      printAll(namePokemonElectric, img, typePokemonElectric)
    });
  } else if (id_tipo == 11) { //tipo Bug
    const bugType = "Bug";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, bugType);
    pokemonType.forEach(element => {
      let namePokemonBug = element.name;
      let typePokemonBug = element.type;
      let img = element.img;
      printAll(namePokemonBug, img, typePokemonBug)
    });
  } else if (id_tipo == 12) { //tipo Normal
    const normalType = "Normal";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, normalType);
    pokemonType.forEach(element => {
      let namePokemonNormal = element.name;
      let typePokemonNormal = element.type;
      let img = element.img;
      printAll(namePokemonNormal, img, typePokemonNormal)
    });
  } else if (id_tipo == 13) { //tipo Fighting
    const fightingType = "Fighting";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, fightingType);
    pokemonType.forEach(element => {
      let namePokemonFighting = element.name;
      let typePokemonFighting = element.type;
      let img = element.img;
      printAll(namePokemonFighting, img, typePokemonFighting)
    });
  } else if (id_tipo == 14) { //tipo Dragon
    const dragonType = "Dragon";
    const pokemonType = window.printPokemon.pokemonFilterType(pokemonData, dragonType);
    pokemonType.forEach(element => {
      let namePokemonDragon = element.name;
      let typePokemonDragon = element.type;
      let img = element.img;
      printAll(namePokemonDragon, img, typePokemonDragon)
    });
  }
}


