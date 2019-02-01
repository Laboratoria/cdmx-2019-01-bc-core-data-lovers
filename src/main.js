/*convierte la base de datos en una variable*/
const datalol = LOL.data;
const roles = document.getElementById("roles").value;
/*trae el div imprimir roles para identificarlo e imprimir*/
const imprimirRoles = document.getElementById("imprimirRoles")


/*esta función imprimir los tags de los personales*/
let tags = "";
const print = (tags) =>{
    let resultTags = `<p>${tags}</p>`;
    imprimirRoles.insertAdjacentHTML("beforeend", resultTags);
}

/*const filtroRoles = () => {*/
for (const key in datalol) {
    if (datalol.hasOwnProperty(key)) {
      const element = datalol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img;
      let dato = [`${name}, ${tag}, ${img}`]

      print (dato);

    }
};