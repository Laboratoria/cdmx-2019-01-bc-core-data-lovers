const data = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Motorcyclists},${INJURIES.Year}`);


data.forEach(function(element) {
  let totalheridos = data[28].Total_Injured_Persons;
  let año = data[28].Year;

});
console.log(data);

//Total_Injured_Persons
//Total_Injured_Persons_Motorcyclists
//Total_Injured_Persons_Pedalcyclists
//Total_Injured_Persons_Pedestrians
//Total_Injured_Persons_Transit_Total