const pokemon = POKEMON.pokemon;
var POKEMON = POKEMON;
const botonMenu = document.getElementById('menuHide');
const returnFilter = document.getElementById('returnFilter');
const botonFilter = Array.from(document.getElementsByClassName("boton-filter"));
const browser = document.getElementById("browser");
const orderedButton = document.getElementById("orderedByAZ");
const orderedReverseButton = document.getElementById("orderedByZA");
const computeStats = document.getElementById("prom")
const buttonNav = document.getElementById("buttonNav")

botonMenu.addEventListener("click", showfilter)

function showfilter() {

  let menuShow = document.getElementById('menuShow');
  menuShow.classList.toggle("mostrar");
}



const getTypePokemon = (arrayButtons) => {
  arrayButtons.map((buttonType) => {
    buttonType.addEventListener("click", (event) => {
      const buttonType = event.target.id;
      const finalArrayPokemons = window.data.filterData(pokemon, buttonType)
      drawPokemon(finalArrayPokemons)
    })
  })
}

getTypePokemon(botonFilter);

buttonNav.addEventListener("click", () => {
  drawPokemon(pokemon);
})

const drawPokemon = (arrayPokemons) => {
  const sectionRoot = returnFilter
  sectionRoot.innerHTML = "";
  arrayPokemons.map((pokemon) => {
    sectionRoot.innerHTML += `
    <div class="pokedex btnn " data-toggle="modal" data-target="#miModal${pokemon.name}" >
      <p>N°${pokemon.num}</p>
      <img src="${pokemon.img}"/>
      <p>${pokemon.name}</p>
      <p class="${pokemon.type[0]} tipoP">${pokemon.type}</p>
    </div>
<div class="modal fade modalpokemon " id="miModal${pokemon.name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modalMargin" role="document">
		<div class="modal-content modalWidth">
			<div class="modal-header ${pokemon.type[0]}">
				<button type="button" class="close " data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title White"  id="myModalLabel">${pokemon.name}</h4>
			</div>
			<div class="modal-body">
      <img src="${pokemon.img}" class="imgpokemon"></br>
      <section class="${pokemon.type[0]} section-type">
      <table style="width:80%" class="${pokemon.type[0]} table-type">
      <tr>
      <th class="weaknesses">Altura</th>
      <th class="weaknesses">Peso</th>
      </tr>
      <tr>
      <td>${pokemon.height}</td>
      <td>${pokemon.weight}</td>
      </tr>
      <tr>
      <th class="weaknesses">Dulces</th>
      <th class="weaknesses">Apariciones</th>
      </tr>
      <tr>
      <td>${pokemon.candy_count}</td>
      <td>${pokemon.avg_spawns}</td>
      </tr>
      <tr>
      <th class="weaknesses">Debilidades</th>
      </tr>
      </table>
    <p >${pokemon.weaknesses}</p>
    </section>
			</div>
		</div>
	</div>
</div>
  `
  })

}

drawPokemon(pokemon);

const filterLetter = () => {
  browser.addEventListener('keyup', () => {
    let searchValueInput = browser.value;
    drawPokemon(window.data.filterInput(pokemon, searchValueInput));
  });
}
filterLetter();

orderedButton.addEventListener("click", () => {
  const newSortedData = window.data.sortData(pokemon);
  drawPokemon(newSortedData);
});

orderedReverseButton.addEventListener("click", () => {
  const dataForReverse = window.data.sortData(pokemon);
  const dataReverse = dataForReverse.reverse();
  drawPokemon(dataReverse);
});

computeStats.addEventListener("click", () => {
  const newProm = window.data.computeStats(pokemon)
  const sectionRoot = returnFilter
  sectionRoot.innerHTML = "";
  sectionRoot.innerHTML += `<h1>Promedio de la Cantidad en la que aparecen todos los pokemons</h1><p>${newProm}</p>`
  return sectionRoot

});
