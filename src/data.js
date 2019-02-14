window.pokemon = {
  filterPokemons:(dataPokemon, elementPokemon ) =>{
    return dataPokemon.filter(pokemon => {
      let typePokemon = pokemon.type[0]
      if( typePokemon === elementPokemon ){
        return true;
      }
    });


  },

  ordernarPorNombre: (pokemonArray)=>{
    const sortName =
    pokemonArray.sort ((prev,next) =>{
      if(prev.name > next.name){
        return 1;

      }else if (prev.name < next.name){
        return -1;
      }else{
        return 0;

    }


  }),
  },
  }
