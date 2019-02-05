const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;


const toPrint = (namePokemon,imagePokemon,typePokemon,weaknessesPokemon) =>{
    let visualPokemon = `<div class="divPokemon"><p id="name">${namePokemon}</p><br><img src="${imagePokemon}">
    <p id="details">Tipo: ${typePokemon}<br>Debilidades: ${weaknessesPokemon}</p></div>`;
    pokemones.insertAdjacentHTML("beforeend",visualPokemon);    
};

dataPokemon.forEach(element =>{
    let imagePokemon = element.img;
    let namePokemon = element.name;
    let typePokemon = element.type;
    let weaknessesPokemon = element.weaknesses;
    
    toPrint(namePokemon,imagePokemon,typePokemon,weaknessesPokemon);
});



    

