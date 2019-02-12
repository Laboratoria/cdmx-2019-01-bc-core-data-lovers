// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.lol = {
  iterarData: (dataLol) => {
    let datos =[]
    for(const key in dataLol){
      if(dataLol.hasOwnProperty(key)){
      const element = dataLol[key];
      let objetoVacio = {
      name: element.name,
      tag: element.tags[0],
      img: element.img,
      title: element.title,
      splash:element.splash,}
    datos.push(objetoVacio)
  }
}
return datos }, 

filtroDataRoles: (rolId, dataToArray) => {
  filtradoPorRoles = dataToArray.filter(element => element.tags[0] === rolId);
  return filtradoPorRoles
},
filterByName: (name,datos) => {
  const search = datos.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
  return search;}
 }
 
 

