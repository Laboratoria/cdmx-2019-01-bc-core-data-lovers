window.data = {

  consultYear: (yearValue, userValue) => {
    const injuriesby = INJURIES;
    let found = injuriesby.find(element => element.Year == yearValue)
    console.log(found)
    
      //injuriesby.forEach(element => {
      //console.log(Object.keys(element))
      //let year = element.Year;
      //let total = element.Total_Injured_Persons;
      //let moto = element.Total_Injured_Persons_Motorcyclists;
      //let bike = element.Total_Injured_Persons_Pedalcyclists;
      //let walk = element.Total_Injured_Persons_Pedestrians;
      //let transit = element.Total_Injured_Persons_Transit_Total;

      //ConsoleLog si muestra todos los elementos console.log(total)
    }

  };
