

//esto a esta funcionando al 100
window.data={ 

//funcion de filtrar



filterData:(dataPokemon,types) =>{
const arrayPokemon= dataPokemon ;
  const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
  return arrayFilter;
}

}
/*
//funcion de ordenar
sortData:(dataPokemon,sortBy,sortOrder)=>{
  let orderDta = [];
  switch (sortBy){
    case"name":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.name>b.name)?1:-1);
    }
    else if (sortOrder === "desc"){
      console.log(sortBy);
        orderDta= dataPokemon.sort((a,b) => (a.name>b.name)?-1:1);
    }
    break;

    case "width":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.width>b.name)?1:-1);
    }else if (sortOrder === "desc"){
        orderDta= dataPokemon.sort((a,b) => (a.width>b.name)?-1:1);
    }break

  
  }
  sortData(dataPokemon,sortBy,sortOrder);
}*/













 */En esta seccion estoy extrayendo datos especificos de la data/*
  /*
 const datapokemon =POKEMON.pokemon;
 
  
 const imprimir = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
  
  const pokes = document.getElementById("pintar");
 
   let nombrePokemon = `<p> <img src="${imagen}">
   <br>Nombre:${nombre2}</br>
   <br> Su Id es :${id}</br>
   <br> Su candy es :${candy}</br>
   <br> Su altura es :${altura}</br>
   <br> Su peso es :${peso}</br>
   <br> debilidades :${debilidades}</br>
   </p>`;
   pokes.insertAdjacentHTML("beforeend",nombrePokemon);
   
 };
 datapokemon.forEach(elemento => {
   let imagen = elemento.img;
   let nombre2 = elemento.name;
   let id = elemento.id;
   let candy = elemento.candy;
   let altura = elemento.height;
   let peso =elemento.weight;
   let debilidades =elemento.weaknesses;
   imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
   alert(imprimir);
 });*/
[9:49, 14/2/2019] Katia Lab: <!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pókemon</title>
  <link rel="stylesheet" href="style.css" />
</head>


<!--En esta seccion esta todos los elementos que contiene la pagina principal-->

<div id="PaginaInicio">
  <img src="assets/ball.png" style="max-width: 100%">
  <h1> PokeGram</h1>
</div>

<body>
  <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->
  <div id="PaginaElementos" class="ocultar">

    <!--onkeyup es un evento de liberacion de tecla-->
    <div>
      <ul id="result"></ul>
    </div>

    <br><input type="text" id="busqueda" onkeyup="searching()" placeholder="Escribe el nombre del pókemon">
    </br>
    <div id="buttonsType">
      <button type="submit"><img src="./assets/agua.png" id="Water" class="typesPokemon"></button>
      <button type="submit"><img src="assets/bug.png" id="Bug" class="typesPokemon"></button>
      <button type="submit"><img src="assets/dragon.png" id="Dragon" class="typesPokemon"></button>
      <button type="submit"><img src="assets/electric.png" id="Electric" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ghost.png" id="Ghost" class="typesPokemon"></button>
      <button type="submit"><img src="assets/grass.png" id="Grass" class="typesPokemon"></button>
      <button type="submit"><img src="assets/psychic.png" id="Psychic" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ice.png" id="Ice" class="typesPokemon"></button>
      <button type="submit"><img src="assets/normal.png" id="Normal" class="typesPokemon"></button>
      <button type="submit"><img src="assets/flying.png" id="Flying" class="typesPokemon"></button>
      <button type="submit"><img src="assets/rock.png" id="Rock" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fight.png" id="Fighting" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fire.png" id="Fire" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ground.png" id="Ground" class="typesPokemon"></button>
      <button type="submit"><img src="assets/poison.png" id="Poison" class="typesPokemon"></button>
    </div>

  </div>
  <div>
    <div class="">
      <seccion id="probando" class="grid-img">
    </div>
    <script src="./data/pokemon/pokemon.js"></script>
    </seccion>
    <script src="data.js"></script>
    <script src="main.js"></script>
    <div id="PaginaPerfil" class="ocultar">

      <button id="Start">Start </button>
    </div>

    <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->
















    <h4>Ordenando Pokemones </h4>
    <section id="order-section">
      <section>
        <p>Name</p>
        <input id="asc-name" type="radio" name="order">
        <label for="asc-name">A-Z</label>
        <input id="desc-name" type="radio" name="order">
        <label for="desc-name">Z-A</label>
      </section>


    </section>














 <!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pókemon</title>
  <link rel="stylesheet" href="style.css" />
