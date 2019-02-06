// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.pokesaurius = {
  typeFilter: (data)=>{   
    // data.forEach((element,i) => {
    // let name=element.name;
    // let type=element.type;
    // let img=element.img;
    // orderName.push(name);
    let dataFil = [];
    data.forEach(pokemon => {
      if(pokemon.type[0] === 'Fire' || pokemon.type[1] === 'Fire'|| pokemon.type[2] === 'Water'  ){
        dataFil.push(pokemon)
      }
    });
console.log(dataFil)
return dataFil
}

  //   const type=[];
  // data.forEach(element => {
  //     let allTypes=element.type;
  //     const arrayType= type.push(allTypes);
  //     return arrayType;
  //   });
  // }
  } 

