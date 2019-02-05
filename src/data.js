/*global INJURIES: true*/
/*global Map: true*/
/*eslint no-undef: "error"*/
//fetch ("https://swapi.co/api/people/1").then((data)=>data.json()).then((injuries) => {return console.log(injuries)});

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

var years = new Map();

for (let injuriesByYear of INJURIES) {
  years.set(injuriesByYear.Year, injuriesByYear);
  console.log(injuriesByYear);
}

//console.log(years.get("2001-01-04").Total_Injured_Persons);



