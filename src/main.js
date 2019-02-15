<<<<<<< HEAD
const botonMenu = document.getElementById('menuHide');
const returnFilter = document.getElementById('returnFilter');
const botonFilter = Array.from(document.getElementsByClassName("boton-filter"));
const browser = document.getElementById("browser");
const orderedButton = document.getElementById("orderedByAZ");
const computeStats = document.getElementById("prom")
const buttonNav = document.getElementById("buttonNav")
var POKEMON = POKEMON;
const pokemon = POKEMON.pokemon;

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
			<div class="modal-header ">
				<button type="button" class="close " data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">${pokemon.name}</h4>
			</div>
			<div class="modal-body">
      <img src="${pokemon.img}" class="imgpokemon"></br>
      <table style="width:100%">
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
      </table>
    <p class="weaknesses"> Debilidades</p>
    <p >${pokemon.weaknesses}</p>
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
  const newSortedData = window.data.sortData(pokemon)
  drawPokemon(newSortedData);
});

computeStats.addEventListener("click", () => {
=======
      const botonMenu = document.getElementById('menuHide') ;
      const pokemon = POKEMON.pokemon;
      var POKEMON = POKEMON;
      const returnFilter = document.getElementById('returnFilter');
      const botonFilter = Array.from(document.getElementsByClassName("boton-filter"));
      const browser = document.getElementById("browser");
      const orderedButton = document.getElementById("orderedByAZ");
      const orderedButtonReverse = document.getElementById("orderedByZA");
      const computeStats = document.getElementById("prom")


      const drawPokemon = (arrayPokemons) => {
      const sectionRoot = returnFilter
      sectionRoot.innerHTML = "";
      arrayPokemons.map((pokemon) => {
        sectionRoot.innerHTML += `
          <div class="pokedex">
            <p>N°${pokemon.num}</p>
            <img src="${pokemon.img}"/>
            <p>${pokemon.name}</p>
            <p class="tipoP">${pokemon.type}</p>
          </div>
        `
      })
      }

      drawPokemon(pokemon);

      botonMenu.addEventListener("click", showfilter)
      function showfilter(){

       let menuShow=document.getElementById('menuShow');
       menuShow.classList.toggle("mostrar");
       }
      // Una función que me permita mostrar al inicio los 150 pokemons
      // Cuando le de click, me abra el modal del POKEMON
      // Trabajar el footer
      // Verificar con tests que las funciones, funcionen
      // Media Queries
      // Y revise el checklist :P NO ME ACUERDO


      const getTypePokemon = (arrayButtons) => {
        arrayButtons.map((buttonType) => {
          buttonType.addEventListener("click", (event) =>{
            const buttonType = event.target.id;
            const finalArrayPokemons = window.data.filterData(pokemon, buttonType)
            drawPokemon(finalArrayPokemons)
          })
        })
      }

      getTypePokemon(botonFilter);


  const filterLetter = () => {
    browser.addEventListener('keyup',() => {
      let searchValueInput = browser.value;
      drawPokemon(window.data.filterInput(pokemon, searchValueInput));
    });
  }
  filterLetter();

      orderedButton.addEventListener("click", () => {
        const newSortedData = window.data.sortData(pokemon)
        drawPokemon(newSortedData);
      });

      orderedButtonReverse.addEventListener("click", () =>{
        const dataForReverse = window.data.sortData(pokemon);
        const dataReverse = dataForReverse.reverse();
        drawPokemon(dataReverse);
      })

      computeStats.addEventListener("click",() => {
>>>>>>> 32a7b3049364b6fa129fc9a06793e25c4ebeb985
  const newProm = window.data.computeStats(pokemon)
  const sectionRoot = returnFilter
  sectionRoot.innerHTML = "";
  sectionRoot.innerHTML += `<h1>Promedio de la Cantidad en la que aparecen todos los pokemons</h1><p>${newProm}</p>`
  return sectionRoot
<<<<<<< HEAD
});

buttonNav.addEventListener("click", () => {
  drawPokemon(pokemon);
})
=======
})



      // HOLI ACUERDENSE DE ESTO SI SUFREN... CARITA DE REGALO :)
      // const suma = (numero1, numero2) => {
      //   return numero1 + numero2
      // }
      //
      // suma(2,3)
      // suma(24,3341)
      // suma(233,3)
      // suma(212341,334)
      //
      //
      //
      //
      //
>>>>>>> 32a7b3049364b6fa129fc9a06793e25c4ebeb985
