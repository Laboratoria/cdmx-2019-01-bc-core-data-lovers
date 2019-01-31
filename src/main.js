
const POKEMON = POKEMON;

//cambio de pantallas
function changeOptions() {
    document.getElementById("start").style.display="none"
    document.getElementById("options").style.display="block"
}

function changeType () {
    document.getElementById("options").style.display="none"
    document.getElementById("finalResult").style.display="block"
}

function changeWeaknesses () {
    document.getElementById("options").style.display="none"
    document.getElementById("finalResult").style.display="block"
}

function changeHome () {
    document.getElementById("finalResult").style.display="none"
    document.getElementById("options").style.display="block"
}

//obteniendo data

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
