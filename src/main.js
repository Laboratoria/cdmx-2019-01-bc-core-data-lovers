//Declaración de variables para manipular la data
const pokemones = document.getElementById('pokemones');
var POKEMON;
const dataPokemon = POKEMON.pokemon;

//Declaración para el boton filtrar
const btnFilterBy = Array.from(document.getElementsByClassName('filterData'));
const Water = document.getElementById("Water");
const btnModal = document.getElementsByClassName('btnModal');
const infoPokemon = document.getElementById("infoPokemon");

// btnFilterBy = Array.from(document.getElementsByClassName("filterData"));
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
Water.addEventListener("click", () => {
  pokemones.style.display = "none";
  filtered_out.style.display = "block";
});


//Di: Botón que regresa a la pantalla que muestra todos los pokemones
toReturn.addEventListener("click", () => {
  filtered_out.style.display = "none";
  pokemones.style.display = "block";
});

 //Di: Función que imprime los datos que son llamados y la imagen de los pokemones en el contenedor pokemones
 const toPrint = (mapData) => {
   const filter = pokemones;
   filter.innerHTML = "";
   mapData.map((dataPokemon) => {
    filter.innerHTML +=
    ` <button type="button" class="divPokemon btnPokemon ${dataPokemon.type[0]} btn btn-primary btn-lg" data-toggle="modal" data-target="#pokemon${dataPokemon.name}">
        <img src="${dataPokemon.img}"> <br><br><br><p class="name">${dataPokemon.name}</p><br>
      </button>

      <div class="modal fade" id="pokemon${dataPokemon.name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      <h2 class="modal-title" id="myModalLabel">${dataPokemon.name}</h2>
                  </div>
                  <div class="modal-body">
                    <table style="width:100%" class="details">
                      <tr>
  	                    <td>Type:${dataPokemon.type}</td>
                        <th rowspan="4"><img class="" src="${dataPokemon.img}"></th>
                      </tr>
                      <tr>
                        <td>Height:${dataPokemon.height}</td>
                      </tr>
                      <tr>
                        <td>Weigh:${dataPokemon.weigh}</td>
                      </tr>
                      <tr>
                        <td>Candy:${dataPokemon.candy} </td>
                      </tr>
                      <tr>
                        <td>weaknesses: ${dataPokemon.weaknesses}</td>
                      </tr>
                      <tr>
                        <td>55577855</td>
                       </tr>
  
                      </table>
                  </div>
              </div>
          </div>
      </div> 
    `
  });
 }

 toPrint(dataPokemon);

/* const storeFilter = (poke) => {
  poke.map(btnFilterBy);
  btnFilterBy.addEventListener("click", (event) => {

    btnFilterBy = event.target.id;
    const pokemon = window.data.filterData(dataPokemon,btnFilterBy); 
    toPrint(pokemon);
  });
}; 

storeFilter(btnFilterBy);*/

