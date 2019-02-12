/*global INJURIES: true*/
/*global Map: true*/
/*eslint no-undef: "error"*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// var years = new Map();
//
// for (let injuriesByYear of INJURIES) {
//   years.set(injuriesByYear.Year, injuriesByYear);
// }

window.data = {
  getData: (dataToSearch) => {
    let dataToReturn = [];
    for (let injuriesByYear of INJURIES) {
      dataToReturn.push({
        year: injuriesByYear.Year.substr(0, 4),
        number: injuriesByYear[dataToSearch]
      });
    }
    return dataToReturn;
  }      
      }
    }
  }
};
//función para obtener arreglo por año
let years = new Map();
for (const injuriesByYear of INJURIES) {
  console.log(injuriesByYear)
}



