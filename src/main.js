//Declaración de variables para manipular la data
const dataPokemon = window.POKEMON.pokemon;

//Declaración para a secciones del html
const pokemones = document.getElementById('pokemones');
const theme = document.getElementById('theme');

//Declaración para la pantalla de walcome
const welcome = document.getElementById('welcome');
const btnStart = document.getElementById('btnStart');
const burguer = document.getElementById('burguer');

//Boton de inicio
btnStart.addEventListener("click", () => {
  welcome.classList.add('hide');
  pokemones.classList.remove('hide');
  theme.classList.remove('hide');
  burguer.classList.remove('hide');
});

//Función que imprime los datos que son llamados y la imagen de los pokemones en el contenedor pokemones
const toPrint = (mapData) => {
  const filter = pokemones;
  // filter.innerHTML = "";
  let printPokeons = '';
  mapData.map((dataPokemon) => {
    printPokeons +=
    ` <button type="button" class="divPokemon btnPokemon ${dataPokemon.type[0]} btn btn-primary btn-lg" data-toggle="modal" data-target="#pokemon${dataPokemon.id}">
        <img src="${dataPokemon.img}"> <br><p class="name">${dataPokemon.name}</p><br>
      </button>

      <div class="modal fade" id="pokemon${dataPokemon.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content bigModal">

          <div class="modal-header">
              <h2 class="modal-title" id="myModalLabel">${dataPokemon.name}</h2>
              </div>
            
            <div class="modal-padd modal-body">
            <table class="details">
            <tr> 
                  <td class="id" >Type:</td>
                  <td class="dataid">${dataPokemon.type}</td>
                  <th rowspan="9"><img class="imgModal" src="${dataPokemon.img}"></th>
                </tr>

                <tr> 
                  <td class="id">Height:</td>
                  <td class="dataid">${dataPokemon.height}</td>
                </tr> 

                <tr>  
                <td class="id">Weight:</td>
                  <td class="dataid">${dataPokemon.weight}</td>
                </tr> 
                
                <tr> 
                  <td class="id">Candy:</td>
                  <td class="dataid">${dataPokemon.candy}</td>
                </tr> 
                
                <tr> 
                <td class="id">Candy Count:</td>
                  <td class="dataid">${dataPokemon.candy_count}</td>
                  </tr> 
                
                <tr> 
                  <td class="id">Spawn Time:</td>
                  <td class="dataid">${dataPokemon.spawn_time}</td>
                </tr> 

                <tr> 
                  <td class="id">Avg Spawns:</td>
                  <td class="dataid">${dataPokemon.avg_spawns}</td>
                </tr> 
                
                <tr> 
                  <td class="id">Egg:</td>
                  <td class="dataid">${dataPokemon.egg}</td>
                </tr> 
                
                <tr> 
                  <td class="id">Weaknesses:</td>
                  <td class="dataid">${dataPokemon.weaknesses}</td>
                </tr> 
                
                <tr>
                  <th colspan="3">
                  <table class="evolution">
                      <tr>
                        <td><button type="button" class="btn btn-success btn-lg btnxsmallPre btnprueba" data-target="#pokemon${dataPokemon.num}">
                        <p class="btnEvPre"> <span class="glyphicon glyphicon-backward" aria-hidden="true"></span> PREVIOUS </p>
                        </button></td>

                        <td><button type="button" class="btn btn-info btn-lg btnxsmallEv btnprueba">
                        <img class="imgEv" src="${dataPokemon.img}"><br>
                        <p class="btnEv"> <span class="glyphicon glyphicon-leaf" aria-hidden="true"></span> ACTUAL <span class="glyphicon glyphicon-leaf" aria-hidden="true"></span> </p>
                        </button></td>

                        <td><button type="button" class="btn btn-success btn-lg btnxsmall btnprueba">
                        <p class="btnEv"> NEXT <span class="glyphicon glyphicon-forward" aria-hidden="true"></span> </p>
                        </button></td>
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
      </div>`
  });
  filter.innerHTML = printPokeons;
}

toPrint(dataPokemon);

//Filtrado
const filterType = document.getElementsByClassName('filterType');
let DataFilter;

for (let i = 0; i < filterType.length; i++) {
  filterType[i].addEventListener("click", () => {
    const poke = filterType[i].id;
    pokemones.innerHTML = "";
    const pokeFilter = window.data.filterData(dataPokemon, poke);
    toPrint(pokeFilter);
    DataFilter = pokeFilter;
  });
}

//Ordenado
const orderName = document.getElementsByClassName('orderName');

for (let i = 0; i < orderName.length; i++) {
  orderName[i].addEventListener("click", () => {
    const howDoesItOrder = orderName[i].id;
    pokemones.innerHTML = "";
    const pokeOrder = window.data.sortData(DataFilter, howDoesItOrder);
    toPrint(pokeOrder);
  })
}


const stats = document.getElementById('stats');
const array = [];

stats.addEventListener("click", () => {
  DataFilter.forEach(element => {
    const type = element.type[0];
    array.push(element.avg_spawns);
    const pokeStats = window.data.computeStats(array);
    pokemones.innerHTML += `

    <div class="modal fade" id="pokemon" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    <div class="modal-dialog" role="document">
		    <div class="modal-content avg">
          <div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          
            <h2 class="modal-title">Did you know ...</h2>
          </div>
      
          <div class="modal-body">
          <p>${type} type pokemon on average apreciatte ${pokeStats} times compared to other pokemon </p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">
              Close
            </button>
          </div>

		    </div>
	    </div>
    </div>`;

  });
});

/* const search = document.getElementById('search');

search.addEventListener("click", () => {
  alert('Se esta trabajando en esta sección')
}); */