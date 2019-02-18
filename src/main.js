//let POKEMON;
let dataPokemon = window.POKEMON.pokemon;
const pokemones = document.getElementById('pokemones');
const searchCoincidence = document.getElementById('search-coincidences');

const printPokemon = (pokemon) => {
  let nombrePokemon = `<div class="divPokemon">
    <div class="flip-card-inner">
      <div class="flip-card-front"><h5># ${pokemon.id}</h5><img id="${pokemon.id}" src="${pokemon.img}"><p>${pokemon.name}</p>
        <span class="color-type">${pokemon.type}</span>
      </div>
      <div class="flip-card-back">
      <h4>${pokemon.name}</h4>
      <table id="details">
        <tr>
          <th>Height</th><td>${pokemon.height}</td>
        </tr>
        <tr>
          <th>Weight</th><td>${pokemon.weight}</td>
        </tr>
        <tr>
          <th>Candy</th><td class="break-words">${pokemon.candy}</td>
        </tr>
        <tr>
          <th>Egg</th><td class="break-words">${pokemon.egg}</td>
        </tr>
      </table>
      </div>
    </div>
  </div>`;
  pokemones.insertAdjacentHTML("beforeend", nombrePokemon);
};
//const allData = window.showAllData(dataPokemon);


const showList = (pokemonList) => {
  pokemones.innerHTML="";
  pokemonList.forEach(element => {
    printPokemon(element);
  });
};

// Mike estuvo aquí
const buttonsCollection = document.getElementsByClassName("typesPokemon");
const buttonsArray = Array.from(buttonsCollection)

//console.log(buttonsArray)

// Función que genere el tipo de Pokemon de acuerdo al click del botón que seleccionó el usuario
const getTypePokemon = (arrayButtons) => {

      arrayButtons.map(boton => {
        boton.addEventListener("click",(event) =>{
          //console.log(event.target.name);
          //console.log(window.filterByType(event.target.name));
          // Invocar una función que pinte Pokemon
          showList(window.data.filterByType(dataPokemon,event.target.name));
        })
      })
}

getTypePokemon(buttonsArray)

// filterCoincidence obtiene las coincidencias letra por letra

const filterCoincidence = () => {
  searchCoincidence.addEventListener('keyup', () => {
    let searchValue = document.getElementById('search-coincidences').value;
    showList(window.data.filterByLetter(dataPokemon,searchValue));
  });
}

//funcion para ordenar la dataByType

//esta parte obtiene la ubicacion de la pagina y dependiendo de ésta ejecuta las funciones
let ubication = location.href;

if (ubication.includes('typePokemon.html')) {
 // En esta le paso allData para mostrar toda la info o dataByType para mostrar la info filtrada
  //showList(allData);
  filterCoincidence();


}else if (ubication.includes('orderPokemon.html')) {
  /*const orderNameRadio = document.getElementById('asc-name');
  orderNameRadio.addEventListener('click',()=>{
    showList(window.sortData(dataPokemon,'name','asc'));
  });*/
  const orderRadio = document.getElementsByName("order");
  const arrayRadio = Array.from(orderRadio);
  const getOrderPokemon = (optionsRadio) => {
    optionsRadio.map(radio => {
      radio.addEventListener("click",() =>{
        if(radio.checked === true){
          let idRadio = radio.id.split('-');
          //console.log(window.data.sortData(dataPokemon,idRadio[1],idRadio[0]));
          showList(window.data.sortData(dataPokemon,idRadio[1],idRadio[0]));
        }
      });
    });
  }
  getOrderPokemon(arrayRadio);

  showList(window.data.showAllData(dataPokemon));

} else if (ubication.includes('statsPokemon.html')){
  const resultCandy = window.data.computeStats(dataPokemon, 'candy_count');
  document.getElementById('max-candy').innerHTML= resultCandy.maximum;
  document.getElementById('min-candy').innerHTML= resultCandy.minimum;
  document.getElementById('avg-candy').innerHTML= resultCandy.average;

  const resultSpawn = window.data.computeStats(dataPokemon, 'spawn_chance');
  document.getElementById('max-spawn').innerHTML= resultSpawn.maximum;
  document.getElementById('min-spawn').innerHTML= resultSpawn.minimum;
  document.getElementById('avg-spawn').innerHTML= resultSpawn.average;

  const resultAvg = window.data.computeStats(dataPokemon, 'avg_spawns');
  document.getElementById('max-avg').innerHTML= resultAvg.maximum;
  document.getElementById('min-avg').innerHTML= resultAvg.minimum;
  document.getElementById('avg-avg').innerHTML= resultAvg.average;

  //Graficos
  let google = window.google;
  google.charts.load('current', {'packages':['bar']});

  const drawChartCandy = () => {
    let data = google.visualization.arrayToDataTable([
      ['feature', 'maximum', 'average', 'minimum'],
      ['candy count', resultCandy.maximum, resultCandy.average, resultCandy.minimum]
    ]);

    let options = {
      chart: {
        title: 'Candy Count',
        subtitle: '151 pokemons',
      }
    };

    let chart = new google.charts.Bar(document.getElementById('chart-candy'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };

  const drawChartSpawn = () => {
    let data = google.visualization.arrayToDataTable([
      ['feature', 'maximum', 'average', 'minimum'],
      ['candy count', resultSpawn.maximum, resultSpawn.average, resultSpawn.minimum]
    ]);

    let options = {
      chart: {
        title: 'Spawn Chance',
        subtitle: '151 pokemons',
      }
    };

    let chart = new google.charts.Bar(document.getElementById('chart-spawn'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };

  const drawChartAvg = () => {
    let data = google.visualization.arrayToDataTable([
      ['feature', 'maximum', 'average', 'minimum'],
      ['candy count', resultAvg.maximum, resultAvg.average, resultAvg.minimum]
    ]);

    let options = {
      chart: {
        title: 'Avg Spawns',
        subtitle: '151 pokemons',
      }
    };

    let chart = new google.charts.Bar(document.getElementById('chart-avg'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };

  google.charts.setOnLoadCallback(drawChartCandy);
  google.charts.setOnLoadCallback(drawChartSpawn);
  google.charts.setOnLoadCallback(drawChartAvg);
}



//MENU
let menu = document.querySelector('#menu');
let drawer = document.querySelector('nav');
let outMenu = document.querySelector('nav');

menu.addEventListener('click', () => {
  //Despliega menú
  drawer.classList.toggle('open');
  //Permite scroll
  document.getElementsByTagName("html")[0].style.overflow = "auto";
  /*noscroll
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  e.stopPropagation();*/
});

outMenu.addEventListener('click', () => {
  //Cierra menú al seleccionar una opción
  drawer.classList.remove('open');
});
