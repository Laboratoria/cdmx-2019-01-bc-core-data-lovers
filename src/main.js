
document.getElementById("next").addEventListener("click", ()=>{
    document.getElementById("serch").style.display="block";
    document.getElementById("main").style.display="none";
    imprimir(dataPokemon);
  })
 var POKEMON;
const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from( document.getElementsByClassName("bottonPokemons"));
const buttonOrder = Array.from( document.getElementsByClassName("sortTipo"));



const obtenerTipo = (arregloBotones) => {

  arregloBotones.map((tipo) => {

      tipo.addEventListener("click", (event) =>{


      const getTypePokemon = event.target.id;


      const arregloFiltrado = window.data.filterPokemon(dataPokemon,getTypePokemon);

      imprimir(arregloFiltrado);
    })
  });

}

obtenerTipo(buttonTypes);

const sortButton = (botonesOrder)=>{
  botonesOrder.map(eventoSor =>{
    eventoSor.addEventListener("click",(event) =>{
      const idDivi = event.target.id.split("-");
      const sortBy = idDivi[0];
      const sortOrder = idDivi[1];
      const arrayOrde = window.data.sortDataPokemon(dataPokemon, sortBy, sortOrder);
         
      imprimir(arrayOrde);
      
    })
  })
}

sortButton(buttonOrder);




const imprimir = (obtenerTipo) =>{

     const pokemons = document.getElementById("pokemons");
      pokemons.innerHTML="";

      obtenerTipo.map((dataPokemon) => {

   pokemons.innerHTML+= `<div class="divPokemon" "><figure class="imgPokemon"><img src="${dataPokemon.img}"></figure>
                       <p class="namePokemon" id="nameCenter"> Nombre:${dataPokemon.name}</p><br><p class="namePokemon"> ${dataPokemon.type}</p></div>`;


})}



