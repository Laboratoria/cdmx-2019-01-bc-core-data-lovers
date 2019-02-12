const filter = () => {

};

window.filter = filter;

/*const showAllData = (dataPokemon) => {
  //const completeData = dataPokemon.map(({name,img}) => [name, img]);
  const completeData = dataPokemon.map(({id,name,img}) => ({id,name,img}));
  return completeData;
};
window.showAllData = showAllData; */

const filterByType = (dataPokemon,category) => {
  const filteredData = dataPokemon.filter(data =>(data.type.includes(category)));
  return filteredData;
 
};

window.filterByType = filterByType;

const filterByLetter = (dataPokemon, name) => {
  const concidence = dataPokemon.filter(data => (data.name.toLowerCase().match(name.toLowerCase())));
  return concidence;
}

window.filterByLetter = filterByLetter;

/*
const sortData = (orderData,sortBy,sortOrder) => {  
      /*"pretest": "npm run eslint && npm run htmlhint",
  if (sortOrder === 'asc') {
    
    return data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] <  b[sortBy]) {
        return -1;
      }
      return 0;
    }
    );
  } else {
    return data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    }
    );

  } */

  switch (sortBy) {
    case 'name':
      if (sortOrder == 'asc') {
        let newArray = [];
        newArray = data.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return newArray;
      }
      else if (sortOrder == 'desc') {
        let newArray = [];
        newArray = data.sort((a, b) => (a.name > b.name) ? -1 : 1);
        return newArray;
      }
      break;
    case 'height':
      if (sortOrder === 'asc') {
        return data.sort((a, b) => (a.height > b.height) ? 1 : -1);
      }
      else if (sortOrder === 'desc') {
        return data.sort((a, b) => (a.height > b.height) ? -1 : 1);
      }
      break;
    case 'weight':
      if (sortOrder === 'asc') {
        return data.sort((a, b) => (a.weight > b.weight) ? 1 : -1);
      }
      else if (sortOrder === 'desc') {
        return data.sort((a, b) => (a.weight > b.weight) ? -1 : 1);
      }
      break;
    default:
      break;
  }
}

/*
const sortDataNew = (data, sortBy, sortOrder) => {
  const arr = data;
  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if (sortOrder  === 'asc') {
          if (arr[i][sortBy] > arr[j][sortBy]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;            }
        } else {
          if (arr[i][sortBy] < arr[j][sortBy]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;   
          }
        }
      }
  }
  return arr;
};
window.sortDataNew =sortDataNew;
window.sortData = sortData;
*/