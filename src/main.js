const datapokemon = window.POKEMON.pokemon;
//En esta seccion estoy trayendo los elemneetos del html para que los botones de hagan su funcion/
const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));
let  result;  
const obtenerTipo = (arregloBotones) => {
    arregloBotones.map((tipoPokemon) => {
    tipoPokemon.addEventListener("click", (event) => {
      const getTypePokemon = event.target.id;
      const arregloFiltrado = window.data.filterData(datapokemon, getTypePokemon);
      imprimir(arregloFiltrado);
     result = arregloFiltrado;
     //console.log(result);
      return arregloFiltrado;
      

    })
  });
}

obtenerTipo(buttonTypes);
//let  result; 
const imprimir = (obtenerTipo) => {
  //result =obtenerTipo;
  const pokemons = document.getElementById("probando");
  pokemons.innerHTML = "";

  obtenerTipo.map((datapokemon) => {
    pokemons.innerHTML += `<div class="imagesPokemon"><figure>
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

const orderRadio = document.getElementsByName("order");
const pintaorder = document.getElementById("probando");


const arrayRadio = Array.from(orderRadio)

const getOrderPokemon = (arrayRadio) => {

  arrayRadio.map(radio => {
    radio.addEventListener("click", () => {
      
      if (radio.checked === true) {
        let idRadio = radio.id.split('-');
        const cachando =window.data.sortData(result,idRadio[1],idRadio[0]);
       pintaorder.innerHTML="";
       imprimir (cachando);
       //console.log(cachando);

       
        
      }
    });
  });
  
}
getOrderPokemon(arrayRadio);
