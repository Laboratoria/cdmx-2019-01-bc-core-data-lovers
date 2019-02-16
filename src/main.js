document.getElementById("next").addEventListener("click", () => {
  document.getElementById("serch").style.display = "block";
  document.getElementById("main").style.display = "none";
  imprimir(dataPokemon);
})
var POKEMON;
const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from(document.getElementsByClassName("bottonPokemons"));
const buttonOrder = Array.from(document.getElementsByClassName("sortTipo"));



const obtenerTipo = (arregloBotones) => {

  arregloBotones.map((tipo) => {

    tipo.addEventListener("click", (event) => {


      const getTypePokemon = event.target.id;


      const arregloFiltrado = window.data.filterPokemon(dataPokemon, getTypePokemon);

      imprimir(arregloFiltrado);
    })
  });

}

obtenerTipo(buttonTypes);

const sortButton = (botonesOrder) => {
  botonesOrder.map(eventoSor => {
    eventoSor.addEventListener("click", (event) => {
      const idDivi = event.target.id.split("-");
      const sortBy = idDivi[0];
      const sortOrder = idDivi[1];
      // const arrayOrde = window.data.sortDataPokemon(dataPokemon, sortBy, sortOrder);

      imprimir(window.data.sortDataPokemon(dataPokemon, sortBy, sortOrder));

    })
  })
}

sortButton(buttonOrder);

const searchLett = document.getElementById("search");
const filterCoincidence = () => {
  searchLett.addEventListener("keyup", () => {
    let searchValue = document.getElementById("search").value;
    imprimir(window.data.filterLetterPokemon(dataPokemon, searchValue));
  });
}

filterCoincidence();

const imprimir = (obtenerTipo) => {

  const pokemons = document.getElementById("pokemons");
  pokemons.innerHTML = "";

  obtenerTipo.map((dataPokemon) => {

    pokemons.innerHTML += `<div class="print-pokemon" ">
                          <p class="namePokemon numberSite"><i class="fas fa-hashtag"></i> ${dataPokemon.num} / 151</p>
                          <figure class="imgPokemon"><img src="${dataPokemon.img}"></figure>
                          <p class="namePokemon"><i class="fas fa-address-card"></i> Nombre: ${dataPokemon.name}</p>                       
                          <p class="namePokemon"><i class="fas fa-thumbtack"></i> Tipo: ${dataPokemon.type}</p>
                                                 
                          </div>`;
    //<p class="namePokemon"><i class="fas fa-arrows-alt-v"></i> Altura: ${dataPokemon.height}</p>                       
    // <p class="namePokemon"><i class="fas fa-balance-scale"></i> Peso: ${dataPokemon.weight}</p>
  })
}
