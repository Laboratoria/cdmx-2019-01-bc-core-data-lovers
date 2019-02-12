
/*document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});*/
/*convierte la base de datos en una variable*/
const datalol = window.LOL.data;
const datosArr = window.lol.iterarData(datalol);
const rol = document.getElementsByClassName('rol');
const imprimirRoles = document.getElementById("imprimirRoles")  /*trae el div imprimir roles para identificarlo e imprimir*/
let search = document.getElementById("search");
const home = document.getElementById("home");
const homeB = document.getElementById("home-b");
const searchChampion = document.getElementById("searchChampion");
const searchChampionB = document.getElementById("searchChampion-b");

const cleanHome = () =>{
  imprimirRoles.innerHTML = "";
}; 
  
home.addEventListener("click", cleanHome);
homeB.addEventListener("click", cleanHome);
 

//función para pintar los campeones acorde a las propiedades seleccionadas
const print = (datosArr) =>{
    imprimirRoles.innerHTML = "";
    datosArr.forEach(champ => {
let pintar = `<div class="cuadro"><img class="imagen" src="${champ.splash}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`; 
imprimirRoles.insertAdjacentHTML("beforeend", pintar);
 })
 

};
//Función para desplegar los campeones filtrados por roles
const selectRol = () =>{
    for(let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      //const printSection = document.getElementById("imprimirRoles");
      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datosArr);
      print(arrayRolesFiltered);
    })
  }
}
selectRol();

//Función para limpiar contenido antes mostrado y desplegar todos los campeones para realizar busqueda específica 
const printChamp = ()=> {
    imprimirRoles.innerHTML = "";
    print(datosArr)
}
searchChampion.addEventListener("click", printChamp); 
searchChampionB.addEventListener("click", printChamp); 

//Función para desplegar el campeon para se desea buscar
const filterRolBySearch = () => {
  search.addEventListener("keyup", () => {
    let searchValue = search.value;
    //console.log(searchValue);
    const showSearch = window.lol.filterBySearch(searchValue, datosArr);
    print (showSearch);
  })
};
filterRolBySearch ();