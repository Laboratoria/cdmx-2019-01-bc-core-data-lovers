//Declarar objeto de la data
const data = window.POKEMON.pokemon;

// Declara botones
const startPokedex = document.getElementById('startPokemon');
const next = document.getElementById('nextPage');
const back = document.getElementById('regresar');
const sortt = document.getElementById('ordenar');
const sortDesk = document.getElementById('ordenarDesktop');


// Declara Sections
const start = document.getElementById('start');
const rootContainer = document.getElementById('rootContainer');
const options = document.getElementById('options');
const Charmander = document.getElementById('charmander');
const gif = document.getElementById('charmanderbackground');

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
      gif.style.display='none';
      const buttonType = event.target.id;
      const dataFiltered = window.allPokemon.dataFiltered(data, buttonType);
      printResult(dataFiltered)
    })
  });
};

gettingType(buttonFilter);
//guarda los resultados en un array

let resultTotal;

// Imprime resultados por tipo. 
const printResult = (getType) => {
  resultTotal = getType
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
};

//ordena de la a - z 
sortt.addEventListener('click' , () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAtoZ);
})
sortDesk.addEventListener('click' , () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printOrder(orderAtoZ);
})
//imprime de la a - z
const printOrder = (arrayOfTypes) => {
  const orderResult = document.getElementById('root');
  orderResult.innerHTML = "";
  arrayOfTypes.map(data => {
    orderResult.innerHTML += `<button class="pokedex"  style='width:100%; height:100%'>
    <img src="${data.img}">
    <br>Nùmero: ${data.id} 
    <br> Nombre: ${data.name} 
    <br> Tipo: ${data.type}</button>`;
  });
  return arrayOfTypes;
};
