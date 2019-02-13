
window.allPokemon = { 

  dataFiltered:(data,type) => {
    // const arrayFilter = data.filter(data => data.type.includes(type));
    const arrayFilter = [];
    data.forEach(element => {
      if(element.type[0] === type){
        arrayFilter.push(element)
      }
    })
    return arrayFilter;
  },

  orderData:() => {
    
  }
  } 