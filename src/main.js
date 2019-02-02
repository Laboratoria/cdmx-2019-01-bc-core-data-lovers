const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;


const toPrint = (namePokemon,imagePokemon) =>{
    let visualPokemon = `<div class="divPokemon">${namePokemon}<br><img src="${imagePokemon}"></div>`;
    pokemones.insertAdjacentHTML("beforeend",visualPokemon);    
};

dataPokemon.forEach(element =>{
    let imagePokemon = element.img;
    let namePokemon = element.name;
    
    toPrint(namePokemon,imagePokemon);
});



    

