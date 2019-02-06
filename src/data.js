// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//const example = () => {
//  return 'example';
//};

//window.example = example;

const injuriesby = INJURIES;
injuriesby.forEach(element => {
  let year = element.Year;
  let total = element.Total_Injured_Persons;
  let moto = element.Total_Injured_Persons_Motorcyclists;
  let bike = element.Total_Injured_Persons_Pedalcyclists;
  let walk = element.Total_Injured_Persons_Pedestrians;
  let transit = element.Total_Injured_Persons_Transit_Total;
  if(year === "2011-01-04"){
    console.log(total,moto, bike, walk, transit);
  }

});
