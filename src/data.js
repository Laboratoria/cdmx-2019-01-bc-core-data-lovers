window.data = {

  showAllData: (dataPokemon) => {
    //const completeData = dataPokemon.map(({name,img}) => [name, img]);
    const completeData = dataPokemon.map(({id,name,img,height,weight,candy,egg,type}) => ({id,name,img,height,weight,candy,egg,type}));
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

  computeStats: (data,valueItem) => {
    let arrayCandys = [];
    let result = {};
    data.forEach(element => {
      if(element[valueItem] > 0){
        arrayCandys.push(element[valueItem])
      }
    });

    const sum = arrayCandys.reduce((prev, next) => prev + next);
    const averageComplete = sum / arrayCandys.length;
    result.average = parseFloat(averageComplete.toFixed(2));
    result.minimum = Math.min.apply(null,arrayCandys);
    result.maximum = Math.max.apply(null,arrayCandys);

    return result;

  }
};
