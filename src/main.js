document.getElementById("next").addEventListener("click", () => {
    document.getElementById("getName").style.display="none";

})

document.getElementsByClassName("showPoke").addEventListener("click", ()=> {
     const dataPokemon = POKEMON.pokemon;
     window.pokemon.show(dataPokemon);
})
