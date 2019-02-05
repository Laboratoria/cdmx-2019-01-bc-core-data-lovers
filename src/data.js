/*global INJURIES: true*/
/*global Map: true*/
/*eslint no-undef: "error"*/
/*fetch('/data/injuries/injuri.json')
.then((data) => data.json()).then((injuries) => {
  return console.log(injuries)
});*/

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


var years = new Map();

for (let injuriesByYear of INJURIES) {
  years.set(injuriesByYear.Year, injuriesByYear);
}

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
};



//console.log(years.get("2001-01-04").Total_Injured_Persons);
