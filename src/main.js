/*convierte la base de datos en una variable*/
const datalol = LOL.data;
const rol = document.getElementsByClassName('rol');
const imprimirRoles = document.getElementById("imprimirRoles")  /*trae el div imprimir roles para identificarlo e imprimir*/
const mostrar = document.getElementById("mostrar")
//const arrayData = Object.values(datalol)

mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});

// const result = window.lol.iterarData(datalol)
// console.log(result)

const print = (datosArr) =>{
    imprimirRoles.innerHTML = "";
    datosArr.forEach(champ => {
let pintar = `<div class="cuadro">
<img class="imagen" src="${champ.splash}"> 
<div id="subtitulo"><h2 id="nombre">${champ.name}</h2> <h1 id"titulo"> ${champ.title}</h1></div></div>`; 
imprimirRoles.insertAdjacentHTML("beforeend", pintar);
 })

}

const selectRol = () =>{
    for(let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      const datosArr = window.lol.iterarData(datalol);
      //const printSection = document.getElementById("imprimirRoles");
      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, datosArr);
      print(arrayRolesFiltered);
    })
  }
}
selectRol();
