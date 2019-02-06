window.pokemon = {

    show:(data, type) => {

        const imprimir = (nombre,imagen,id) =>{

        const pokemons = document.getElementById("pokemons");

        let nombrePokemon = `<div class="divPokemon"><figure class="imgPokemon"><img src="${imagen}"></figure>
                            <p class="namePokemon"> ${nombre}</p><br><p class="idPokemon"> Número: ${id}</p></div>`;

        pokemons.insertAdjacentHTML("beforeend",nombrePokemon);



        };
    data.forEach(elemento =>{

        let nombre = elemento.name;
        let imagen = elemento.img;
        let id = elemento.id;
        imprimir(nombre, imagen, id);

     })
    return imprimir;



},
imprim: (tipo) => {
  const arrNew = [];
tipo.forEach(element => {
  if(element.type[0] === 'Water' || element.type[1] === 'Water' || element.type[2]){
    arrNew.push(element)
  }
// let tipoPokemon = `<div><p class="tipooPokemon"> ${element.type}</p></div>`;
// filtrado.insertAdjacentHTML("beforeend", tipoPokemon);
})

console.log(arrNew)
return arrNew
}

};


  // tipo.forEach(elemento => {
  //
  //     let tipo = elemento.type;
  //
  //     imprimir(type);
  //   })

    // return imprim;






//
// }


//   show: (type) => {
// const imprim = (type) => {
//
//   const filtrado = type.filter(fire)
// let tipoPokemon = `<div><p class="namePokemon"> ${nombre}</p></div>`;
// filtrado.insertAdjacentHTML("beforeend", tipoPokemon);
//
// };
//
// type.forEach(elemento => {
//
//     let nombre = elemento.name;
//     let imagen = elemento.img;
//     let id = elemento.id;
//     imprimir(nombre, imagen, id);
//   })
//
//   return imprimir;
// }
//   }
