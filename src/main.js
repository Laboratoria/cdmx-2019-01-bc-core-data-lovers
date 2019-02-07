/*convierte la base de datos en una variable*/
const datalol = LOL.data;
const rol = document.getElementsByClassName('rol');
const imprimirRoles = document.getElementById("imprimirRoles")  /*trae el div imprimir roles para identificarlo e imprimir*/
const mostrar = document.getElementById("mostrar")
const arrayData = Object.values(datalol)




mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});

const result = window.lol.iterarData(datalol)
// console.log(result)

const print =(result) =>{
    result.forEach(champ => {
let pintar = `<div class="cuadro"><img class="imagen" src="${champ.imga}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`; 
imprimirRoles.insertAdjacentHTML("beforeend", pintar);
 });

}
print(result)

for(let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      const printSection = document.getElementById("imprimirRoles");
      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, arrayData);
      
      printSection.innerHTML = "";

    arrayRolesFiltered.map((character) =>{
        printSection.innerHTML += `<div class="cuadro"><img class="imagen" src="${character.img}"> <div id="subtitulo"><h1 id="nombre">${character.name}</h1> <h2 id"titulo"> ${character.title}</h2></div></div>`;

    })

    })
}


