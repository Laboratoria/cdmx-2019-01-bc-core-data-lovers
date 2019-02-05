window.pokemon = {

    show:(data) => {

        const imprimir = (nombre,imagen,id) =>{       

        const pokemons = document.getElementById("pokemons");

        let nombrePokemon = `<div class="divPokemon"><figure class="imgPokemon"><img src="${imagen}"></figure>
                            <p class="namePokemon"> ${nombre}</p><br><p class="idPokemon"> Número: ${id}</p></div>`;

        pokemons.insertAdjacentHTML("beforeend",nombrePokemon);    
        };
    data.forEach(elemento =>{
        
        let nombre = elemento.name;
        let imagen = elemento.img;
        let id = elemento.id;
        imprimir(nombre, imagen, id);

     })
    return imprimir;
        }
    }



