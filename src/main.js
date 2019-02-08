//Declaración de variables para manipular la data
const pokemones = document.getElementById('pokemones');
var POKEMON = POKEMON;
const dataPokemon = POKEMON.pokemon;


//Declaración para el boton filtrar
const btnFilterBy = document.getElementById('btnFilterBy');
const filtered_out = document.getElementById('filtered_out');
const theme = document.getElementById("theme");

//Declaración para el boton Inicio
const btnStart = document.getElementById('btnStart');
const welcome = document.getElementById('welcome');
const toReturn = document.getElementById('toReturn');

const btnShowDetails = document.getElementById('btnShowDetails');
const showPokemones = document.getElementById('showPokemones');

btnStart.addEventListener("click", () => {
    welcome.classList.add('hide');
    pokemones.classList.remove('hide');
    theme.classList.remove('hide');  
});

//Di y Fa: Boton que muestra los pokemones filtrados y oculta todos
btnFilterBy.addEventListener("click",() =>{
    pokemones.style.display="none";
    filtered_out.style.display = "block";  
});

//Di: Botón que regresa a la pantalla que muestra todos los pokemones
toReturn.addEventListener("click", () =>{
    filtered_out.style.display = "none";
    pokemones.style.display = "block";
});


//Di: Función que imprime los datos que son llamados y la imagen de los pokemones en el contenedor pokemones
const toPrint = (namePokemon,imagePokemon,typePokemon,weaknessesPokemon,candyPokemon,eggPokemon) =>{
    let visualPokemon = `<button id="btnShowDetails" class="divPokemon ${typePokemon[0]} btnPokemon" data-toggle="modal" data-target="#details">
    <img src="${imagePokemon}">
    <br><br><br><p class="name">${namePokemon}</p><br>
    </button>`
    ;
   
    /*<p class="details"><br>Type: ${typePokemon}<br>Weaknesses: ${weaknessesPokemon}<br>
    <p class="name">Type: ${typePokemon} Candy: ${candyPokemon} </p><br> ${eggPokemon}</p>`;*/
    pokemones.insertAdjacentHTML("beforeend",visualPokemon);  
};

//Por cada elemento del arreglo muestra los datos llamados
dataPokemon.forEach(element => {
    let imagePokemon = element.img;
    let namePokemon = element.name;
    let typePokemon = element.type;
    let weaknessesPokemon = element.weaknesses;
    let candyPokemon = element.candy;
    let eggPokemon = element.egg;
    
    toPrint(namePokemon,imagePokemon,typePokemon,weaknessesPokemon, candyPokemon,eggPokemon);
});

const show = () =>{
    const info =
     `<div class="modal-fade" id="details" role="dialog"> 
        <div class="modal-dialog">
            <!--Modal content-->
            <div class="modal-content"> <!--Inicia div para mostrar la info-->
                <div class="modal-header"> <!--Inicia div header-->
                    <button class="close" data-dismiss="modal">&times;</button>
                </div><!--Cierra div header-->
                <div class="modal-body"> <!--Inicia Modal body-->
                    <p>Some text in the modal.</p>
                </div><!--Cierra Modal body-->
                <div class="modal-footer"><!--Inicia modalfooter-->
                    <button class="btn btn-danger" data-dismiss="modal">Close</button>
                </div><!--Cierra modalfooter-->
            </div> <!--Cierra div para mostrar la info-->
        </div>
    </div>`

}

/*Di y Fa: Función que filtra por tipo de Pokemón: Agua. Almacena en una variable los 
elementos de la data que tiene agua*/
const filterWater = dataPokemon.filter(pokemon => pokemon.type.includes("Water"));

const toPrintFilter = (namePokemon,imagePokemon,typePokemon) =>{
    let visualPokemonWater = `<button class="btnPokemon divPokemon ${typePokemon[0]}">
    <img src="${imagePokemon}"><br><br><br><p class="name ">${namePokemon}</p>
    </button>`;
    
    filtered_out.insertAdjacentHTML("beforeend",visualPokemonWater);    
};

//Por cada elemento del arreglo muestra los datos llamados
filterWater.forEach(element => {
    let namePokemon = element.name;
    let imagePokemon = element.img;
    let typePokemon = element.type;

    toPrintFilter(namePokemon,imagePokemon,typePokemon);
});



    

