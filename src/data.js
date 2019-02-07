const filter = () => {

};

window.filter = filter;

const showAllData = (dataPokemon) => {
  //const completeData = dataPokemon.map(({name,img}) => [name, img]);
  const completeData = dataPokemon.map(({id,name,img}) => ({id,name,img}));
  return completeData;
};

window.showAllData = showAllData;

const filterByType = (dataPokemon,category) => {
  const filteredData = dataPokemon.filter(data =>(data.type.includes(category)));
  //const filteredData = dataPokemon.filter(data =>(data.spawn_chance > 1));
  console.log(filteredData)
  return filteredData;
  /*const pokemonList = [];
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
  return pokemonList;*/
};

window.filterByType = filterByType;

const filterByLetter = (dataPokemon, name) => {
  const concidence = dataPokemon.filter(data => (data.name.toLowerCase().match(name.toLowerCase())));
  console.log(concidence);
  return concidence;
}

window.filterByLetter = filterByLetter;



const sortData = (data,sortBy,sortOrder) =>{
  let orderData = [];
  switch (sortBy) {
    case 'name':
      if (sortOrder === 'asc') {
        orderData = data.sort((a, b) => (a.name > b.name) ? 1 : -1);
      }
      else if (sortOrder === 'desc') {
        console.log(sortBy);
        orderData = data.sort((a, b) => (a.name > b.name) ? -1 : 1);
      }
      break;
    case 'height':
      if (sortOrder === 'asc') {
        orderData = data.sort((a, b) => (a.height > b.height) ? 1 : -1);
      }
      else if (sortOrder === 'desc') {
        console.log(sortBy);
        orderData = data.sort((a, b) => (a.height > b.height) ? -1 : 1);
      }
      break;
    case 'weight':
      if (sortOrder === 'asc') {
        orderData = data.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
      }
      else if (sortOrder === 'desc') {
        console.log(sortBy);
        orderData = data.sort((a, b) => (a.weight > b.weight) ? -1 : 1);
      }
      break;
  }
  console.log(orderData);
  return orderData;
}

window.sortData = sortData;
