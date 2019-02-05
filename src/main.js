//Declaración de variables para manipular la data
const pokemones = document.getElementById('pokemones');
const dataPokemon = POKEMON.pokemon;

//Declaración para el boton filtrar
const btnFilterBy = document.getElementById('btnFilterBy');
const filtered_out = document.getElementById('filtered_out');
const theme = document.getElementById("theme");

//Declaración para el boton Inicio
const btnStart = document.getElementById('btnStart');
const welcome = document.getElementById('welcome');
const toReturn = document.getElementById('toReturn');

btnStart.addEventListener("click", () => {
    welcome.classList.add('hide');
    pokemones.classList.remove('hide');
    theme.classList.remove('hide');
    
})

//Función para filtrar
btnFilterBy.addEventListener("click",() =>{
    pokemones.classList.add('hide');
    filtered_out.classList.remove('hide');
});

toReturn.addEventListener("click", () =>{
    filtered_out.classList.add('hide');
    pokemones.classList.remove('hide');
})

//Función que imprime los datos que son llamados y la imagen de los pokemones
const toPrint = (namePokemon,imagePokemon,typePokemon,weaknessesPokemon,candyPokemon,eggPokemon) =>{
    let visualPokemon = `<button id="btnPokemon" class="divPokemon ${typePokemon[0]}"><p class="name ">${namePokemon}</p><br><img src="${imagePokemon}">
    </button>`;
    
    /*<p class="details"><br>Type: ${typePokemon}<br>Weaknesses: ${weaknessesPokemon}<br>
    Candy: ${candyPokemon} <br> ${eggPokemon}</p>`;*/
    pokemones.insertAdjacentHTML("beforeend",visualPokemon);    
};

//Por cada elemento del arreglo muestra los datos llamados
dataPokemon.forEach(element =>{
    let imagePokemon = element.img;
    let namePokemon = element.name;
    let typePokemon = element.type;
    let weaknessesPokemon = element.weaknesses;
    let candyPokemon = element.candy;
    let eggPokemon = element.egg;
    
    toPrint(namePokemon,imagePokemon,typePokemon,weaknessesPokemon, candyPokemon,eggPokemon);
});

const toPrintFilterOut = (namePokemon,typePokemon,imagePokemon) => {
    let visualPokemon = `<section id="filtered_out" class="divPokemon"><p class="name">${namePokemon}</p><br>
    <img src="${imagePokemon}"><br><p class="details">Type: ${typePokemon}</p></section>`;
    filtered_out.insertAdjacentHTML("beforeend",visualPokemon); 
}; 

dataPokemon.forEach(element =>{
    let namePokemon = element.name;
    let imagePokemon = element.img;
    let typePokemon = element.type;
    
    toPrintFilterOut(namePokemon,typePokemon,imagePokemon);
});



    

