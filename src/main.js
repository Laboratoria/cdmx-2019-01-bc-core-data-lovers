/*convierte la base de datos en una variable*/
const datalol = LOL.data;
//const lolfiltro = datalol.filter(datalol.hasOwnProperty, "key");
//console.log(lolfiltro);
//console.log(Object.values(datalol))
const tank = document.getElementById('tank');
const rol = document.getElementsByClassName('rol');

//const filtrarRol = () => {
  //  for(let i = 0; i<rol.length; i++)


const filtrarRol = () => {
    const filtrotank = Object.values(datalol)
    filtrotank.forEach(element => {
        const roles = element.tags[0];
        if(roles === "Tank"){
            console.log(element);

        }
        
    });
}

tank.addEventListener('click', filtrarRol)

const roles = document.getElementById("roles").value;
/*trae el div imprimir roles para identificarlo e imprimir*/
const imprimirRoles = document.getElementById("imprimirRoles")
const mostrar = document.getElementById("mostrar")

mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});

/*esta función imprimir los tags de los personales*/
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