</head>


<!--En esta seccion esta todos los elementos que contiene la pagina principal-->

<div id="PaginaInicio">
  <img src="assets/ball.png" style="max-width: 100%">
  <h1> PokeGram</h1>
</div>

<body>
  <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->
  <div id="PaginaElementos" class="ocultar">

    <!--onkeyup es un evento de liberacion de tecla-->
    <div>
      <ul id="result"></ul>
    </div>

    <br><input type="text" id="busqueda" onkeyup="searching()" placeholder="Escribe el nombre del pókemon">
    </br>
    <div id="buttonsType">
      <button type="submit"><img src="./assets/agua.png" id="Water" class="typesPokemon"></button>
      <button type="submit"><img src="assets/bug.png" id="Bug" class="typesPokemon"></button>
      <button type="submit"><img src="assets/dragon.png" id="Dragon" class="typesPokemon"></button>
      <button type="submit"><img src="assets/electric.png" id="Electric" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ghost.png" id="Ghost" class="typesPokemon"></button>
      <button type="submit"><img src="assets/grass.png" id="Grass" class="typesPokemon"></button>
      <button type="submit"><img src="assets/psychic.png" id="Psychic" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ice.png" id="Ice" class="typesPokemon"></button>
      <button type="submit"><img src="assets/normal.png" id="Normal" class="typesPokemon"></button>
      <button type="submit"><img src="assets/flying.png" id="Flying" class="typesPokemon"></button>
      <button type="submit"><img src="assets/rock.png" id="Rock" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fight.png" id="Fighting" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fire.png" id="Fire" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ground.png" id="Ground" class="typesPokemon"></button>
      <button type="submit"><img src="assets/poison.png" id="Poison" class="typesPokemon"></button>
    </div>

  </div>
  <div>
    <div class="">
      <seccion id="probando" class="grid-img">
    </div>
    <script src="./data/pokemon/pokemon.js"></script>
    </seccion>
    <script src="data.js"></script>
    <script src="main.js"></script>
    <div id="PaginaPerfil" class="ocultar">

      <button id="Start">Start </button>
    </div>

    <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->
















    <h4>Ordenando Pokemones </h4>
    <section id="order-section">
      <section>
        <p>Name</p>
        <input id="asc-name" type="radio" name="order">
        <label for="asc-name">A-Z</label>
        <input id="desc-name" type="radio" name="order">
        <label for="desc-name">Z-A</label>
      </section>


    </section>














    </p>
  </div>
</body>
[9:50, 14/2/2019] Katia Lab: <!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pókemon</title>
  <link rel="stylesheet" href="style.css" />
</head>


<!--En esta seccion esta todos los elementos que contiene la pagina principal-->

<div id="PaginaInicio">
  <img src="assets/ball.png" style="max-width: 100%">
  <h1> PokeGram</h1>
</div>

