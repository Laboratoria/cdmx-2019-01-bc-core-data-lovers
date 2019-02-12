// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window




window.allPokemon = { 
  dataFiltered:(data,types) =>{
  const arrayPokemon= data ;
    const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
    return arrayFilter;
  }
  
  }