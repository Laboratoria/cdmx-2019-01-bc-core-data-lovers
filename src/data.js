// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.lol = {
 mostrardata: (datalol) => {
   let datos = []
   for (const key in datalol) {
  if (datalol.hasOwnProperty(key)) {
    const element = datalol[key];
    let obj = {
      name: element.name,
      tag: element.tags[0],
      imga: element.img,
      title: element.title
    }
    // let name = element.name;
    // let tag = element.tags[0];
    // let imga = element.img;
    // let title = element.title;
    datos.push(obj)
    // print(name,imga,title);
   }
  }
  return datos
 },

filtroDataRoles: (rolId, arrayData ) =>{
  /*for( let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      const arrayData = Object.values(datalol);*/
     filtrado = arrayData.filter(element => element.tags[0] === rolId);
     /*let name = element.name;
     let tag = element.tags[0];
     let imga = element.img;
     let title = element.title;
     //print(name,ima,tag);*/
      return filtrado
    },
 
}
