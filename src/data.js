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

  sortByDifficulty: (difficulty, datosArr) => {
    datosArr.sort ((a, b) => {
    (a.element.info.difficulty) - (b.elelemnt.info.difficulty);
        }
   )
      
  }


}