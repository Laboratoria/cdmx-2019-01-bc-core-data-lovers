window.lol = {
  //Funcion que recorre un objeto que contiene 7 indicadores y se convierte en un arreglo
  showData: (lolData) => {
    let newArrayInfo = [];
    let champsInfo = {};
    for (const key in lolData) {
      if (lolData.hasOwnProperty(key)) {
        const element = lolData[key];
        champsInfo = {
          splash: element.splash,
          name: element.name,
          primaryRol: element.tags[0],
          secondaryRol: element.tags[1],
          attack: element.info.attack,
          defense: element.info.defense,
          magic: element.info.magic,
          id: element.id
        }
        if (!element.tags[1]) {
          champsInfo.secondaryRol = "";
        }
      }
      newArrayInfo.push(champsInfo);
    }
    return newArrayInfo;
  },

  filterByRol: (newArrayChamp, rolId) => {
    const filtering = newArrayChamp.filter(element => element.primaryRol == rolId || element.secondaryRol == rolId);
    return filtering;
  },
  //Aquí inicia la función para ordenar por ataque
  sorterByAttack: (newArrayChamp) => {
    const attackSorter = newArrayChamp.sort((a, b) => {
      if (b.attack > a.attack) {
        return 1;
      }
      if (b.attack < a.attack) {
        return -1;
      } else {
        return 0;
      }
    });

    return attackSorter;
  },

  sorterByMagic: (newArrayChamp) => {
    const magicSorter = newArrayChamp.sort((a, b) => {
      if (b.magic > a.magic) {
        return 1;
      }
      if (b.magic < a.magic) {
        return -1;
      } else {
        return 0;
      }
    });
    return magicSorter;
  },

  sorterByDefense: (newArrayChamp) => {
    const defenseSorter = newArrayChamp.sort((a, b) => {
      if (b.defense > a.defense) {
        return 1;
      }
      if (b.defense < a.defense) {
        return -1;
      } else {
        return 0;
      }
    });
    return defenseSorter;
  },

  filterByName: (newArrayChamp, name2) => {
    const filteringName = newArrayChamp.filter(element => (element.id.toLowerCase().match(name2.toLowerCase())));
    return filteringName;
  }

//Aquí inicia la función matemática

  
//esta llave cierra window.lol
}

