window.lol = {
  //Funcion que recorre un objeto que contiene 4 indicadores y se convierte en un arreglo
  showData: (lolData) => {
    let arr = [];
    for (const key in lolData) {
      if (lolData.hasOwnProperty(key)) {
        const element = lolData[key];
        obj = {
          splash: element.splash,
          name: element.name,
          primaryRol: element.tags[0],
          secondaryRol: element.tags[1],
          attack: element.info.attack,
          defense: element.info.defense,
          magic: element.info.magic
        }
        if (!element.tags[1]){
          obj.secondaryRol = "";
        }
      }
      arr.push(obj)
    }
    return arr;
  },

  filterByRol: (rolId, arr) =>
    filtering = arr.filter(element => element.primaryRol == rolId || element.secondaryRol == rolId),
  //Aquí inicia la función para ordenar por ataque

  sorterByAttack: (arr) => {
    const attackSorter = arr.sort((a, b) => {
      if (b.attack > a.attack){
        return 1;
      }
    if (b.attack < a.attack){
      return -1;
      }
    else {
      return 0;
    }
   });

  return attackSorter;

  },

sorterByMagic: (arr) => {
  const magicSorter = arr.sort((a, b) => {
    if (b.magic > a.magic){
      return 1;
    }
  if (b.magic < a.magic){
    return -1;
    }
  else {
    return 0;
  }
 });
return magicSorter;
},

sorterByDefense: (arr) => {
  const defenseSorter = arr.sort((a, b) => {
    if (b.defense > a.defense){
      return 1;
    }
  if (b.defense < a.defense){
    return -1;
    }
  else {
    return 0;
  }
 });
return defenseSorter;
},
  //esta llave cierra window.lol
}

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/* const example = () => {
  return 'example';
};

window.example = example;

*/
