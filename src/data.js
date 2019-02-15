/*global INJURIES: true*/

/*eslint no-undef: "error"*/

/*fetch('./data/injuries/injuries.json').then((injuries) => injuries.json()).then((injuries) => {
  return console.log(injuries)
});*/

// let INJURIES = ('./data/injuries/injuries.js')

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
      if (dataByYear.hasOwnProperty(key)) {
        newDataByYear[key] = dataByYear[key];
      }
    }
    return newDataByYear;
  }
};

//función sort . declaramos variables
  
  // let sortData = document.getElementById("data_in_order").innerHTML;

  // function sortNumber() { 
  //   sortData.sort(arrayData); 
  //   resultGraphic.innerHTML = `<b>Year:  </b>${selectedYear.value.substr(0,4)}<br><br><b>Pedestrians:  </b>${arrayData[0]} <br><b>Bikecyclists:  </b>${arrayData[1]} <br><b>Bus Occupants:  </b>${arrayData[2]} <br><b>Car Occupants:  </b>${arrayData[3]} <br><b>Motorcyclists:  </b>${arrayData[4]}`;
  // return sortData;
  // };