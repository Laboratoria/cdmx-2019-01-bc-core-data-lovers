/*convierte la base de datos en una variable*/
const datalol = LOL.data;
const rol = document.getElementsByClassName('rol');
const imprimirRoles = document.getElementById("imprimirRoles")  /*trae el div imprimir roles para identificarlo e imprimir*/
const mostrar = document.getElementById("mostrar")
//const arrayData = Object.values(datalol)

<<<<<<< HEAD
for(let i = 0; i<rol.length; i++){
    rol[i].addEventListener('click', () => {
        let buscado = rol[i].id
    })
}
console.log('funciona')

const filtrarRol = () => {
    let arr =[];
    const filtrotank = Object.values(datalol)
    filtrotank.forEach(element => {
      const roles = element.tags[0];
      if(roles === "Assassin"){
        arr.push(element)
      }
      
    });
    console.log(arr)
  }


//const filtrarRol = () => {
  //  for(let i = 0; i<rol.length; i++)


/*const filtrarRol = () => {
    const filtrotank = Object.values(datalol)
    filtrotank.forEach(element => {
        const roles = element.tags[0];
        if(roles === "Tank"){
            // console.log(element);

        }
        
    });
}*/
=======
>>>>>>> upstream/master


<<<<<<< HEAD
const roles = document.getElementById("roles").value;
//*trae el div imprimir roles para identificarlo e imprimir
const imprimirRoles = document.getElementById("imprimirRoles")
const mostrar = document.getElementById("mostrar")
=======
>>>>>>> upstream/master

mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});

<<<<<<< HEAD

//esta función imprimir los tags de los personales*/
let tags = "";
const print =(name,imga,title) =>{
    let result = `<div class="cuadro"><img class="imagen" src="${imga}"> ${name} ${title}</div>`; 
    imprimirRoles.insertAdjacentHTML("beforeend",result);
}

/*let img = "";
const printimg = (img) =>{
    let resultimg = `<div class=><img src="${img}"${name}</div>`;
    imprimirRoles.insertAdjacentHTML("beforeend", resultimg);
}*/

for (const key in datalol) {
    if (datalol.hasOwnProperty(key)) {
      const element = datalol[key];
      let name = element.name;
      let tag = element.tags[0];
      let imga = element.img;
      let title = element.title;
      let dato = [`${name}, ${tag}`]
      print(name,imga,title);

    }
};
=======
// const result = window.lol.iterarData(datalol)
// console.log(result)

const print = (datosArr) =>{
    imprimirRoles.innerHTML = "";
    datosArr.forEach(champ => {
let pintar = `<div class="cuadro"><img class="imagen" src="${champ.splash}"> <div id="subtitulo"><h1 id="nombre">${champ.name}</h1> <h2 id"titulo"> ${champ.title}</h2></div></div>`; 
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
>>>>>>> upstream/master
