window.lol = {
 //Itera la data para ingresar a los datos que necesitamos y la devuelve en arreglo
 iterarData: (datalol) => {
   
  let datosArr = []
  for (const key in datalol) {
  if (datalol.hasOwnProperty(key)) {
    const element = datalol[key];
    let obj = {
      name: element.name,
      tag: element.tags[0],
      splash: element.splash,
      title: element.title,
    }
    datosArr.push(obj)
   }
  }
  return datosArr
 },

 //filtra los roles 
filtroDataRoles: (rolId, datosArr ) =>{  
     filtradoPorRoles = datosArr.filter(element => element.tag === rolId);

      return filtradoPorRoles
    },
 
}
