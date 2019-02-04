window.pokemon = {

    show:(data) => {

        const imprimir = (nombre,imagen,id) =>{

        const pokemons = document.getElementById("pokemons");
        let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}${id}</div>`;
        pokemons.insertAdjacentHTML("beforeend",nombrePokemon);

    }

    data.forEach(elemento =>{
        let nombre = elemento.name;
        let imagen = elemento.img;
        let id = elemento.id;
        imprimir(nombre, imagen, id);
})

    return imprimir;
}
}
