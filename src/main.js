document.getElementById("next").addEventListener("click", () => {

  document.getElementById("navs").style.display = "none";
  document.getElementById("barra").style.display = "block";
  document.getElementById("serch").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("order").style.display = "none";

  imprimir(dataPokemon);
})

document.getElementById("home").addEventListener("click", () => {
  document.getElementById("navs").style.display = "none";
  // document.getElementById("navs").style.display="none";
  document.getElementById("serch").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("order").style.display = "none"
  document.getElementById("pokemons").style.display = "block";
  imprimir(dataPokemon);
  // imprimir(dataPokemon);
})

document.getElementById("neews").addEventListener("click", () => {

  document.getElementById("navs").style.display = "block";
  // document.getElementById("order").style.display="none";
  document.getElementById("pokemons").style.display = "none";
  imprimir(dataPokemon);

})

document.getElementById("orderBy").addEventListener("click", () => {

  document.getElementById("order").style.display = "block";
  document.getElementById("navs").style.display = "none"
  document.getElementById("pokemons").style.display = "none";
  imprimir(dataPokemon);
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

myFunction();


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
      const arrayOrde = window.data.sortDataPokemon(dataPokemon, sortBy, sortOrder);

      imprimir(arrayOrde);

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
  const pokemones = document.getElementById("pokemones");
  const pokemonees = document.getElementById("pokemonees");

  pokemons.innerHTML = "";
  pokemones.innerHTML = "";
  pokemonees.innerHTML = "";


  obtenerTipo.map((dataPokemon) => {

    pokemons.innerHTML += `<div class="divPokemon" "><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure> <p class="namePokemon" id="idPokemon"> N.°${dataPokemon.id}</p><br>
                    <p class="namePokemon" id="nameCenter"> Name:${dataPokemon.name}</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;
    pokemones.innerHTML += `<div class="divPokemon" "><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure> <p class="namePokemon" id="idPokemon"> N.°${dataPokemon.id}</p><br>
                    <p class="namePokemon" id="nameCenter"> caca:  ${ dataPokemon.name }</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;

    pokemonees.innerHTML += `<div class="divPokemon" "><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure> <p class="namePokemon" id="idPokemon"> N.°${dataPokemon.id}</p><br>
                                        <p class="namePokemon" id="nameCenter"> Nombre:  ${ dataPokemon.name }</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;
  })
}



