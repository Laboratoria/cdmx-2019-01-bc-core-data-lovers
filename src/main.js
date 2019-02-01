const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;


const toPrint = (namePokemon,imagePokemon) =>{
    let visualPokemon = `<section class="divPokemon"><img src"${imagePokemon}">${namePokemon}</section>`;
    pokemones.insertAdjacentHTML("beforeend",visualPokemon);    
};

dataPokemon.forEach(element =>{
    let namePokemon = element.name;
    let imagePokemon = element.img;
    toPrint(namePokemon,imagePokemon);
});



