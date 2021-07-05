
//Convierte la base de datos en una variable
const datalol = window.LOL.data;
//Resultado de la función it3erarData, convierte la data en un arreglo
const datosArr = window.lol.iterarData(datalol);
//ID de la sección Home
const home = document.getElementById("home");
//Obtiene el id de la sección que mostrara el titulo de cada una de las secciones seleccionadas 
const titleBySection = document.getElementById("titleBySection");
//Obtiene  la clase que contiene el rol del nav 
const rol = document.getElementsByClassName('rol');
//Obtiene el id del div en donde se van a imprimir los campeones seleccionados
const imprimirRoles = document.getElementById("imprimirRoles");
//Almacena el input Search por busqueda de nombre
let search = document.getElementById("search");
//Obtiene el id del botón ascendente
const difficultyAsc = document.getElementById("difficultyAsc");
//Obtiene el id del botón descendente
const difficultyDsc = document.getElementById("difficultyDsc");
//Obtiene el id del div en donde se va a imprimir la tarjeta de los campeones
const containerInfo = document.getElementsByClassName("containerInfo");
const stats = document.getElementById("stats");


//-----FUNCIONES PARA DESPLEGAR LA INFORMACIÓN DE LOS CAMPEONES

//Limpia los elementos de las secciones Campeones, Search y Dicultad para mostrar la lista completa de los campeones.
home.addEventListener("click", () => {
  imprimirRoles.innerHTML = "";
  print(datosArr)
});

//Función para iterar la lista de  los campeones e imprimir la tarjeta con información seleccionada de cada uno de los campeones 
const print = (datosArr) => {
  imprimirRoles.innerHTML = "";
  datosArr.forEach(champ => {
    let championCard = `<section id=championCard>
    <div id="${champ.id}" class="containerInfo">
    <img class="imagen" src="${champ.splash}"> 
    <div id="subtitulo">
    <h1 id="nombre">${champ.name}</h1> 
    <p id="titulo"> ${champ.title}</p></div>
    </section>`;
    imprimirRoles.insertAdjacentHTML("beforeend", championCard);
  })
  //Iteración de la tarjeta del campeon seleccionada e impresión de éste 
  for (let i = 0; i < containerInfo.length; i++) {
    containerInfo[i].addEventListener('click', () => {
      let characterId = containerInfo[i].id;
      const elementChampion = window.lol.selectCharacter(characterId, datosArr);
      printCharacterSheet(elementChampion);
    })
  }
};
print(datosArr)

//Función para iterar las primeras tarjetas de los campeones e imprimir solo la tarjeta con las propiedades completas del campeon seleccionado.
const printCharacterSheet = (datosArr) => {
  imprimirRoles.innerHTML = "";
  titleBySection.innerHTML = "Champion";
  document.getElementById("objetive").style.display = "none";
  titleBySection.style.display = "block";
  datosArr.forEach(champ => {
    let championCard = `<section id=championInfoCard class="totalDescription">
    <div class="infoChamp">
    <div>
    
    <img class="imagenInfo" src="${champ.splash}">
    <h2 id= "nombre" >${champ.name}</h2> 
    <h1 id="titulo">${champ.title}</h1>
    <p>${champ.blurb}</p>
    </div>
    </div>
    
    <div class="infoChamp">
    <div id="info"<p>Attack:${champ.attack}</p>
    <p>Defense:${champ.defense}</p>
    <p>Magic:${champ.magic}</p>
    <p>Difficulty:${champ.difficulty}</p>
    </div>
    </div>
    <br>
    <div class="infoChamp">
    <div id="statsInfo">
    <h2>Stats</h2>
    <div class="infoChamp">
    <p>Hp:${champ.hp}</p>
    <p>Hp per level:${champ.hpperlevel}</p>
    </div>
    <div class="infoChamp">
    <p>Mp:${champ.mp}</p>
    <p>Mp per level:${champ.mpperlevel}</p>
    </div>
    <div class="infoChamp">
    <p>Movespeed:${champ.movespeed}</p>
    </div>
    <div class="infoChamp">
    <p>Armor:${champ.armor}</p>
    </div>
    </div></section>`;
    imprimirRoles.insertAdjacentHTML("beforeend", championCard);
  })
};

//Obtiene del nav el idde los a que asignan los roles por campeon
//Realiza la iteración de cada "a" para asignar un addEventListener
//Las prepara para recibir un click
//Llama a la sección en donde se va a imprimir la lista de campeones correspondiente a cada id
//Llama a la función "filtroDataRoles" de window, busca el id seleccionado dentro  de la data y forma un nuevo arreglo con los campeones filtrados por rol
//Limpia el contenido antes mostrado
//Despliega el arreglo de los resultados en el div de impresión 
const selectRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("click", () => {
      let rolId = rol[i].id;
      titleBySection.innerHTML = "";
      titleBySection.insertAdjacentHTML("beforeend", rolId);
      //const printSection = document.getElementById("imprimirRoles");
      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datosArr);
      print(arrayRolesFiltered);
      document.getElementById("objetive").style.display = "none";
      titleBySection.style.display = "block"

    })
  }
}
selectRol();


//Obtiene el id del input
//Prepara el evento para recibir la información por keyup
//Obtiene el valor que es ingresasdo en el input
//Borra el contenido antes mostrado para limpiar la sección
//Imprime el titulo de la sección de filtrar por buscador
//Llama a la función filterBySearch que itera en la data para buscar el campeon a buscar
//Pinta el campeon buscado
const filterRolBySearch = () => {
  search.addEventListener("keyup", () => {
    let searchValue = search.value;
    titleBySection.innerHTML = "";
    titleBySection.innerHTML = "Champion";
    //console.log(searchValue);
    const showSearch = window.lol.filterBySearch(searchValue, datosArr);
    print(showSearch);
    document.getElementById("objetive").style.display = "none";
    titleBySection.style.display = "block";

  })
};
filterRolBySearch();

//Prepara el evento de click del boton less para ejecutar la función
//Llama a la función sortByDifficul para realizar la iteración de los datos
//Imprime los datos ordenados de manera ascendente
const orderByDifficultyAsc = () => {
  difficultyAsc.addEventListener("click", () => {
    //console.log("si funciono wey");
    titleBySection.innerHTML = "Lower to higher difficulty";
    const asc = window.lol.sortByDifficulty(1, datosArr);
    print(asc)
    document.getElementById("objetive").style.display = "none";
    titleBySection.style.display = "block"
  })
};
orderByDifficultyAsc();

//Prepara el evento de click del boton greater para ejecutar la función
//Llama a la función sortByDifficulDsc para realizar la iteración de los datos
//Imprime los datos ordenados de manera descendente
const orderByDifficultyDsc = () => {
  difficultyDsc.addEventListener("click", () => {
    //console.log("si funciono wey");
    titleBySection.innerHTML = "Higher to lower difficulty"
    const decent = window.lol.sortByDifficulty(-1, datosArr);
    print(decent)
    document.getElementById("objetive").style.display = "none";
    titleBySection.style.display = "block"
  })
};
orderByDifficultyDsc();

stats.addEventListener('click', () => {
  imprimirRoles.innerHTML = "";
  titleBySection.innerHTML = "Stats Average";
  const averageAttackP = window.lol.averageAttack(datosArr);
  imprimirRoles.innerHTML = `<div class="containerStats"> Average attack: <br> ${averageAttackP}</div>`;
  document.getElementById("objetive").style.display = "none";
  titleBySection.style.display = "block"
})
