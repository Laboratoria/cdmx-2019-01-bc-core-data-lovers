window.data = {

filterPokemon:(dataPokemon,types) =>{

    // const arrayPokemon = dataPokemon;
    // const tipoElegido = types;
    
    const arrayFilter = dataPokemon.filter(dataPokemon => dataPokemon.type.includes(types));
    
    return arrayFilter;

}

}
// imprim: (tipo) => {
//   let arrNew = [];


// tipo.forEach(element => {
//   if(element.type[0] === 'Water' || element.type[1] === 'Water' || element.type[2] === 'Water'){
//     arrNew.push(element)
//   }



// })

// console.log(arrNew)
// return arrNew
// },

// impri: (tipo) => {
//   let arrNew = [];

// tipo.forEach(element => {
//   if(element.type[0] === 'Fire' || element.type[1] === 'Fire' || element.type[2] === 'Fire'){
//     arrNew.push(element)
//   }

// })


// return arrNew

// },

// impr: (tipo) => {
//   const arrNew = [];

// tipo.forEach(element => {
//   if(element.type[0] === 'Grass' || element.type[1] === 'Grass' || element.type[2] === 'Grass'){
//     arrNew.push(element)
//   }

// })


// return arrNew

// }
// }
