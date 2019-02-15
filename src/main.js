//Declarar objeto de la data en pokemon.js
const data = window.POKEMON.pokemon;
// variable que obtiene los datos filtrados por tipo y que después es usada para ordenar por nombre A-Z
let resultTotal;

// Declara botones
const startPokedex = document.getElementById('startPokemon');
const next = document.getElementById('nextPage');
const back = document.getElementById('regresar');
const sort = document.getElementById('ordenar');

// Declara Sections
const start = document.getElementById('start');
const rootContainer = document.getElementById('rootContainer');
const options = document.getElementById('options');
const Charmander = document.getElementById('charmander')

// Declara boton de tipos de pokemones en un array, por medio de su clase.
const buttonFilter = Array.from(document.getElementsByClassName("boton-typeChart"));

/*
Cambiar de página en Mobile
*/

startPokedex.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});

next.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "block";
  options.style.display = "none";
});

back.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});


// Obtiene los datos solicitados del objeto Data. Lo compara con el array de botones y filta por tipo.

const gettingType = (arrayofButtons) => {
  arrayofButtons.map((buttonSelected) => {
    buttonSelected.addEventListener("click", (event) => {
      Charmander.style.display = "none";
      const buttonType = event.target.id;
      const dataFiltered = window.allPokemon.dataFiltered(data, buttonType);
      printResult(dataFiltered)
    })
  });
};

gettingType(buttonFilter);
//guarda los resultados en un array

// Imprime resultados por tipo. 
const printResult = (getType) => {
  resultTotal = getType;
  const finalResult = document.getElementById('root');
  finalResult.innerHTML = "";
  getType.map(data => {
    finalResult.innerHTML += `<button class="pokedex"  style='width:100%; height:100%'>
    <img src="${data.img}">
    <br>Nùmero: ${data.id} 
    <br> Nombre: ${data.name} 
    <br> Tipo: ${data.type}</button>`;
  });
  return getType;
}

//El resultado por tipo es ordenado por orden alfabético
sort.addEventListener('click', () => {
  let orderAToZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAToZ);

});

const printOrder = (getOrder) => {
  const finalResult = document.getElementById('root');
  finalResult.innerHTML = "";
  getOrder.map(data => {
    finalResult.innerHTML += `<button class="pokedex"  style='width:100%; height:100%'>
     <img src="${data.img}">
     <br>Nùmero: ${data.id} 
     <br> Nombre: ${data.name} 
     <br> Tipo: ${data.type}</button>`;
  });
  return getOrder;
}
