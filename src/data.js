window.pokemon = {

  show:(dataPokemon) => {

    const imprimir = (namePokemon,imagenPokemon) =>{

      const pokemon = document.getElementById('pokemon');
      let namePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}</div>`;
      pokemon.insertAdjacentHTML("beforeend",namePokemon);

    }

    data.forEach(element => {
        let namePokemon = element.name;
        let imagenPokemon = element.img;
        imprimir(namePokemon, imagenPokemon)

});

  return imprimir;

}
}
