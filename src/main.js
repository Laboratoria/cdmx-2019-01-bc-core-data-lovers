const POKEMON = POKEMON;
const data = POKEMON.pokemon;

data.forEach(element => {
let picture = element.img;
var image = document.createElement("img");
image.src= picture
document.body.appendChild(image); 
document.write("<br>" + 'Nombre: ' + element.name + '<br>');
document.write('Número ' + element.num + "<br>");
document.write('Tipo: ' + element.type + "<br>");
document.write('Peso: ' + element.weight + "<br>");
document.write('Altura: ' + element.height + "<br>");
document.write('Debilidades: ' + element.weaknesses + "<br><br>");
});

