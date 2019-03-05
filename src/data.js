/*global INJURIES: true*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

window.data = {
  dataKeys: [
   'Total_Injured_Persons_Pedestrians',
   'Total_Injured_Persons_Pedalcyclists',
   'Total_Injured_Persons_Bus_Occupants',
   'Total_Injured_Persons_Motorcyclists',
   'Total_Injured_Persons_Passenger_Car_Occupants'
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

  getDataAsArray: (dataToSearch) => {
    let dataToReturn = [];
    for (let injuriesByYear of INJURIES) {
      dataToReturn.push([
        parseInt(injuriesByYear.Year.substr(0, 4)),
        injuriesByYear[dataToSearch]
      ]);
    }
    return dataToReturn;
  },

  consult: (dataToSearch, yearValue) => {
    const dataByYear = dataToSearch.find(element => element.Year === yearValue);
    const newDataByYear = {};
    for (const key of window.data.dataKeys) {
        newDataByYear[key] = dataByYear[key];
    }
    return newDataByYear;
  }
};

//función para obtener arreglo por año
//let years = new Map();
//for (const injuriesByYear of INJURIES) {
//console.log(injuriesByYear)
//}
