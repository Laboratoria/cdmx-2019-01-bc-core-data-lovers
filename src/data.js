
window.pokesaurius = {
  
  typeFilter: (data, pokemonElegido) => {
   const filterPokemonType = data.filter(element => element.type.includes(pokemonElegido));
   return filterPokemonType

  },


  sortByName:(data)=>{
    const orderPokemonNAme=data.sort((a,b)=> {
      if(a.name > b.name){
        return 1;
      }else{
        return-1;
      }
    })
    return(orderPokemonNAme)
  },

  
  //getPokemonById:(data, getIdElement) =>{
   // const pokemon = data.filter(element => element.id == getIdElement);
   // console.log(pokemon);
    
    //return pokemon;


  getPokemonById:(data, getIdElement) =>{
    const pokemon = data.filter(element => element.id == getIdElement);
    console.log(pokemon);
    
    return pokemon;
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




