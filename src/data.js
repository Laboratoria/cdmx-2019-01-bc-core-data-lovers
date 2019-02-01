//fetch ("https://swapi.co/api/people/1").then((data)=>data.json()).then((injuries) => {return console.log(injuries)});

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;


var years = new Map();
for (let i = 0; i < INJURIES.length; i++) {
  years.set(INJURIES[i].Year, INJURIES[i]);
  console.log(INJURIES[i]);
}
years.size;
  console.log(years.get("2001-01-04")["Total_Injured_Persons"]);
