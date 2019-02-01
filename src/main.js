const total = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons}`);
const date = INJURIES.map(INJURIES => `${INJURIES.Year}`);
const moto = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Motorcyclists}`);
const bike = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Pedalcyclists}`);
const walk = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Pedestrians}`);
const transit = INJURIES.map(INJURIES => `${INJURIES.Total_Injured_Persons_Transit_Total}`);
const root = document.getElementById("root")

root.insertAdjacentHTML('beforeend', date)

//Total_Injured_Persons
//Total_Injured_Persons_Motorcyclists
//Total_Injured_Persons_Pedalcyclists
//Total_Injured_Persons_Pedestrians
//Total_Injured_Persons_Transit_Total
