document.getElementById("next").addEventListener("click", () =>{
    document.getElementById("getName").style.display="none";
})



document.getElementById("showPokemons").addEventListener("click", ()=> {
    const dataPokemon = POKEMON.pokemon;
    window.pokemon.show(dataPokemon);
})

