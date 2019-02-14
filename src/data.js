
window.pokesaurius = {
  
  typeFilter: (data, pokemonElegido) => {
   const filterPokemonType = data.filter(element => element.type.includes(pokemonElegido));
   return filterPokemonType

  },


  sortByName:(data)=>{
    const orderPokemonNAme=data.sort((a,b)=> {
      if(a.name > b.name){
        return 1;
      }
      if(a.name < b.name){
        return-1;
      }
    })
    return(orderPokemonNAme)
  }

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


