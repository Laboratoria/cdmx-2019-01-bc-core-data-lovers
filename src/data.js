

const filterByType = (category) => {
  const pokemonList = [];
  dataPokemon.forEach(element => {
    element.type.forEach(elemenType => {
      if(elemenType === category){
        let objectPokemon = {};
        objectPokemon.id = element.id;
        objectPokemon.name = element.name;
        objectPokemon.img = element.img;
        pokemonList.push(objectPokemon);
      }
    })
  })
  return pokemonList;
 };

