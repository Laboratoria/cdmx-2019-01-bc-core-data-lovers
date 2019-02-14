const datapokemon = window.POKEMON.pokemon;
//En esta seccion estoy trayendo los elemneetos del html para que los botones de hagan su funcion/
const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));

const obtenerTipo = (arregloBotones) => {
  arregloBotones.map((tipoPokemon) => {
    tipoPokemon.addEventListener("click", (event) => {
      const getTypePokemon = event.target.id;
      const arregloFiltrado = window.data.filterData(datapokemon, getTypePokemon);
      imprimir(arregloFiltrado);
    })
  });
}

obtenerTipo(buttonTypes);

const imprimir = (obtenerTipo) => {
  const pokemons = document.getElementById("probando");
  pokemons.innerHTML = "";

  obtenerTipo.map((datapokemon) => {
    pokemons.innerHTML +=`<div class="imagesPokemon"><figure>
<img src="${datapokemon.img}"></figure>
<div class="texto-pokemon"><p>Nombre:${datapokemon.name}</p>
<p> Id:${datapokemon.id}</p>
<p> Candy:${datapokemon.candy}</p>
<p> Altura:${datapokemon.height}</p>
<p> Peso:${datapokemon.weight}</p>
<p> Debilidades:</p>
<p>${datapokemon.weaknesses}</p></div>
</div>`
  })

};





/*ordenando pokemon*/


/*
filterCoincidence();

}else if (ubication.includes('orderPokemon.html')) {
  const orderRdio = document.getElementById("order");
  alert('funciono');
  console.log(orderRdio);
  const arrayRadio = Array.from(orderRadio)
  console.log(arrayRadio);
  const getOrderPokemon = (optionsRadio) => {
    optionsRadio.map(radio => {
      radio.addEventListener("click", () => {
        if (radio.checked === true) {
          let idRadio = radio.id.split('-');
          showList(window.sortData(dataPokemon, idRadio[1], idRadio[0]));
        }
      });
    });
  }
  getOrderPokemon(arrayRadio);
}*/

