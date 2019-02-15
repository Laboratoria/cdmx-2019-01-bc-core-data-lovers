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
      attack: element.info.attack,
      defense: element.info.defense,
      magic: element.info.magic,
      difficulty: element.info.difficulty,
      hp: element.stats.hp,
      hpperlevel:element.stats.hpperlevel,
      mp:element.stats.mp,
      mpperlevel:element.stats.mpperlevel,
      movespeed:element.stats.movespeed,
      armor:element.stats.armor,
      }
    datos.push(objetoVacio)

      }
    }
    return datos
  },


  filtroDataRoles: (rolId, datos) => {

    const filtradoPorRoles = datos.filter(element => element.tags[0] === rolId || element.tags[1] === rolId);

    return filtradoPorRoles;
  },

  filterByName: (name, datos) => {
    const search = datos.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
    return search;
  },



  selectCharacter: (characterId, datos) => {
    const characterOnClick = datos.filter(element => element.id === characterId);
    //console.log(characterOnClick)
    return characterOnClick;
  },

sortByDifficultyAsc: (datos) => {
    const sortA = datos.sort((a, b) => {
      if (a.difficulty > b.difficulty) {
        return 1;
      }
      if (a.difficulty < b.difficulty) {
        return -1;
      }
      else {
        return 0;
      } 
    })
    return sortA
  },

sortByDifficultyDsc: (datos) => {
    const sortD = datos.sort((a, b) => {
      if (a.difficulty < b.difficulty) {
        return 1;
      }
      if (a.difficulty > b.difficulty) {
        return -1;
      }
      else {
        return 0;
      } 
    })
    return sortD
  }


}
