
// Estoy creando la funcion de mi boton GO, para que al darle click me pinte el resultado del input en pantalla 2
const btngetName = document.getElementById('next');
const trainerName = document.getElementById('nombre');
const bienvenido= document.getElementById('nombre-bienvenido');
const sectionName = document.getElementById('pantalla1');

btngetName.addEventListener ("click",() => {
const name = trainerName.value;
bienvenido.innerHTML = '¡Hola entrenador '  +  name  +' Bienvenido!';
sectionName.style.display ="none";

  })



// Estoy dando la funcion a mi boton de que al darle click me esconda los elementos de la pantalla1
document.getElementById("next").addEventListener("click", () =>{
//document.getElementById("getName").style.display="none";
//document.getElementById("getName").style.display="none";
})

// Estoy dando la funcionalidad a mi boton Pokemones ordenados, para que me pinte data
document.getElementById("showPokemons").addEventListener("click", ()=> {
    const dataPokemon = POKEMON.pokemon;
    window.pokemon.show(dataPokemon);
})

// Estoy dando funcionalidad a mi boton de Pekemones ordenados, que me esconda la pantalla, 1 a la 2.
const data = POKEMON.pokemon
const pokemon = document.getElementById("POKEMON");



const nombre= document.getElementById('next');
const pantalla1=document.getElementById('pantalla1');
const pantalla2=document.getElementById('pantalla2');

nombre.addEventListener("click", ()=>{
  pantalla1.classList.add('hide');
  pantalla2.classList.remove('hide');
})
const fire= document.getElementById('fire');
fire.addEventListener("click", (e) =>{
  alert("fuego 2");
})