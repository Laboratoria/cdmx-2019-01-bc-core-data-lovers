const pokemon = POKEMON.pokemon;
console.log(pokemon);

const pokedex = document.getElementById("pokedex");





const print = (nombre,imagen,numero, tipo) => {
  let result =`<div class="pokedex" id="pokedex1"><img src="${imagen}">${nombre}${numero}<div class= "debilidades">${tipo}</div></div></div>`;
  pokedex.innerHTML += result;


}

pokemon.forEach(element => {
  let nombre =element.name;
  let imagen = element.img;
  let numero = element.num;
  let tipo = element.type
  tipo.forEach(element => {

    if (tipo === 'Grass') {
      p(tipo)

    }


  })



  print(nombre, imagen, numero)
});
