/*global INJURIES: true*/

/*eslint no-undef: "error"*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

// let INJURIES = ('./data/injuries/injuries.js')

window.data = {
  dataKeys: [
    'Total_Injured_Persons_Bus_Occupants',
    'Total_Injured_Persons_Motorcyclists',
    'Total_Injured_Persons_Passenger_Car_Occupants',
    'Total_Injured_Persons_Pedalcyclists',
    'Total_Injured_Persons_Pedestrians'
  ],

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
    const dataByYear = dataToSearch.find(element => element.Year === yearValue);
    const newDataByYear = {};
    for (const key of window.data.dataKeys) {
      if (dataByYear.hasOwnProperty(key)) {
        newDataByYear[key] = dataByYear[key];
      }
    }
    return newDataByYear;
  }
};

//función para obtener arreglo por año
//let years = new Map();
//for (const injuriesByYear of INJURIES) {
//console.log(injuriesByYear)
//}
