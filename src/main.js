const datapokemon= POKEMON.pokemon;
const buttonTypes =Array.from( document.getElementsByClassName("typesPokemon"));

const obtenerTipo =(arregloBotones) => {
  arregloBotones.map((tipoPokemon) =>{
    tipoPokemon.addEventListener("click",(event)=>{
      const getTypePokemon = event.target.id;
      const arregloFiltrado =window.data.filterData(datapokemon,getTypePokemon);
      imprimir(arregloFiltrado);
    })
  });
}

obtenerTipo(buttonTypes);

const imprimir =(obtenerTipo) =>{
  const pokemons = document.getElementById("probando");
  pokemons.innerHTML="";

  obtenerTipo.map((datapokemon) =>{
pokemons.innerHTML+= `<p> <img src="${datapokemon.img}">
<br>Nombre:${datapokemon.name}</br>
<br> Su Id es :${datapokemon.id}</br>
<br> Su candy es :${datapokemon.candy}</br>
<br> Su altura es :${datapokemon.height}</br>
<br> Su peso es :${datapokemon.weight}</br>
<br> debilidades :${datapokemon.weaknesses}</br>
</p>`
  })
  
}




 



















/* estoy creando variable y metiendo mis paginas*/
/*
const pagInic = document.getElementById('PaginaInicio');
const pagElemen = document.getElementById('PaginaElementos');
const pagPerf = document.getElementById('PaginaPerfil');*/

/*estoy llamando al 2 boton de la seccion Pagina Inicio de mi index html----------------------*/
/*const start = document.getElementById("Start");*/


/*Dandole un evento a mi boton start y pueda ir a la siguiente pagina*/
/*start.addEventListener("click", () => {
    pagInic.classList.add("ocultar");
    pagElemen.classList.remove("ocultar");
  });
  */