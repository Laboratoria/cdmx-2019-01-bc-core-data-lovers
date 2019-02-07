
document.getElementById("next").addEventListener("click", ()=>{
  //se le marca a la compu que se le de click en el boton jugar para realizar la sig funcion Ya se ingreso el nombre (pablo) en el input-->
    let inputNombre = document.getElementById("inputName").value; //el valor (pablo) se va a guardar en mi variable inputNombre
    sessionStorage.setItem("Nombre", inputNombre); 
    let nom = sessionStorage.getItem("Nombre");//GET: estpy obteniendo el valor que guarde en set bajo la referencia nombre
    document.getElementById("NombreDeUsuario").innerHTML = nom;
    document.getElementById("getName").style.display="none";
    document.getElementById("aparicion").style.display="block";
})

const dataPokemon = POKEMON.pokemon;
const buttonTypes = Array.from( document.getElementsByClassName("typesPokemon"));

const obtenerTipo = (arregloNuevo) => {

  arregloNuevo.map((tipoPokemon) => {
      
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

   pokemons.innerHTML+= `<div class="divPokemon"><figure class="imgPokemon"><img src="${dataPokemon.img}"></figure>
                       <p class="namePokemon"> ${dataPokemon.name}</p><br><p class="idPokemon"> Número: ${dataPokemon.type}</p></div>`;

  
})}
