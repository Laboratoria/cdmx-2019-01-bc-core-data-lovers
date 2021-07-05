/* Convierte la base de datos en una variable*/
const dataLol = window.LOL.data;

//Trae el resultado de la función filtrado de data.js
const datos = window.lol.iterarData(dataLol)

/*trae el div de nombre "es" para identificarlo e imprimirlo ahí*/
const showFirstChampionList = document.getElementById('showFirstChampionList')

//Trae la class que contiene el rol de la lista del menú desplegable 
const rol = document.getElementsByClassName("rolPersonajes");

//Trae cada personaje para la iteración por clase
const characterFromList = document.getElementsByClassName("nameList");


//almacena en variable los id del primer evento de cambio de pantalla, la interacción para abrir y cerrar el menú
const inicio = document.getElementById('inicio');
const menu = document.getElementById('menu');
const cerrar = document.getElementById('titleChampions');

const welcome = document.getElementById('welcomeMssg');
const printRolTitle = document.getElementById('rolTitle');
const home = document.getElementById('home');
//const welcome = document.getElementById('welcomeMssg');
const buttonDifficultyAsc = document.getElementById('difficultyAsc');
const buttonDifficultyDsc = document.getElementById('difficultyDsc');
const statsAverage = document.getElementById('statsAverage');

//Trae los divs de cada personaje
//const character = document.getElementById('character')

//almacena el valor del input para la busqueda por nombre
const searchInput = document.getElementById("searchInput")


//vuelve la base de datos a un arreglo
//const dataToArray = Object.values(dataLol); 

//Funcion de botones
//click que hace cambio de la primera pantalla a la lista de personajes

inicio.onclick = () => {
  document.getElementById("primera-pantalla").style.display = 'none';
  document.getElementById("fondo-de-lista-de-campeones").style.display = 'block';
};

// función del menú desplegable donde se encuentran los roles para filtrar 

menu.onmouseover = () => {
  document.getElementById("mySidenav").style.width = "75%";
};

showFirstChampionList.onmouseover = () => {
  document.getElementById("mySidenav").style.width = "0px";
};

cerrar.onmouseover = () => {
  document.getElementById("mySidenav").style.width = "0px";
};
// Link que lleva a la home
home.onclick = () => {
  print(datos);
  document.getElementById("mySidenav").style.width = "0px";
  printRolTitle.style.display = "none";
  welcome.style.display = 'block';


}

/* ----------------------------------------------*/
//función que despliega la info del personaje al dar click


// const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datos);
//print(arrayRolesFiltered);})}}




// función que imprime la primera iteración que da la lista completa de campeones
const print = (datos) => {
  showFirstChampionList.innerHTML = "";
  datos.forEach(champ => {
    let nameList = `<div id="${champ.id}" class="nameList"><img class="lolIcons" src="${champ.img}"><img class="bigImg" src="${champ.splash}"><div id="letras"><h1 id= "nombre" >${champ.name}</h1> <p id="titulo">${champ.title}</p></div></div>`;
    showFirstChampionList.insertAdjacentHTML("beforeend", nameList);
  })
  for (let i = 0; i < characterFromList.length; i++) {
    characterFromList[i].addEventListener('click', () => {

      let characterId = characterFromList[i].id;
      const elementChampion = window.lol.selectCharacter(characterId, datos);
      document.getElementById("welcomeMssg").style.display = 'none';
      printCharacterSheet(elementChampion);
    })
  }
};
print(datos)


