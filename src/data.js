window.data = {

  consultYear: (yearValue, userValue) => {
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
        resultesecc.innerHTML = `<b>Durante</b> <i>${year.substr(0,4)}</i> <br><b>Total de heridos en ese año fue:</b> <i>${total}; <b>en moto:</b> ${moto}, <b>en bici:</b> ${bike}, <b>en transito:</b> ${transit}</i>`
      };
      console.log(year)
      //ConsoleLog si muestra todos los elementos console.log(total)
    });

  }
}
