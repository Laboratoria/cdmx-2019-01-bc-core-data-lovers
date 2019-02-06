const enterPage = document.getElementById('enterPage');
const pageKanto = document.getElementById('pageKanto');
const filterPage = document.getElementById('filterPage');
// Estamos desarrollando searchPage
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
const enterToPikapedia = document.getElementById('enterToPikapedia');
const pokemonTypeAll = document.getElementById('pokemonTypeAll');
const checkboxWeightLight = document.getElementById('checkboxWeightLight');
const checkboxWeightHeavy = document.getElementById('checkboxWeightHeavy');
const checkboxWeightAscending = document.getElementById('checkboxWeightAscending');
const checkboxHeightAscending = document.getElementById('checkboxHeightAscending');
const checkboxType = document.getElementById('checkboxType');
const checkboxHeightSmall = document.getElementById('checkboxHeightSmall');
const checkboxHeightMedium = document.getElementById('checkboxHeightMedium');
const checkboxHeightTall = document.getElementById('checkboxHeightTall');
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
})

buttonSearchPokemon.addEventListener("click", () => {
  pageKanto.classList.add('hide');
  searchPage.classList.remove('hide');
})

//Checkbox para pokemones de peso
checkboxWeightLight.addEventListener("click", () => {
  const pokemonsLight = pokemonData.filter(pokemon => (parseInt(pokemon.weight) < 30));
  pokemonsLight.forEach(element => {
    let namelight = element.name;
    let img = element.img;
    let weightLight = element.weight;
    print2(namelight, img, weightLight);
  });
})

//Checkbox para pokémon pesado
checkboxWeightHeavy.addEventListener("click", () => {
  const pokemonsHeavy = pokemonData.filter(pokemon => parseInt(pokemon.weight) > 30);
  pokemonsHeavy.forEach(element => {
    let nameHeavy = element.name;
    let img = element.img;
    let weightHeavy = element.weight;
    print3(nameHeavy, img, weightHeavy);
  });
})

checkboxWeightAscending.addEventListener("click", () => {
  const pokemonsSortWeight = pokemonData.sort((a, b) => {
    if ((parseInt(a.weight)) > (parseInt(b.weight))) {
      return 1
    };
    if ((parseInt(a.weight)) < (parseInt(b.weight))) {
      return -1
    } else {
      return 0;
    }
  })
  pokemonsSortWeight.forEach(element => {
    let nameSortByWeight = element.name;
    let img = element.img;
    let weightSort = element.weight;
    print8(nameSortByWeight, img, weightSort);
  })


})

checkboxHeightSmall.addEventListener("click", () => {
  const pokemonsSmall = pokemonData.filter(pokemon => (parseInt(pokemon.height) < 1.00))
  pokemonsSmall.forEach(element => {
    let nameSmall = element.name;
    let img = element.img;
    let heightSmall = element.height;
    print4(nameSmall, img, heightSmall);
  });
})

checkboxHeightMedium.addEventListener("click", () => {
  const pokemosMedium = pokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.00) && (parseInt(pokemon.height) <= 1.80));
  pokemosMedium.forEach(element => {
    let nameMedium = element.name;
    let img = element.img;
    let heightMedium = element.height;
    print5(nameMedium, img, heightMedium);
  });

})

checkboxHeightTall.addEventListener("click", () => {
  const pokemonsTall = pokemonData.filter(pokemon => (parseInt(pokemon.height) >= 1.80))
  pokemonsTall.forEach(element => {
    let nameTall = element.name;
    let img = element.img;
    let heightTall = element.height;
    print6(nameTall, img, heightTall);
  })

})

checkboxHeightAscending.addEventListener("click", () => {
  const pokemonsSortHeight = pokemonData.sort((a, b) => {
    if (a.height > b.height) {
      return 1
    };
    if (a.height < b.height) {
      return -1
    } else {
      return 0;
    }
  })
  pokemonsSortHeight.forEach(element => {
    let nameSortByHeight = element.name;
    let img = element.img;
    let heightSort = element.height;
    print7(nameSortByHeight, img, heightSort);
  })
})
checkboxTypePage.addEventListener("click",()=>{
filterPage.classList.add('hide');
typePokemonPage.classList.remove('hide');
})


