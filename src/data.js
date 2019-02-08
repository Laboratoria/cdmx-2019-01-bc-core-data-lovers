
window.pokesaurius = {
  typeFilter: (data, pokemonElegido) => {
    const filterPokemonType = data.filter(data => data.type.includes(pokemonElegido));
    // console.log(filterPokemonType)
    return filterPokemonType
  }
}
