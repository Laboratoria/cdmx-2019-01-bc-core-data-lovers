//Declaración de variables y constantes que se utilizaran

var POKEMON;
const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));
const buttonOrder = Array.from(document.getElementsByClassName("orderButtonType"));
const searchLett = document.getElementById("searchNav");
const pokemons = document.getElementById("pokemons");
const pokemones = document.getElementById("pokemones");
const pokemonees = document.getElementById("pokemonees");


//Funcion de boton de Inicio
document.getElementById("NextButton").addEventListener("click", () => {
  paintData(dataPokemon);
  document.getElementById("navs").style.display = "none";
  document.getElementById("barra").style.display = "block";
  document.getElementById("serch").style.display = "block";
  document.getElementById("mainSection").style.display = "none";
  document.getElementById("order").style.display = "none";


})
//Funcion de Boton home
document.getElementById("home").addEventListener("click", () => {
  document.getElementById("navs").style.display = "none";
  // document.getElementById("navs").style.display="none";
  document.getElementById("serch").style.display = "block";
  document.getElementById("mainSection").style.display = "none";
  document.getElementById("order").style.display = "none"
  document.getElementById("pokemons").style.display = "block";
  paintData(dataPokemon);

})
//Funcion de Filtrado en el navegador
document.getElementById("filterNav").addEventListener("click", () => {

  document.getElementById("navs").style.display = "block";
  // document.getElementById("order").style.display="none";
  document.getElementById("pokemons").style.display = "none";


})
//Funcion de Ordenado en el navegador
document.getElementById("orderNav").addEventListener("click", () => {

  document.getElementById("order").style.display = "block";
  document.getElementById("navs").style.display = "none"
  document.getElementById("pokemons").style.display = "none";

})
//Funcion hace al navegado responsive
function functionNav() {
  var x = document.getElementById("navBarTop");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

functionNav();
//Funcion para llamar al filter
const dataPaint = (arregloBotones) => {

  arregloBotones.map((tipo) => {

    tipo.addEventListener("click", (event) => {


      const getTypePokemon = event.target.id;


      const arregloFiltrado = window.data.filterPokemon(dataPokemon, getTypePokemon);

      paintData(arregloFiltrado);
    })
  });

}

dataPaint(buttonTypes);
//Funcion para llamar a odernar
const sortButton = (botonesOrder) => {
  botonesOrder.map(eventoSor => {
    eventoSor.addEventListener("click", (event) => {
      const idDivi = event.target.id.split("-");
      const sortBy = idDivi[0];
      const sortOrder = idDivi[1];
      const arrayOrde = window.data.sortDataPokemon(dataPokemon, sortBy, sortOrder);

      paintData(arrayOrde);

    })
  })
}

sortButton(buttonOrder);


const filterCoincidence = () => {
  searchLett.addEventListener("keyup", () => {
    let searchValue = document.getElementById("searchNav").value;
    paintData(window.data.filterLetterPokemon(dataPokemon, searchValue));
  });
}

filterCoincidence();

//  Funcion de Imprimir 

const paintData = (dataPaint) => {

  pokemons.innerHTML = " ";
  pokemones.innerHTML = " ";
  pokemonees.innerHTML = " ";

  dataPaint.map((dataPokemon) => {

    pokemons.innerHTML += `<div class="divPokemon" "><p class="namePokemon numberSite" id="idPokemon"> # ${dataPokemon.num} / 151</p><br><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure> 
                    <p class="namePokemon" id="nameCenter"> Nombre:${dataPokemon.name}</p><br><p class="namePokemon">Tipo: ${dataPokemon.type}</p></div>`;
    pokemones.innerHTML += `<div class="divPokemon" "><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure> <p class="namePokemon" id="idPokemon"> N.°${dataPokemon.id}</p><br>
                    <p class="namePokemon" id="nameCenter"> Nombre:  ${ dataPokemon.name }</p><br><p class="namePokemon">Tipo: ${dataPokemon.type}</p></div>`;

    pokemonees.innerHTML += `<div class="divPokemon" "><figure class="imgPokemon"><img  src="${dataPokemon.img}"></figure>
                                        <p class="namePokemon" id="nameCenter"> Nombre:  ${ dataPokemon.name }</p><br><p class="namePokemon" id="nameCenter"> Altura:  ${ dataPokemon.height }</p><br><p class="namePokemon">Peso: ${dataPokemon.weight}</p></div>`;
  })
}
