// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.data={ //cambia

//funcion de filtrar
filterData:(dataPokemon,types) =>{
const arrayPokemon= dataPokemon ;
  const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
  return arrayFilter;
}

}








/*



let mostrar = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
 
    let nombrePokemon = `<p> <img src="${imagen}">
    <br>Nombre:${nombre2}</br>
    <br> Su Id es :${id}</br>
    <br> Su candy es :${candy}</br>
    <br> Su altura es :${altura}</br>
    <br> Su peso es :${peso}</br>
    <br> debilidades :${debilidades}</br>
    </p>`;
  }

datapokes.forEach(elemento => {
  let imagen = elemento.img;
  let nombre2 = elemento.name;
  let id = elemento.id;
  let candy = elemento.candy;
  let altura = elemento.height;
  let peso =elemento.weight;
  let debilidades =elemento.weaknesses;
  mostrar(imagen ,nombre2,id,candy,altura,peso,debilidades);
 
  
});






/*En esta seccion estoy extrayendo datos especificos de la data*/


/*
const pokes = document.getElementById("probando");
const imprimir = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
  let nombrePokemon = `<p> <img src="${imagen}">
  <br>Nombre:${nombre2}</br>
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
  let id = elemento.id;
  let candy = elemento.candy;
  let altura = elemento.height;
  let peso =elemento.weight;
  let debilidades =elemento.weaknesses;
  imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
});*/
/*En esta Seccion estoy trabajando en la seccion de busqueda*/

/*

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

}*/


/*Probando filter*/
/*const pokes = document.getElementById("probando");

 const filterElement= POKEMON.pokemon;
 let resultFilter = filterElement.filter(pokemon => pokemon.type.includes("Water"));
 
 console.log(resultFilter)*/

// Del arreglo resultFilter, necesito pintarlo en el HTML

/*resultFilter.map((pokemon) => {
    pokes.innerHTML += `



    <article id="${pokemon.id}">
      <p>${pokemon.name}</p>
      <img src="${pokemon.img}" />
    </article>
    `
})
*/



 /*imprimir(resultFilter);*/

 /*let newArr2 = datapokes.filter(pokemon => pokemon.type.includes("Water"));
 console.log(newArr2);

 let newArr3 = datapokes.filter(pokemon => pokemon.name.includes("Pikachu"));
 console.log(newArr3);*/

/*
const pokes=document.getElementById("probando");
const filterElement=filterElement.filter(pokemon => pokemon.type.includes("Fire"));
resultFilter.map((pokemon)=> { 
pokes.innerHTML +=`
<article id="${pokemon.id}">
<p>${pokemon.name}</p>
<img src="${pokemon.img}"/>
</article>
`
})*/