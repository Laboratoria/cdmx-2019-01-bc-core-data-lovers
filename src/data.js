window.data = {

  consult: (yearbutton, userbutton) => {
    const injuriesby = INJURIES;

    injuriesby.forEach(element => {

      let year = element.Year;
      let total = element.Total_Injured_Persons;
      let moto = element.Total_Injured_Persons_Motorcyclists;
      let bike = element.Total_Injured_Persons_Pedalcyclists;
      let walk = element.Total_Injured_Persons_Pedestrians;
      let transit = element.Total_Injured_Persons_Transit_Total;
      if (year === yearbutton) {};



      //Le digo qué quiero que imprima. Deben ir en orden.
      printpage(year, total, moto, bike, walk, transit)
      //ConsoleLog si muestra todos los elementos console.log(total)
    });

  }

}

