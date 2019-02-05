
//let POKEMON = POKEMON;
let dataPokemon = POKEMON.pokemon;

const filter = () => {

};

window.filter = filter;

const showAllData = () => {
  //const completeData = dataPokemon.map(({name,img}) => [name, img]);
  const completeData = dataPokemon.map(({id,name,img}) => ({id,name,img}));
  return completeData;
};

window.showAllData = showAllData;

const filterByType = (category) => {
  //const filteredData = dataPokemon.filter(data =>(data.type == category));
  //const filterData = dataPokemon.filter(data =>(data.spawn_chance > 1));
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
    });
  });
  return pokemonList;
};

window.filterByType = filterByType;
