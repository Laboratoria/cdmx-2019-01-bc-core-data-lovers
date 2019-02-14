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

  sortByDifficulty: (datosArr) => {
    const queFuncione = datosArr.sort ((a, b) => {
    if(a.difficulty > b.difficulty){
      return 1;
    }
    if(a.difficulty< b.difficulty){
      return -1;
    }
    else{
    return 0;
  } 
})
return queFuncione}
  



}