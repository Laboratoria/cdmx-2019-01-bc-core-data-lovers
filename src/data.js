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
  }
};
