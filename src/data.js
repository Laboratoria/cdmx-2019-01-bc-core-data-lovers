window.pokemon = {

  show: (data) => {

    const imprimir = (objeto) => {
console.log(objeto.nombre);
     const pokemons = document.getElementById("pokemons");
      let nombrePokemon = `
      <div class="divPokemon">
        <img src="${objeto.imagen}">
        <p>${objeto.num}</p>
      </div>`;
      pokemons.insertAdjacentHTML("beforeend", nombrePokemon);

    }

    data.forEach(elemento => {
      const objetoPokemon = {
        nombre: elemento.name,
        imagen: elemento.img,
        height: elemento.height,
        num: elemento.num,
      }
     // console.log(objetoPokemon);

     // let nombre = elemento.name;
      //let imagen = elemento.img;
      //imprimir(nombre, imagen);
      imprimir(objetoPokemon);

    })
    return imprimir;
  }
}







//const example = () => {
//return 'example';
//};

//window.example = example;
