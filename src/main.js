 rama-andrea
document.getElementById("next").addEventListener("click", () =>{
    document.getElementById("getName").style.display="none";
})



document.getElementById("showPokemons").addEventListener("click", ()=> {
    const dataPokemon = POKEMON.pokemon;
    window.pokemon.show(dataPokemon);
})


const data = POKEMON.pokemon
const pokemon = document.getElementById('POKEMON');
console.log(pokemon)
 master
