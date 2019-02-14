window.lol = {
  iterarData: (datalol) => {
    let datosArr = []
    for (const key in datalol) {
      if (datalol.hasOwnProperty(key)) {
        const element = datalol[key];
        let obj = {
          name: element.name,
          tag: element.tags,
          splash: element.splash,
          title: element.title,
          difficulty: element.info.difficulty,
          id: element.id,
          difficulty: element.info.difficulty,
          splash: element.splash,
          blurb: element.blurb,
          attack: element.info.attack,
          defense: element.info.defense,
          magic: element.info.magic,
          difficulty: element.info.difficulty,
          hp: element.stats.hp,
          hpperlevel: element.stats.hpperlevel,
          mp: element.stats.mp,
          mpperlevel: element.stats.mpperlevel,
          movespeed: element.stats.movespeed,
          armor: element.stats.armor,
        }
        datosArr.push(obj)
      }
    }
    return datosArr
  },

  filtroDataRoles: (rolId, datosArr) => {
    const filtradoPorRoles = datosArr.filter(element => element.tag[0] === rolId || element.tag[1] === rolId);
    return filtradoPorRoles
  },

  filterBySearch: (name, datosArr) => {
    const concidence = datosArr.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
    return concidence;
  },

  filterByCharacter: (characterId, datosArr) => {
    const characterOnclick = datosArr.filter(element => element.id === characterId);
    return characterOnclick;
  },

  sortByDifficulty: (datosArr) => {
    const sortAsc = datosArr.sort((a, b) => {
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
    return sortAsc
  },

  sortByDifficultyDsc: (datosArr) => {
    const sortDsc = datosArr.sort((a, b) => {
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
    return sortDsc
  },

}

