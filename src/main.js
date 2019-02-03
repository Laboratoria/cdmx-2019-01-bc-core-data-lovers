const injuriesby = INJURIES;
const root = document.getElementById("root")

injuriesby.forEach(function(element){
  let total = element.Total_Injured_Persons;
  let moto = element.Total_Injured_Persons_Motorcyclists;
  let year = element.Year;
  let bike = element.Total_Injured_Persons_Pedalcyclists;
  let walk = element.Total_Injured_Persons_Pedestrians;
  let transit = element.Total_Injured_Persons_Transit_Total;
  

  root.insertAdjacentHTML('beforeend', year);
  console.log(total, moto,year, bike, walk, transit);

});
 