//---------------------2do Print------------------------------------------------------//
//función que imprime la información completa del personaje 
const printCharacterSheet = (datos) => {
  showFirstChampionList.innerHTML = "";
  printRolTitle.innerHTML = "";
  datos.forEach(champ => {
    let nameList = `<div id="${champ.id}" class="champInfo"><div class="nameList">
   <img class="splashPresentation" src="${champ.splash}">
   <h1 id= "nombre" >${champ.name}</h1> <p id="titulo">${champ.title}</p></div><div class="nameList"><p id="title" class="rolTitle">ROL</p><h3 class="rolTitle">${champ.tags}</h3></div>
   <div id="statsInfo1" class="nameList"><div class="stats"><p>Attack: ${champ.attack}</p><p>Defense: ${champ.defense}</p>
   <p>Magic: ${champ.magic}</p><p>Difficulty: ${champ.difficulty}</p></div></div>
   <div id="allStats" class="nameList"><div id="statsInfo2" class="stats"><h2>Stats</h2><p>Hp:<br>${champ.hp}</p><p>Hp per level:<br>${champ.hpperlevel}</p><p>Hp regeneration:<br>${champ.hpregen}</p><p>Hp regen per level:<br>${champ.hpregenperlevel}</p>
   <p>Mp:<br>${champ.mp}</p><p>Mp per level:<br>${champ.mpperlevel}</p><p>Mp regeneration:<br>${champ.mpregen}</p><p>Mp regen per level:<br>${champ.mpregenperlevel}</p></div>
   <div id="statsInfo3" class="stats" class="statsOrder"><p>Movespeed:<br>${champ.movespeed}</p> <p>Armor:<br>${champ.armor}</p><p>Armor per level:<br>${champ.armorperlevel}</p><p>Attack Range:<br>${champ.attackrange}</p><p>Attack Damage:<br>${champ.attackdamage}</p><p>Attack Damage per level:<br>${champ.attackdamageperlevel}</p></div></div>  <h3 id="blurb" class="nameList">${champ.blurb}</h3></div></div>`;
    showFirstChampionList.insertAdjacentHTML("beforeend", nameList);
  });
}





//toma el id de las "a" del menu desplegable
//las itera, a cada una le asigna un addEventListener
//las prepara para recibir click
//extrae el ID de cada opción
//llama a la sección donde se va a imprimir
//llama la función de filtro del window, busca el id seleccionado dentro de la data y forma un nuevo arreglo con la data filtrada
//limpia la sección previa 
//itera el arreglo y va acumulando los resultados dentro de divs de impresión
const selectByRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener('click', () => {
      let rolId = rol[i].id;
      document.getElementById("mySidenav").style.width = "0%";
      printRolTitle.innerHTML = "";
      printRolTitle.insertAdjacentHTML("beforeend", rolId);

      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datos);
      document.getElementById("welcomeMssg").style.display = 'none';
      printRolTitle.style.display = "block";
      print(arrayRolesFiltered);
    })
  }
}
selectByRol();

const searchByName = () => {
  searchInput.addEventListener("keyup", () => {
    let searchValue = searchInput.value;
    printRolTitle.innerHTML = "";
    const showSearch = window.lol.filterByName(searchValue, datos);
    document.getElementById("welcomeMssg").style.display = 'none';
    printRolTitle.style.display = "block";
    print(showSearch);
  })
};
searchByName();


//selecciona un personaje dando click
//el click ejecuta la función que abre la info del personaje
//el click almacena el id del personaje que se seleccionó
//una función busca en el array los datos del personaje
//la función borra el contenido anterior
//la función extrae los elementos del personaje
//una función de impresión específica imprime los datos completos en la tarjeta del personaje

/*const characterSheet = () => {
  character.addEventListener('click', ()=>{
  const openCharacterSheet = window.lol.characterSelection(dataToArray);
 console.log (openCharacterSheet);})}
 characterSheet();*/

const difficultyAsc = () => {
    buttonDifficultyAsc.addEventListener('click', () => {
      printRolTitle.innerHTML = "Lower to Higher";
      const diffA = window.lol.sortByDifficulty(1,datos);
      document.getElementById("welcomeMssg").style.display = 'none';
      printRolTitle.style.display= "block";
      print(diffA);
    })};
  difficultyAsc();

    const difficultyDsc = () => {
      buttonDifficultyDsc.addEventListener('click', () => {
        printRolTitle.innerHTML = "Higher to Lower";
        const diffD = window.lol.sortByDifficulty(-1,datos);
        document.getElementById("welcomeMssg").style.display = 'none';
        printRolTitle.style.display= "block";
        print(diffD);
      })};
    difficultyDsc();


statsAverage.addEventListener('click', () => {
  showFirstChampionList.innerHTML ="";
  const showAttackAverage = window.lol.averageAttack(datos);
  printRolTitle.innerHTML= "Miscellaneous"
  showFirstChampionList.innerHTML =` <div class="nameList"><div class="rolPersonajes"> Average Attack: <br> ${showAttackAverage}</div></div>`
})