<body>
  <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->
  <div id="PaginaElementos" class="ocultar">

    <!--onkeyup es un evento de liberacion de tecla-->
    <div>
      <ul id="result"></ul>
    </div>

    <br><input type="text" id="busqueda" onkeyup="searching()" placeholder="Escribe el nombre del pókemon">
    
    <div id="buttonsType">
      <button type="submit"><img src="./assets/agua.png" id="Water" class="typesPokemon"></button>
      <button type="submit"><img src="assets/bug.png" id="Bug" class="typesPokemon"></button>
      <button type="submit"><img src="assets/dragon.png" id="Dragon" class="typesPokemon"></button>
      <button type="submit"><img src="assets/electric.png" id="Electric" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ghost.png" id="Ghost" class="typesPokemon"></button>
      <button type="submit"><img src="assets/grass.png" id="Grass" class="typesPokemon"></button>
      <button type="submit"><img src="assets/psychic.png" id="Psychic" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ice.png" id="Ice" class="typesPokemon"></button>
      <button type="submit"><img src="assets/normal.png" id="Normal" class="typesPokemon"></button>
      <button type="submit"><img src="assets/flying.png" id="Flying" class="typesPokemon"></button>
      <button type="submit"><img src="assets/rock.png" id="Rock" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fight.png" id="Fighting" class="typesPokemon"></button>
      <button type="submit"><img src="assets/fire.png" id="Fire" class="typesPokemon"></button>
      <button type="submit"><img src="assets/ground.png" id="Ground" class="typesPokemon"></button>
      <button type="submit"><img src="assets/poison.png" id="Poison" class="typesPokemon"></button>
    </div>

  </div>
  <div>
    <div class="">
      <seccion id="probando" class="grid-img">
    
    <script src="./data/pokemon/pokemon.js"></script>
    </seccion>
    <script src="data.js"></script>
    <script src="main.js"></script>
    <div id="PaginaPerfil" class="ocultar">

      <button id="Start">Start </button>
    </div>

    <!--En esta seccion estan todos los elementos correspondientes a la pagina de los elementos -->



  <h4>Ordenando Pokemones </h4>
  <section id="order-section">
    <section>
      <p>Name</p>
      <input id="asc-name" type="radio" name="order">
      <label for="asc-name">A-Z</label>
      <input id="desc-name" type="radio" name="order">
      <label for="desc-name">Z-A</label>
    </section>


  </section>

</div>
<seccion id="pintar" class="grid-img"> 
</seccion>
</div></body>
[9:51, 14/2/2019] Katia Lab: const datapokemon = window.POKEMON.pokemon;
//En esta seccion estoy trayendo los elemneetos del html para que los botones de hagan su funcion/
const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));

const obtenerTipo = (arregloBotones) => {
  arregloBotones.map((tipoPokemon) => {
    tipoPokemon.addEventListener("click", (event) => {
      const getTypePokemon = event.target.id;
      const arregloFiltrado = window.data.filterData(datapokemon, getTypePokemon);
      imprimir(arregloFiltrado);
    })
  });
}

obtenerTipo(buttonTypes);

const imprimir = (obtenerTipo) => {
  const pokemons = document.getElementById("probando");
  pokemons.innerHTML = "";

  obtenerTipo.map((datapokemon) => {
    pokemons.innerHTML +=`<div class="imagesPokemon"><figure>
<img src="${datapokemon.img}"></figure>
<div class="texto-pokemon"><p>Nombre:${datapokemon.name}</p>
<p> Id:${datapokemon.id}</p>
<p> Candy:${datapokemon.candy}</p>
<p> Altura:${datapokemon.height}</p>
<p> Peso:${datapokemon.weight}</p>
<p> Debilidades:</p>
<p>${datapokemon.weaknesses}</p></div>
</div>`
  })

};




/*
filterCoincidence();

}else if (ubication.includes('orderPokemon.html')) {
  const orderRdio = document.getElementById("order");
  alert('funciono');
  console.log(orderRdio);
  const arrayRadio = Array.from(orderRadio)
  console.log(arrayRadio);
  const getOrderPokemon = (optionsRadio) => {
    optionsRadio.map(radio => {
      radio.addEventListener("click", () => {
        if (radio.checked === true) {
          let idRadio = radio.id.split('-');
          showList(window.sortData(dataPokemon, idRadio[1], idRadio[0]));
        }
      });
    });
  }
  getOrderPokemon(arrayRadio);
}*/
