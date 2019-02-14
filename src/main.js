//Declaración de variables para manipular la data
const pokemones = document.getElementById('pokemones');
var POKEMON;
const dataPokemon = POKEMON.pokemon;

//Declaración para el boton filtrar
const btnFilterBy = Array.from(document.getElementsByClassName('filterData'));
const Water = document.getElementById("Water");
const btnModal = document.getElementsByClassName('btnModal');

// btnFilterBy = Array.from(document.getElementsByClassName("filterData"));
const filtered_out = document.getElementById('filtered_out');
const theme = document.getElementById("theme");

//Declaración para el boton Inicio
const btnStart = document.getElementById('btnStart');
const burguer = document.getElementById ('burguer');
const welcome = document.getElementById('welcome');
const toReturn = document.getElementById('toReturn');

btnStart.addEventListener("click", () => {
  welcome.classList.add('hide');
  pokemones.classList.remove('hide');
  theme.classList.remove('hide');
  burguer.classList.remove('hide');
});

//Di y Fa: Boton que muestra los pokemones filtrados y oculta todos
Water.addEventListener("click", () => {
  pokemones.style.display = "none";
  filtered_out.style.display = "block";
});


//Di: Botón que regresa a la pantalla que muestra todos los pokemones


 //Di: Función que imprime los datos que son llamados y la imagen de los pokemones en el contenedor pokemones
 const toPrint = (mapData) => {
   const filter = pokemones;
  //  filter.innerHTML = "";
   mapData.map((dataPokemon) => {
    filter.innerHTML +=
    ` <button type="button" class="divPokemon btnPokemon ${dataPokemon.type[0]} btn btn-primary btn-lg" data-toggle="modal" data-target="#pokemon${dataPokemon.name}">
        <img src="${dataPokemon.img}"> <br><br><br><p class="name">${dataPokemon.name}</p><br>
      </button>

      <div class="modal fade" id="pokemon${dataPokemon.name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content bigModal">
                  <div class="modal-header">
                      <h2 class="modal-title" id="myModalLabel">${dataPokemon.name}</h2>
                  </div>
                  <div class="modal-body">
                    <table class="details">
                    
                      <tr> 
                          <td class="id type" >Type:</td>
                          <td class="dataid">${dataPokemon.type}</td>
                          <th rowspan="8"><img class="imgModal" src="${dataPokemon.img}"></th>
                      </tr>

                      <tr> 
                        <td class="id height">Height:</td>
                        <td class="dataid">${dataPokemon.height}</td>
                      </tr> 

                      <tr>  
                        <td class="id weigh">Weight:</td>
                        <td class="dataid">${dataPokemon.weight}</td>
                      </tr> 

                      <tr> 
                        <td class="id candy">Candy:</td>
                        <td class="dataid">${dataPokemon.candy}</td>
                      </tr> 
                      
                      <tr> 
                        <td class="id candy_c">Candy Count:</td>
                        <td class="dataid">${dataPokemon.candy_count}</td>
                      </tr> 

                      <tr> 
                        <td class="id spawn_t">Spawn Time:</td>
                        <td class="dataid">${dataPokemon.spawn_time}</td>
                      </tr> 

                      <tr> 
                        <td class="id egg">Egg:</td>
                        <td class="dataid">${dataPokemon.egg}</td>
                      </tr> 
                      
                      <tr> 
                        <td class="id weaknesses">Weaknesses:</td>
                        <td class="dataid">${dataPokemon.weaknesses}</td>
                      </tr> 

                      <tr>
                        <th colspan="3">
                            <table class="evolution">
                                <tr>
                                <td><button>Hola1</button></td>
                                <td><button>Hola2</button></td>
                                <td><button>Hola3</button></td>
                                </tr>
                            </table>
                        </th>  
                      </tr> 
  
                    </table>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">
                  Close
              </button>
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

