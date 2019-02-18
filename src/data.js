
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
  },


  pokemonModal:(data, getIdElement) =>{
    const pokemonId = data.filter(element => element.id==getIdElement);
    console.log(pokemonId)
    return pokemonId;
}












//   {
//   if (element.id === modalSelected){
//   console.log(element.id);

//   pokemonId = element;
//   return element;
// }



// return pokemonId;
// }


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


