/*document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});*/
/*convierte la base de datos en una variable*/
const datalol = window.LOL.data;
const datosArr = window.lol.iterarData(datalol);
const home = document.getElementById("home");
const searchChampion = document.getElementById("searchChampion");
const rol = document.getElementsByClassName('rol');
const imprimirRoles = document.getElementById("imprimirRoles");  /*trae el div imprimir roles para identificarlo e imprimir*/
let search = document.getElementById("search");
const difficultyAsc = document.getElementById("difficultyAsc");
const difficultyDsc = document.getElementById("difficultyDsc");
//cambiar nombre en css
const cuadro = document.getElementsByClassName("cuadro");

home.addEventListener("click", () => {
  imprimirRoles.innerHTML = "";
});

//Función para limpiar contenido antes mostrado y desplegar todos los campeones para realizar busqueda específica 
searchChampion.addEventListener("click", () => {
  imprimirRoles.innerHTML = "";
  print(datosArr)
});

//-----funciones pintar
const characterSelection = () => {
  for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener("click", () => {
      let characterId = cuadro[i].id;
      const elementChampion = window.lol.filterByCharacter(characterId, datosArr);
      printCharacterSheet(elementChampion);
    })
  }
}
characterSelection()

//función para pintar los campeones acorde a las propiedades seleccionadas
const print = (datosArr) => {
  imprimirRoles.innerHTML = "";
  datosArr.forEach(champ => {
    let pintar = `<div div id="${champ.id}" class="cuadro"><img class="imagen" src="${champ.splash}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`;
    imprimirRoles.insertAdjacentHTML("beforeend", pintar);
    characterSelection(pintar);
  })

};

const printCharacterSheet = (datosArr) => {
  imprimirRoles.innerHTML = "";
  datosArr.forEach(champ => {
    let pintar = `<div div id="${champ.id}" class="cuadro"><img class="imagen" src="${champ.splash}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`;
    imprimirRoles.insertAdjacentHTML("beforeend", pintar);
  })
};

//Función para desplegar los campeones filtrados por roles
const selectRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("click", () => {
      let rolId = rol[i].id;
      //const printSection = document.getElementById("imprimirRoles");
      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datosArr);
      print(arrayRolesFiltered);
    })
  }
}
selectRol();

//Función para limpiar contenido antes mostrado y desplegar todos los campeones para realizar busqueda específica 
// const printChamp = ()=> {
//     imprimirRoles.innerHTML = "";
//     print(datosArr)
// }

//Función para desplegar el campeon para se desea buscar
const filterRolBySearch = () => {
  search.addEventListener("keyup", () => {
    let searchValue = search.value;
    //console.log(searchValue);
    const showSearch = window.lol.filterBySearch(searchValue, datosArr);
    print(showSearch);
  })
};
filterRolBySearch();

const orderByDifficultyAsc = () => {
  difficultyAsc.addEventListener("click", () => {
    //console.log("si funciono wey");
    const asc = window.lol.sortByDifficulty(datosArr);
    print(asc)
  })
};
orderByDifficultyAsc();

const orderByDifficultyDsc = () => {
  difficultyDsc.addEventListener("click", () => {
    //console.log("si funciono wey");
    const decent = window.lol.sortByDifficultyDsc(datosArr);
    print(decent)

  })
};
orderByDifficultyDsc();