buttonPokemonFire.addEventListener("click", () => {
  filtrar(1);
})

buttonPokemonGrass.addEventListener("click", () => {
  filtrar(2);
})

buttonPokemonIce.addEventListener("click", () => {
  filtrar(3);
})

buttonPokemonPoison.addEventListener("click", ()=>{
  filtrar(4);
})

buttonPokemonFlying.addEventListener("click", ()=>{
  filtrar(5);
})

buttonPokemonPsychic.addEventListener("click", ()=>{
  filtrar(6);
})

buttonPokemonWater.addEventListener("click",()=>{
filtrar(7);
})


//función para imprimir la data total de pokémons
const print = (num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
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

//Funciones para imprimir el filtrado de pokémons
const print2 = (namelight, img, weightLight) => {
  let resultLight = `<h1 class="nameLight">${namelight}</h1>
   <div><img src=${img}></div>
   <p class="pokemonWeightLight">WEIGHT: ${weightLight}</p>`;
  pokemonLight.insertAdjacentHTML("beforeend", resultLight);
}
const print3 = (nameHeavy, img, weightHeavy) => {
  let resultHeavy = `<h1>${nameHeavy}</h1>
   <div><img src=${img}></div>
   <p>WEIGHT: ${weightHeavy}</p>`;
  pokemonHe.insertAdjacentHTML("beforeend", resultHeavy);
}
const print4 = (nameSmall, img, heightSmall) => {
  let resultSmall = `<h1>${nameSmall}</h1>
   <div><img src=${img}></div>
   <p>HEIGHT: ${heightSmall}</p>`;
  pokemonSm.insertAdjacentHTML("beforeend", resultSmall);
}
const print5 = (nameMedium, img, heightMedium) => {
  let resultMedium = `<h1>${nameMedium}</h1>
  <div><img src=${img}></div>
  <p>HEIGHT: ${heightMedium}</p>`;
  pokemonMedium.insertAdjacentHTML("beforeend", resultMedium);
}
const print6 = (nameTall, img, heightTall) => {
  let resultTall = `<h1>${nameTall}</h1>
  <div><img src=${img}></div>
  <p>HEIGHT: ${heightTall}</p>`;
  pokemonTall.insertAdjacentHTML('beforeend', resultTall);
}

//Función para imprimir los pokémons ordenados por estatura
const print7 = (nameSortByHeight, img, heightSort) => {
  let resultSort = `<h1>${nameSortByHeight}</h1>
   <div><img src=${img}></div>
   <p>HEIGHT: ${heightSort}</p>`;
  pokemonSortHeight.insertAdjacentHTML('beforeend', resultSort);
}
//Función para ordenar los pokémons por estatura


//Función para imprimir los pokémons ordenados por peso
const print8 = (nameSortByWeight, img, weightSort) => {
  let resultSort = `<h1>${nameSortByWeight}</h1>
  <div><img src=${img}></div>
  <p>WEIGHT: ${weightSort}</p>`;
  pokemonSortWeight.insertAdjacentHTML('beforeend', resultSort);
}
//Función para ordenar los pokémons por peso




/*//Función para ordenar los pokémons de manera descendente. (falta imprimirlos)
pokemonsSortHeightDescending=pokemonsSortHeight.reverse();
console.log(pokemonsSortHeightDescending);



 
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
const printAll = (namePokemonAll, img, typePokemonAll) => {
  let resultTypeAll = `<h1>${namePokemonAll}</h1>
  <div><img src=${img}></div>
  <p>TYPE: ${typePokemonAll}</p>`;
  pokemonTypeAll.insertAdjacentHTML('beforeend', resultTypeAll);
}



//retorna los tipos de pokemones gaby 
function filtrar(id_tipo) {
  //console.log("hola");
  if (id_tipo == 1) { //tipo fuego
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Fire"));
    pokemonType.forEach(element => {
      let namePokemonFire = element.name;
      let img = element.img;
      let typePokemonFire = element.type;
      printAll(namePokemonFire, img, typePokemonFire)
      console.log(namePokemonFire, img, typePokemonFire);
    });

  } else if (id_tipo == 2) { //tipo grass
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Grass"));
    pokemonType.forEach(element => {
      let namePokemonGrass = element.name;
      let typePokemonGrass = element.type;
      let img = element.img;
      printAll(namePokemonGrass, img, typePokemonGrass)
    })

  } else if (id_tipo == 3) { //tipo ice
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Ice"));
    pokemonType.forEach(element => {
      let namePokemonIce = element.name;
      let typePokemonIce = element.type;
      let img = element.img;
      printAll(namePokemonIce, img, typePokemonIce)
    })
  } else if (id_tipo == 4) { //tipo poison
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Poison"));
    pokemonType.forEach(element => {
      let namePokemonPoison = element.name;
      let typePokemonPoison = element.type;
      let img = element.img;
      printAll(namePokemonPoison, img, typePokemonPoison)
    })
  } else if (id_tipo == 5) { //tipo Flying
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Flying"));
    pokemonType.forEach(element => {
      let namePokemonFlying = element.name;
      let typePokemonFlying = element.type;
      let img = element.img;
      printAll(namePokemonFlying, img, typePokemonFlying)
    })
  } else if (id_tipo == 6) { //tipo psychic
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Psychic"));
    pokemonType.forEach(element => {
      let namePokemonPsychic = element.name;
      let typePokemonPsychic = element.type;
      let img = element.img;
      printAll(namePokemonPsychic, img, typePokemonPsychic)
    })
  } else if (id_tipo == 7) { //tipo water
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Water"));
    pokemonType.forEach(element => {
      let namePokemonWater = element.name;
      let typePokemonWater = element.type;
      let img = element.img;
      printAll(namePokemonWater, img, typePokemonWater)
    })
  } else if (id_tipo == 8) { //tipo Ground
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Ground"));
    pokemonType.forEach(element => {
      let namePokemonGround = element.name;
      let typePokemonGround = element.type;
      let img = element.img;
      printAll(namePokemonGround, img, typePokemonGround)
    })
  } else if (id_tipo == 9) { //tipo Rock
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Rock"));
    pokemonType.forEach(element => {
      let namePokemonRock = element.name;
      let typePokemonRock = element.type;
      let img = element.img;
      printAll(namePokemonRock, img, typePokemonRock)
    })
  } else if (id_tipo == 10) { //tipo Electric
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Electric"));
    pokemonType.forEach(element => {
      let namePokemonElectric = element.name;
      let typePokemonElectric = element.type;
      let img = element.img;
      printAll(namePokemonElectric, img, typePokemonElectric)
    })
  } else if (id_tipo == 11) { //tipo Bug
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Bug"));
    pokemonType.forEach(element => {
      let namePokemonBug = element.name;
      let typePokemonBug = element.type;
      let img = element.img;
      printAll(namePokemonBug, img, typePokemonBug)
    })
  } else if (id_tipo == 12) { //tipo Normal
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Normal"));
    pokemonType.forEach(element => {
      let namePokemonNormal = element.name;
      let typePokemonNormal = element.type;
      let img = element.img;
      printAll(namePokemonNormal, img, typePokemonNormal)
    })
  } else if (id_tipo == 13) { //tipo Fighting
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Fighting"));
    pokemonType.forEach(element => {
      let namePokemonFighting = element.name;
      let typePokemonFighting = element.type;
      let img = element.img;
      printAll(namePokemonFighting, img, typePokemonFighting)
    })
  } else if (id_tipo == 14) { //tipo Fairy
    const pokemonType = pokemonData.filter(pokemon => pokemon.type.includes("Dragon"));
    pokemonType.forEach(element => {
      let namePokemonDragon = element.name;
      let typePokemonDragon = element.type;
      let img = element.img;
      printAll(namePokemonDragon, img, typePokemonDragon)
    })
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