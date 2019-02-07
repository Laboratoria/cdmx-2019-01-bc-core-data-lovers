window.lol = {
 iterarData: (datalol) => {
   let datos = []
   for (const key in datalol) {
  if (datalol.hasOwnProperty(key)) {
    const element = datalol[key];
    let obj = {
      name: element.name,
      tag: element.tags[0],
      imga: element.img,
      title: element.title,
    }
    datos.push(obj)
   }
  }
  return datos
 },

filtroDataRoles: (rolId, arrayData ) =>{  
     filtradoPorRoles = arrayData.filter(element => element.tags[0] === rolId);

      return filtradoPorRoles
    },
 
}
