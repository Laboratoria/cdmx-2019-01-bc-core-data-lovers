// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.lol = {
  iterarData: (dataLol) => {
    let datos =[];
    for(const key in dataLol){
      if(dataLol.hasOwnProperty(key)){
      const element = dataLol[key];
      let objetoVacio = {
      name: element.name,
      tags: element.tags,
      img: element.img,
      title: element.title,
      id: element.id,
      splash:element.splash,
      blurb: element.blurb,
      info: element.info.difficulty,
      stats: element.stats,}
    datos.push(objetoVacio)
  }
}
return datos }, 


filtroDataRoles: (rolId, datos) => {

  const filtradoPorRoles = datos.filter(element => element.tags[0] === rolId || element.tags[1] === rolId);

  return filtradoPorRoles;
},

filterByName: (name,datos) => {
 const search = datos.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
 return search;
},



filterByCharacter: (characterId,datos) => {
  const characterOnClick = datos.filter(element => element.id === characterId);
  console.log(characterOnClick)
  return characterOnClick;
}

// taller TEST de Sil
}
