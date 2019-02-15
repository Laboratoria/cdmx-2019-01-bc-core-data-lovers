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
  const newProm = window.data.computeStats(pokemon)
  const sectionRoot = returnFilter
  sectionRoot.innerHTML = "";
  sectionRoot.innerHTML += `<h1>Promedio de la Cantidad en la que aparecen todos los pokemons</h1><p>${newProm}</p>`
  return sectionRoot
})
