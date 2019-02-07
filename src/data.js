// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
const dataPokemon=POKEMON.pokemon;

window.printPokemon = {
  printAll:(namePokemonAll, img, typePokemonAll) => {
      let resultTypeAll = `<h1>${namePokemonAll}</h1>
       <div><img src=${img}></div>
       <p>Type: ${typePokemonAll}</p>`;
       pokemonTypeAll.insertAdjacentHTML("beforeend",resultTypeAll);
    },
  
    printData :(num, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns,
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
    
  },

    printPokemonWeight: (name, img, weight) => {
      let resultLight = `<h1 class="nameLight">${name}</h1>
       <div><img src=${img}></div>
       <p class="pokemonWeightLight">WEIGHT: ${weight}</p>`;
      pokemonLight.insertAdjacentHTML("beforeend", resultLight);
    },

    printPokemonHeight: (name, img, height) => {
      let resultSmall = `<h1>${name}</h1>
       <div><img src=${img}></div>
       <p>HEIGHT: ${height}</p>`;
      pokemonSm.insertAdjacentHTML("beforeend", resultSmall);
    },

    printPokemonSortByHeight:  (name, img, sortHeight) => {
      let resultSort = `<h1>${name}</h1>
       <div><img src=${img}></div>
       <p>HEIGHT: ${sortHeight}</p>`;
      pokemonSortHeight.insertAdjacentHTML('beforeend', resultSort);
    },

    printPokemonSortByWeight:  (name, img, sortWeight) => {
      let resultSort = `<h1>${name}</h1>
      <div><img src=${img}></div>
      <p>WEIGHT: ${sortWeight}</p>`;
      pokemonSortWeight.insertAdjacentHTML('beforeend', resultSort);
    },

    filterPokemonByType: (dataPokemon)=>{
      dataPokemon.filter(pokemon => pokemon.type)
    },

    sortByHeight: (arrayPokemonData) => {
      const pokemonSortedData = arrayPokemonData.sort((a, b) =>{
        if (a.height > b.height) {
          return 1
        };
        if (a.height < b.height) {
          return -1
        } else {
          return 0;
        }
      })
      return pokemonSortedData;
    }
  
}
 
