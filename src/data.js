window.pokesaurius = {
//función de filtrar
  typeFilter: (data, pokemonElegido) => {
    const filterPokemonType = data.filter(element => element.type.includes(pokemonElegido));
    return filterPokemonType
  },
//función para ordenar
  sortByName: (data) => {
    const orderPokemonName = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    })
    return (orderPokemonName)
  },

}






























//typeSort:(data, ordenElegido) => {    
//}

// nameSort: (data) => {
//   const sortPokemonName = elementSort.sort();
//   console.log(sortPokemonName)

// }








//promedio : (peso)=>{
//for(let i=0; i< peso.length; i++){
// const sumWeight=
//}

//}
