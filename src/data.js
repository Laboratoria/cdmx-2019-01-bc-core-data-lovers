// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const buscar = () => {
 
};

window.buscar = buscar;
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
});*/

/*En esta seccion estoy extrayendo datos especificos de la data*/
const pokes = document.getElementById("probando");
const datapokes = POKEMON.pokemon;

const imprimir = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
  let nombrePokemon = `<p> <img src="${imagen}">Nombre:${nombre2}
  <br> Su Id es :${id}</br>
  <br> Su candy es :${candy}</br>
  <br> Su altura es :${altura}</br>
  <br> Su peso es :${peso}</br>
  <br> debilidades :${debilidades}</br>
  </p>`;
<<<<<<< HEAD
  pokes.insertAdjacentHTML("beforeend",nombrePokemon);
=======
  pokes.insertAdjacentHTML("beforeend", nombrePokemon);
>>>>>>> upstream/master
};
datapokes.forEach(elemento => {
  let imagen = elemento.img;
  let nombre2 = elemento.name;
  let id = elemento.id;
  let candy = elemento.candy;
  let altura = elemento.height;
<<<<<<< HEAD
  let peso =elemento.weight;
  let debilidades =elemento.weaknesses;
 
  imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
 
=======
  let peso = elemento.weight;
  let debilidades = elemento.weaknesses;

  imprimir(imagen, nombre2, id, candy, altura, peso, debilidades);

>>>>>>> upstream/master
});
let water = datapokes.filter(pokemonWater => elemento.type =="Water");
document.addEventListener("click",elemento());



/*En esta Seccion estoy trabajando en la seccion de busqueda*/

function searching() {
  document.getElementById("result").innerHTML = '';

  let filtro = [
    "Dragonair",
    "pikachu",
    "mew",
    "mewtwo",
    "moltres"
  ];

  let elemento = document.getElementById("busqueda").value;
  let proceso = elemento.length;
  for (indice in filtro) {
    let name = filtro[indice];
    let str = name.substring(0, proceso);
    if (elemento.length <= name.length && elemento.length != 0 && name.length != 0) {
      if (elemento.toLowerCase() == str.toLowerCase()) {
        let node = document.createElement("LI");
        let textnode = document.createTextNode(filtro[indice]);
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
      } else {
        //alert('no')
      }
    }
  }
}
