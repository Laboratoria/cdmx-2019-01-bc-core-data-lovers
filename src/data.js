window.pokemon = {

    show:(data) => {


        const imprimir = (nombre,imagen,id) =>{

        const pokemons = document.getElementById("pokemons");
        let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}${id}</div>`;

        const imprimir = (nombre,imagen) =>{

        const pokemons = document.getElementById("pokemons");

        let nombrePokemon = `<div class="divPokemon"><figure class="imgPokemon"><img src="${imagen}"></figure>
                            <p>${nombre}</p></div>`;

       let nombrePokemon = `<div class="divPokemon"><img src="${imagen}">${nombre}</div>`;


        pokemons.insertAdjacentHTML("beforeend",nombrePokemon);

    }

    data.forEach(elemento =>{
        let nombre = elemento.name;
        let imagen = elemento.img;

        let id = elemento.id;
        imprimir(nombre, imagen, id);

        imprimir(nombre, imagen);

    })

})


    return imprimir;
}

}

}

