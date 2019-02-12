// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};*/

window.data = {
  //Di: Función que imprime los datos que son llamados y la imagen de los pokemones en el contenedor pokemones
  toPrint: (namePokemon, imagePokemon, typePokemon) => {
    let visualPokemon = `<button id="btnShowDetails" class="divPokemon btnPokemon ${typePokemon[0]}" data-toggle="modal" data-target="#details">
    <img src="${imagePokemon}">
    <br><br><br><p class="name">${namePokemon}</p><br>
    </button>`;

    pokemones.insertAdjacentHTML("beforeend", visualPokemon);
  },

  /*Di y Fa: Función que filtra por tipo de Pokemón: Agua. Almacena en una variable los 
  elementos de la data que tiene agua*/
  toPrintFilter: (namePokemon, imagePokemon, typePokemon) => {
    let visualPokemonWater = `<button class="btnPokemon divPokemon ${typePokemon[0]}">
    <img src="${imagePokemon}"><br><br><br><p class="name">${namePokemon}</p>
    </button>`;

    filtered_out.insertAdjacentHTML("beforeend", visualPokemonWater);
  },

  order: () => {

  },

  find: () => {

  }

  

};
