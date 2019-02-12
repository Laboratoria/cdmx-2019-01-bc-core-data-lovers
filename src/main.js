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
     filter.innerHTML += `<button id="${dataPokemon.name}" class="divPokemon btnPokemon ${dataPokemon.type[0]} btnModal" data-toggle="modal" data-target="#pokemon${dataPokemon.name}">
    <img src="${dataPokemon.img}">
    <br><br><br><p class="name">${dataPokemon.name}</p><br>
    </button>`;
  });
 }

 toPrint(dataPokemon);
  

const show = (dataPokemon) => {console.log('jwfl')
// $('#myModal').modal('toggle');

  infoPokemon.innerHTML =
    `<div class="modal fade" id="pokemon${dataPokemon.name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${dataPokemon.img}" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>`
    
  };


/* const storeFilter = (poke) => {
  poke.map(btnFilterBy);
  btnFilterBy.addEventListener("click", (event) => {

    btnFilterBy = event.target.id;
    const pokemon = window.data.filterData(dataPokemon,btnFilterBy); 
    toPrint(pokemon);
  });
}; 

storeFilter(btnFilterBy);*/


for (let i=0; i<btnModal.length; i++){
  btnModal[i].addEventListener("click",() => {
    console.log(btnModal[i]);
    show();
  });
}