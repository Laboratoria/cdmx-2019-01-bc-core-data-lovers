const dataPokes = window.POKEMON.pokemon;

//En esta seccion estoy trayendo los elemneetos del html para que los botones de hagan su funcion/

const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));
let result;
const obtenerTipo = (arregloBotones) => {
  arregloBotones.map((tipoPokemon) => {
    tipoPokemon.addEventListener("click", (event) => {
      const getTypePokemon = event.target.id;
      const arregloFiltrado = window.data.filterData(dataPokes, getTypePokemon);
      imprimir(arregloFiltrado);
      result = arregloFiltrado;
      return arregloFiltrado;
    })
  });
}
obtenerTipo(buttonTypes);
const imprimir = (obtenerTipo) => {

  const pokemons = document.getElementById("paint");
  pokemons.innerHTML = "";
  obtenerTipo.map((dataPokes) => {
    pokemons.innerHTML += `<div class="imagesPokemon"><figure>

<img src="${dataPokes.img}"></figure>

<div class="texto-pokemon"><p>Nombre: ${ dataPokes.name}</p>
<p> Candy: ${ dataPokes.candy}</p>
<p> Altura: ${ dataPokes.height}</p>
<p> Peso: ${ dataPokes.weight}</p>
<p> Avg Spawns: ${ dataPokes.avg_spawns}</p>
<p> Debilidades: </p>
<p>${ dataPokes.weaknesses}</p></div>

</div>`
  })

};

/*ordenando pokemon*/

const sortingRadio = document.getElementsByName("order");
const paintOrder = document.getElementById("paint");
const arrayButtonRadio = Array.from(sortingRadio)
const getOrderPokemon = (arrayButtonRadio) => {

  arrayButtonRadio.map(radio => {
    radio.addEventListener("click", () => {

      if (radio.checked === true) {
        let idRadio = radio.id.split('-');
        const cachando = window.data.sortData(result, idRadio[1], idRadio[0]);
        paintOrder.innerHTML = "";
        imprimir(cachando);
      }
    });

  });


  //creando slash//
  setTimeout(function () {
    document.getElementById("splash").className = "hide";
  }, 3000);


}

getOrderPokemon(arrayButtonRadio);

//calculo

const info = document.getElementById('info');

const arreglo = [];

info.addEventListener("click", () => {
  result.forEach(element => {


    arreglo.push(element.avg_spawns);
    const statsPok = window.data.computeStats(arreglo);
    alert("Sabías que... en promedio este tipo de pokemons tienden a aparecer cada : " + statsPok);
    statsPok.innerHTML + -"";

  });
})
