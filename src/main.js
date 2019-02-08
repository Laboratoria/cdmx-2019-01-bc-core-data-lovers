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

const data = POKEMON.pokemon;
let dataName = []; //se puede crear manualmente

//obteniendo data

const data = POKEMON.pokemon;



data.forEach(element => { //recorrer el objeto POKEMON y obtener los nombres
    let namee = element.name //guardar los nombres en variables
    dataName.push(namee) //agregarlos al array vacío
});

//creando menú a partir de los datos de un array
let menuType = document.getElementById('Type'); //en esta parte del html se creará el menú o lista
for (let i= 0; i<dataName.length; i++) { //bucle que recorre el array que contiene los nombres 
    let menu = document.createElement('option') //metodo create element option guar
    menu.innerHTML = dataName[i]; //imprime cada elemento del array
    menu.value = dataName[i];
    menuType.appendChild(menu);
}

