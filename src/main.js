
document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("serch").style.display="block";
    document.getElementById("main").style.display="none";
})



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




 var POKEMON;

const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from( document.getElementsByClassName("bottonPokemons"));
console.log(buttonTypes);
document.getElementById("showPokemons").addEventListener("click", ()=> {


  window.data.show(dataPokemon);
=======
  
  imprimir(dataPokemon);

})


const obtenerTipo = (arregloBotones) => {

  arregloBotones.map((tipo) => {

      tipo.addEventListener("click", (event) =>{


      const getTypePokemon = event.target.id;

        console.log(getTypePokemon);
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
                       <p class="namePokemon" id="nameCenter"> Nombre:${dataPokemon.name}</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;


})}



