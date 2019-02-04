window.pokemon = {

    show:(data) => {

        const imprimir = (nombre,imagen) =>{

        const pokemons = document.getElementById("pokemons");
        let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">
                            <p>${nombre}</p></div>`;
        pokemons.insertAdjacentHTML("beforeend",nombrePokemon);

    }

    data.forEach(elemento =>{
        let nombre = elemento.name;
        let imagen = elemento.img;
        imprimir(nombre, imagen);
})

    return imprimir;
}
}