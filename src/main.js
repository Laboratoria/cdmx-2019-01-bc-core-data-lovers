document.getElementById("next").addEventListener("click", ()=>{
  //se le marca a la compu que se le de click en el boton jugar para realizar la sig funcion Ya se ingreso el nombre (pablo) en el input-->
    let inputNombre = document.getElementById("inputName").value; //el valor (pablo) se va a guardar en mi variable inputNombre
    sessionStorage.setItem("Nombre", inputNombre);
    let nom = sessionStorage.getItem("Nombre");//GET: estpy obteniendo el valor que guarde en set bajo la referencia nombre
    document.getElementById("NombreDeUsuario").innerHTML = nom;
    document.getElementById("getName").style.display="none";
    document.getElementById("aparicion").style.display="block";
})


document.getElementById("showPokemons").addEventListener("click", ()=> {
    let dataPokemon = POKEMON.pokemon;
    window.pokemon.show(dataPokemon);
    document.getElementById("aparicion").style.display="none";
  })



document.getElementById("agua").addEventListener("click", () => {
  const agua = document.getElementById("water");
let typePokemon = POKEMON.pokemon;
// const result = window.pokemon.show(typePokemon);
const pokemonAgua = window.pokemon.imprim(typePokemon);
pokemonAgua.forEach( element => {
  let tipoPokemon = `<div><p class="tipooPokemon"> ${element.type}</p></div>
  <div class="divPokemon"><figure class="imgPokemon"><img src="${element.img}"></figure>`;
  agua.insertAdjacentHTML("beforeend", tipoPokemon);

})
})

document.getElementById("fire").addEventListener("click", () => {

  const fuego = document.getElementById("water");
let typePoke = POKEMON.pokemon;
// const result = window.pokemon.show(typePokemon);
const pokemonFuego = window.pokemon.impri(typePoke);
pokemonFuego.forEach( element => {
  let tipoPoke = `<div><p class="tipooPokemon"> ${element.type}</p></div>
  <div class="divPokemon"><figure class="imgPokemon"><img src="${element.img}"></figure>`;
  fuego.insertAdjacentHTML("beforeend", tipoPoke);

})
})

document.getElementById("grass").addEventListener("click", () => {

  const grass = document.getElementById("water");
let typePoke = POKEMON.pokemon;
// const result = window.pokemon.show(typePokemon);
const pokemonFuego = window.pokemon.impr(typePoke);
pokemonFuego.forEach( element => {
  let tipoPoke = `<div><p class="tipooPokemon"> ${element.type}</p></div>
  <div class="divPokemon"><figure class="imgPokemon"><img src="${element.img}"></figure>`;
  grass.insertAdjacentHTML("beforeend", tipoPoke);

})
})
