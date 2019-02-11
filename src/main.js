


//Declaración de variables para manipular la data
const pokemones = document.getElementById('pokemones');
var POKEMON;
const dataPokemon = POKEMON.pokemon;
const root = document.getElementById("root");

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
});

//Di y Fa: Boton que muestra los pokemones filtrados y oculta todos
btnFilterBy.addEventListener("click", () => {
  pokemones.style.display = "none";
  filtered_out.style.display = "block";
});


//Di: Botón que regresa a la pantalla que muestra todos los pokemones
toReturn.addEventListener("click", () => {
  filtered_out.style.display = "none";
  pokemones.style.display = "block";
});

//Por cada elemento del arreglo muestra los datos llamados
dataPokemon.forEach(element => {
  let imagePokemon = element.img;
  let namePokemon = element.name;
  let typePokemon = element.type;
  let weaknessesPokemon = element.weaknesses;
  let candyPokemon = element.candy;
  let eggPokemon = element.egg;

  data.toPrint(namePokemon, imagePokemon, typePokemon, weaknessesPokemon, candyPokemon, eggPokemon);
});

const show = () => {
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
};

const filterWater = dataPokemon.filter(pokemon => pokemon.type.includes("Water"));

//Por cada elemento del arreglo muestra los datos llamados
filterWater.forEach(element => {
  let namePokemon = element.name;
  let imagePokemon = element.img;
  let typePokemon = element.type;
  data.toPrintFilter(namePokemon, imagePokemon, typePokemon);
});