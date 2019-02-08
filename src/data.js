
window.pokesaurius = {
  typeFilter: (data,optionFilter)=>{   
    
    let arrayPokemon= data;
    const arrayFilteredPokemons= arrayPokemon.filter( () => data.type.includes(optionFilter))
    return arrayFilteredPokemons;

  },

//includes busca un srting en especifico





/*data.forEach(pokemon => {
      if(pokemon.type[0] === 'Ice' || pokemon.type[1] === 'Ice'|| pokemon.type[2] === 'Ice'  ){
        dataFil.push(pokemon)
      }
    });
console.log(dataFil)
return dataFil
}

  //   const type=[];
  // data.forEach(element => {
  //     let allTypes=element.type;
  //     const arrayType= type.push(allTypes);
  //     return arrayType;
  //   });
  // }
  }
 }; 
};*/
