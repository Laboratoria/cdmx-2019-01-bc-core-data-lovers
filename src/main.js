const data = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons}`);
const date = INJURIES.map(INJURIES => `${INJURIES.Year}`);
const moto = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Motorcyclists}`);
const bike = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Pedalcyclists}`);
const walk = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Pedestrians}`);
const transit = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Transit_Total}`);

console.log(data, date, moto, bike, walk, transit)

//Total_Injured_Persons
//Total_Injured_Persons_Motorcyclists
//Total_Injured_Persons_Pedalcyclists
//Total_Injured_Persons_Pedestrians
//Total_Injured_Persons_Transit_Total
