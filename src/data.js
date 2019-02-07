window.lol = {
  //Funcion que recorre un objeto que contiene 4 indicadores y se convierte en un arreglo
  showData: (lolData) => {
    let arr = [];
    for (const key in lolData) {
      if (lolData.hasOwnProperty(key)) {
        const element = lolData[key];
        obj = {
          img: element.splash,
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
    return arr
  },

  filterByRol: (rolId, arrayData) => {

        let newArray = [];
        arrayData.forEach(element => {
          let img = element.splash;
          let name = element.name;
          const tags = element.tags[0];
          const tags2 = element.tags[1];
          if (tags === rolId) {
            newArray.push(element);
            print(img, name, tags, tags2);
          }
          if (tags2 === rolId) {
            newArray.push(element);
            print(img, name, tags, tags2);
          }
        });
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
