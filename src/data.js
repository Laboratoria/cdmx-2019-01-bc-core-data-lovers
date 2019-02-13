window.pokemon = {

    show: (data) => {

      const imprimir = (objeto) => {
        console.log(objeto.nombre);
        const pokemons = document.getElementById("pokemons");
        let nombrePokemon = `
      <div class="divPokemon">
        <img src="${objeto.imagen}">
        <p>${objeto.num}</p>
      </div>`;
        pokemons.insertAdjacentHTML("beforeend", nombrePokemon);

      }

      data.forEach(elemento => {
        const objetoPokemon = {
          nombre: elemento.name,
          imagen: elemento.img,
          height: elemento.height,
          num: elemento.num,
        }
        // console.log(objetoPokemon);

        // let nombre = elemento.name;
        //let imagen = elemento.img;
        //imprimir(nombre, imagen);
        imprimir(objetoPokemon);

      })
      return imprimir;
    },






  filterPokemons: (dataPokemon, elementPokemon) => {
    // const arr = [];
    // console.log(dataPokemon[0].type[0])
    // console.log(dataPokemon)
    dataPokemon.forEach(pokemon => {
      let typePokemon = pokemon.type[0]
      if (typePokemon === elementPokemon) {
        console.log(pokemon)
      }
    })

    // const showPokemons= arrayPokemonData.sort((a,b)=>
  }
// return arr
};
//const example = () => {
//return 'example';
//};

//window.example = example;

// let namePokemon = `<div class="container"> <h1> num </h1> <h2> ${name} </h2>;
//  <div> <img = class "imageBox" src =${img}> </div>
// <p> TYPE: ${type} </p>
//  <p>HEIGHT:${height}</p>
//  <p>WEIGHT:${weight}</p>
//  <p>CANDY:${candy}</p>
//  <p>CANDY COUNT:$ {candy_count}</p>
//  <p>EGG: ${egg}</p>
//  <p>SPAWN CHANCE: $ {spawn_chance}</p>
//  <p>AVERANGE SPAWNS: $ {avg_spawns}</p>
//  <p>SPAWN TIME:${spawn_time}</p>
//  <p>MULTIPLIERS:${multipliers}</p>
//  <p>WEAKNESSES:${weaknesses}</p>`
//  pokemons.insertAdjacentHTML("beforeend",namePokemon);
// };
