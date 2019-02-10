    const botonMenu = document.getElementById('menuHide') ;
    const returnFilter = document.getElementById('returnFilter');
    const botonFilter = Array.from(document.getElementsByClassName("boton-filter"));
    const pokemon = POKEMON.pokemon;


    botonMenu.addEventListener("click", showfilter)
    function showfilter(){

     let menuShow=document.getElementById('menuShow');
     menuShow.classList.toggle("mostrar");
     }

       const allPokemons = (name, imagen, tipo, num) =>{
    let  getAllPokemons = `
      <div class="pokedex">
      <p>N°${num}</p>
        <img src="${imagen}"/>
        <p >${name}</p>
        <p class="tipoP">${tipo}</p>

      </div>
    `
    returnFilter.innerHTML += getAllPokemons
    };
    pokemon.map(elementPokemon => {
     let name = elementPokemon.name
     let imagen = elementPokemon.img
     let tipo = elementPokemon.type
     let num = elementPokemon.num
     allPokemons(name,imagen,tipo,num)
    })
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
          const finalArrayPokemons = data.filterData(pokemon, buttonType)
          console.log(finalArrayPokemons)
          drawPokemon(finalArrayPokemons)
        })
      })
    }

    getTypePokemon(botonFilter);



    const drawPokemon = (arrayPokemons) => {
        const sectionRoot = document.getElementById("returnFilter")
        sectionRoot.innerHTML = "";
        arrayPokemons.map((pokemon) => {
          sectionRoot.innerHTML += `
            <div class="pokedex">
              <h1 class="tipoP">${pokemon.name}</h1>
              <img src="${pokemon.img}"/>
              <p>${pokemon.id}</h1>
            </div>
          `
        })
    }



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
