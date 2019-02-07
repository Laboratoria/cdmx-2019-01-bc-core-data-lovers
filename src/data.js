window.data = {

  consult: (yearValue, userValue) => {
    const injuriesby = INJURIES;

    injuriesby.forEach(element => {
      //console.log(Object.keys(element))
      let year = element.Year;
      let total = element.Total_Injured_Persons;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      if (year == yearValue) {
       document.write(`<b>Año:</b> <i>${yearValue}</i> <br><b>Total de heridos en Moto ${moto};</i>`)
      };
      
    




      //ConsoleLog si muestra todos los elementos console.log(total)
    });

  }

}

