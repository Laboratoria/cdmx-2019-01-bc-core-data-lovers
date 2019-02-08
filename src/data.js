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
          secondaryRol: element.tags[1]
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
    
  orderByAttack: () => {

  }
  //esta llave cierra window.lol
}



// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/* const example = () => {
  return 'example';
};

window.example = example;

*/
