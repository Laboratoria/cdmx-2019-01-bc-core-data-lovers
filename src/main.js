
document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("serch").style.display="block";
    document.getElementById("main").style.display="none";
})

const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from( document.getElementsByClassName("typesPokemon"));


const obtenerTipo = (arregloBotones) => {

  arregloBotones.map((tipoPokemon) => {

      tipoPokemon.addEventListener("click", (event) =>{


      const getTypePokemon = event.target.id;


      const arregloFiltrado = window.data.filterPokemon(dataPokemon,getTypePokemon);

      imprimir(arregloFiltrado);
    })
  });

}

obtenerTipo(buttonTypes);

const imprimir = (obtenerTipo) =>{

     const pokemons = document.getElementById("pokemons");
      pokemons.innerHTML="";

      obtenerTipo.map((dataPokemon) => {

   pokemons.innerHTML+= `<div class="divPokemon" "><figure class="imgPokemon"><img src="${dataPokemon.img}"></figure>
                       <p class="namePokemon" id="nameCenter"> ${dataPokemon.name}</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;


})}
