// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

<<<<<<< HEAD
const buscar = () => {
 
};

window.buscar = buscar;
=======
/*const example= () => {
  return 'example';
};

window.example = example;*/

/*
//
//open space john
const dataPokemon = POKEMON.pokemon.weaknesses;
console.log(dataPokemon);
//función para traer el elemento del html donde vamos a pintar la data
const types = document.getElementById('types');
//función para imprimir elementos en el html
const print = (weaknesses) => {
  let result = `<h4>${weaknesses}</h4>`
  indicator.insertAdjacentHTML("beforeend", result);
}
//imprime todo, pero "data" es un objeto, así que para iterarlo, hay que hacer un forIn
//función de extraer elementos:
dataPokemon.forEach(element => {
  let weaknesses = element.weaknesses;
  print(weaknesses);
});
*/
/*
const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;

const imprimir =(nombre,imgen) => {
  let nombrePokemon = '<div class ="divPokemon"><img src="${imagen}">${nombre} </div>';
  pokemones.insertAdjacentHTML("beforeend",nombrePokemon);

};
dataPokemon.forEach(elemento =>{
  let nombre =elemento.name;
  let imagen = elemento.img;
  imprimir(nombre,imagen);
});*/

const pokes = document.getElementById("probando");
const datapokes = POKEMON.pokemon;

const imprimir =(imagen,nombre2,id,candy,altura,peso,debilidades) => {
  let nombrePokemon = `<p> <img src="${imagen}">Nombre:${nombre2}
  <br> Su Id es :${id}</br>
  <br> Su candy es :${candy}</br>
  <br> Su altura es :${altura}</br>
  <br> Su peso es :${peso}</br>
  <br> debilidades :${debilidades}</br>
  
  
  
  </p>`;
  

  pokes.insertAdjacentHTML("beforeend",nombrePokemon);
};
datapokes.forEach(elemento => {
  let imagen = elemento.img;
  let nombre2 = elemento.name;
  let id=elemento.id;
  let candy= elemento.candy;
  let altura = elemento.height;
  let peso =elemento.weight;
  let debilidades =elemento.weaknesses;
 
  imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
  
});

>>>>>>> upstream/master
