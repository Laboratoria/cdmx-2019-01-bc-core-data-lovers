/*convierte la base de datos en una variable*/
const datalol = LOL.data;
//const lolfiltro = datalol.filter(datalol.hasOwnProperty, "key");
//console.log(lolfiltro);
//console.log(Object.values(datalol))
const tank = document.getElementById('tank');
const rol = document.getElementsByClassName('rol');

/*for( let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      
      let nuevoArreglo = [];
      const arrayData = Object.values(datalol);
      arrayData.forEach(element => {
        const roles = element.tags[0];
        if(roles === rolId ){
          nuevoArreglo.push(element);
        }
      nuevoArreglo.innerHTML +=   
         
      });
      //console.log(nuevoArreglo)
    })}*/

//     for( let i= 0; i<rol.length;i++){
//         rol[i].addEventListener("click",() => {
//           let rolId = rol[i].id;
//           const arrayData = Object.values(datalol);
//          filtrado = arrayData.filter(element => element.tags[0] === rolId);
// console.log(filtrado)
//     })};


/*trae el div imprimir roles para identificarlo e imprimir*/
const imprimirRoles = document.getElementById("imprimirRoles")
const mostrar = document.getElementById("mostrar")

mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});


/*esta función imprimir los tags de los personales*/
//let tags = "";
const result = window.lol.mostrardata(datalol)
// console.log(result)

const print =(result) =>{
    result.forEach(champ => {
let pintar = `<div class="cuadro"><img class="imagen" src="${champ.imga}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`; 
imprimirRoles.insertAdjacentHTML("beforeend", pintar);
 });
    // let result = `<div class="cuadro"><img class="imagen" src="${imga}"> <div id="subtitulo"><h1 id="nombre">${name}</h1> <h2 id"titulo"> ${title}</h2></div></div>`; 
    // imprimirRoles.insertAdjacentHTML("beforeend",result);
}

print(result)
const arrayData = Object.values(datalol)

for(let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      window.lol.filtroDataRoles(rolId, arrayData)
 
    })
}

//const filterDataRoles = window.lol.filtroDataRoles(rolId, arrayData)


// for (const key in datalol) {
//     if (datalol.hasOwnProperty(key)) {
//       const element = datalol[key];
//       let name = element.name;
//       let tag = element.tags[0];
//       let imga = element.img;
//       let title = element.title;
//       let dato = [`${name}, ${tag}`]
//       print(name,imga,title);

//     }
// };