window.data = {

  showAllData: (dataPokemon) => {
    //const completeData = dataPokemon.map(({name,img}) => [name, img]);
    const completeData = dataPokemon.map(({id,name,img}) => ({id,name,img}));
    return completeData;
  },

  filterByType: (dataPokemon,category) => {
    const filteredData = dataPokemon.filter(data =>(data.type.includes(category)));
    return filteredData;
  },

  filterByLetter: (dataPokemon, name) => {
    const concidence = dataPokemon.filter(data => (data.name.toLowerCase().match(name.toLowerCase())));
    return concidence;
  },

  sortData: (data,sortBy,sortOrder) => {
    data.map(element => {
       element.height = parseFloat(element.height);
       element.weight = parseFloat(element.weight);
     });

    if (sortOrder == 'asc') {
      return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    }
    else if (sortOrder == 'desc') {
      return data.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
    }

    /*
    switch (sortBy) {
      case 'name':
        if (sortOrder == 'asc') {
          return data.sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
        else if (sortOrder == 'desc') {
          return data.sort((a, b) => (a.name < b.name) ? 1 : -1);
        }
        break;
      case 'height':
        if (sortOrder === 'asc') {
          return data.sort((a, b) => (a.height > b.height) ? 1 : -1);
        }
        else if (sortOrder === 'desc') {
          return data.sort((a, b) => (a.height < b.height) ? 1 : -1);
        }
        break;
      case 'weight':
        if (sortOrder === 'asc') {
          return data.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
        }
        else if (sortOrder === 'desc') {
          return data.sort((a, b) => (a.weight < b.weight) ? 1 : -1);
        }
        break;

    }*/
  },

  computeStats: (data) => {
    let arrayCandys = [];
    data.forEach(element => {
      if(element.candy_count > 0){

        arrayCandys.push(element.candy_count)

      }
    });
    //console.log(arrayCandys);
    //const sum = arrayCandys.reduce((prev, next) => prev + next);
    //const average = sum / arrayCandys.length;
    //console.log(average);
    const minimum = Math.min.apply(null,arrayCandys);
    //const maximum = Math.max.apply(null,arrayCandys)
    // console.log(minimum);
    // console.log(maximum);
    return minimum;

  }
};
