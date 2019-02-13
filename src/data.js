/*global INJURIES: true*/

/*eslint no-undef: "error"*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

  // let INJURIES = ('./data/injuries/injuries.js')

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

  },
  
  consult: (dataToSearch, yearValue) => {
    //let dataForYear = {},
    const dataByYear = dataToSearch.find(element => element.Year === yearValue);
    console.log(dataByYear); 
      }
      //return dataForYear;
  };
//función para obtener arreglo por año
//let years = new Map();
//for (const injuriesByYear of INJURIES) {
  //console.log(injuriesByYear)
//}

  }
};
//función para obtener arreglo por año
// let years = new Map();
// for (const injuriesByYear of INJURIES) {
//   // console.log(injuriesByYear)
// }

