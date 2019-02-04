window.pokemon = {

    show:(data) => {

        const imprimir = (nombre,imagen) =>{

        const pokemons = document.getElementById("pokemons");
        let nombrePokemon = `<div class="divPokemon"><figure class="imgPokemon"><img src="${imagen}"></figure>
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