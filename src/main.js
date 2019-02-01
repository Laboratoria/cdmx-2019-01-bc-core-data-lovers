/*convierte la base de datos en una variable*/
const datalol = LOL.data;
const roles = document.getElementById("roles").value;
/*trae el div imprimir roles para identificarlo e imprimir*/
const imprimirRoles = document.getElementById("imprimirRoles")


/*esta función imprimir los tags de los personales*/
let tags = "";
const print =(name,imga,title) =>{
    let result = `<div class="cuadro"><img src="${imga}"> ${name} ${title}</div>`; 
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