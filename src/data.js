/*global INJURIES: true*/
/*global Map: true*/
/*eslint no-undef: "error"*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//Talía
//const url = 'https://raw.githubusercontent.com/ElenaHrndz/cdmx-2019-01-bc-core-data-lovers/src/data/injures.json';
//const getData = (data) => {
  fetch(data)
  .then(Response => Response.json())
  .then((INJURES) => {
    //console.log(injures);
    const years =
    const injuresByMode =
    listeners(years, injuresByMode);
  })
  .catch(console.error(problem, error)
getData(url)


// var years = new Map();
//
// for (let injuriesByYear of INJURIES) {
//   years.set(injuriesByYear.Year, injuriesByYear);
// }

window.data = {
  getDatabyMode: (dataToSearch) => {
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

// Fórmula para filtrar incidentes por año. Método Javascript llamado filter
//window.filterYears = (injuriesBy, years) => {
  //let injuriesByYear = injuriesBy.filter(element => {
    //return element.year === years;
  //});
  //return injuriesByYear;
