//VARIABLES
const url = "./data/pokemon/pokemon.json";
const buttonFilter = Array.from(document.getElementsByClassName("btn"));
const sortAtoZ = document.getElementById('bottom-button-sort-AtoZ');
const sortZtoA = document.getElementById('bottom-button-sort-ZtoA');
const searcher = document.getElementById('searcher');
let resultTotal;
let dataPoke;

//Getting data from Json
fetch(url)
  .then(response => response.json())
  .then(data => dataPoke = data.pokemon)
  .then(() => window.allPokemon.dataFiltered(dataPoke))
  .then(() => window.allPokemon.filterByName(dataPoke));

// FUNCTIONS
const gettingType = (arrayofButtons) => {
  arrayofButtons.map((buttonSelected) => {
    buttonSelected.addEventListener("click", (event) => {
      const buttonType = event.target.id
      const dataFiltered = window.allPokemon.dataFiltered(dataPoke, buttonType)
      printResult(dataFiltered)
    })
  })
};

const printResult = (getType) => {
  resultTotal = getType
  const finalResult = document.getElementById('results');
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

//INVOCACIONES Y EVENTOS

gettingType(buttonFilter);

searcher.addEventListener('keyup', () => {
  let inputText = searcher.value
  let nameAdded = inputText.toUpperCase()
  let filteredByName = window.allPokemon.filterByName(dataPoke, nameAdded)
  printResult(filteredByName)
});

sortAtoZ.addEventListener('click', () => {
  let orderAtoZ = window.allPokemon.orderData(resultTotal);
  printResult(orderAtoZ);
})

sortZtoA.addEventListener('click', () => {
  let orderZtoA = window.allPokemon.orderDataZtoA(resultTotal);
  printResult(orderZtoA);
});