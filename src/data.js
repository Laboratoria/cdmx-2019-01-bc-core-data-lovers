window.pokemon = {

  show:(dataPokemon) => {

    const mostrarData = (namePokemon,imagenPokemon) =>{

      const pokemon = document.getElementById('pokemon');
      let namePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}</div>`;
      pokemon.insertAdjacentHTML("beforeend",namePokemon);

    }

    dataPokemon.forEach(element => {
        let namePokemon = element.name;
        let imagenPokemon = element.img;
        imprimir(namePokemon, imagenPokemon)

});

  return imprimir;

}
}
