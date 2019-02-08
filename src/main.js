
const data = POKEMON.pokemon;
const finalResult = document.getElementById('root');
const butFire = document.getElementById ('Fire');
const butNormal = document.getElementById ('Normal');
const butGrass = document.getElementById ('Grass');
const butIce = document.getElementById ('Ice');
const butElectric= document.getElementById ('Electric');
const butFight= document.getElementById ('Fighting');
const butGround = document.getElementById ('Ground');
const butFly = document.getElementById ('Flying');
const butPoison= document.getElementById ('Poison');


// Filtra fuego
const typeFire = data.filter(data => data.type.includes("Fire"));
const printFire = (name, imagen, type, id) => {
  let fire = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += fire;
};   
butFire.addEventListener("click", filterFire);
function filterFire() {
  typeFire.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printFire(name, imagen, type, id);
  });
}
// filtra Normal
const typeNormal = data.filter(data => data.type.includes("Normal"));
const printNormal = (name, imagen, type, id) => {
  let normal = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += normal;
};   
butNormal.addEventListener("click", filterNormal);
function filterNormal() {
  typeNormal.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printNormal(name, imagen, type, id);
  });
}
// filtra e imprime Grass
const typeGrass = data.filter(data => data.type.includes("Grass"));
const printGrass = (name, imagen, type, id) => {
  let grass = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += grass;
};   

butGrass.addEventListener("click", filterGrass);
function filterGrass() {
  typeGrass.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printGrass(name, imagen, type, id);
  });
}

//Filtra e imprime Electric
const typeElectric = data.filter(data => data.type.includes("Electric"));
const printElectric = (name, imagen, type, id) => {
  let electric = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += electric;
};   

butElectric.addEventListener("click", filterElectric);
function filterElectric() {
  typeElectric.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printElectric(name, imagen, type, id);
  });
}
// ICE
const typeIce = data.filter(data => data.type.includes("Ice"));
const printIce = (name, imagen, type, id) => {
  let ice = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += ice;
};   

butIce.addEventListener("click", filterIce);
function filterIce() {
  typeIce.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printIce(name, imagen, type, id);
  });
}
// Pelea
const typeFight = data.filter(data => data.type.includes("Fighting"));
const printFigth = (name, imagen, type, id) => {
  let Fighting = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += Fighting;
};   

butFight.addEventListener("click", filterFight);
function filterFight() {
  typeFight.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printFigth(name, imagen, type, id);
  });
}
// Poison
const typePoison = data.filter(data => data.type.includes("Poison"));
const printPoison = (name, imagen, type, id) => {
  let poison = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += poison;
};   

butPoison.addEventListener("click", filterPoison);
function filterPoison() {
  typePoison.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printPoison(name, imagen, type, id);
  });
}
//Ground
const typeGround = data.filter(data => data.type.includes("Ground"));
const printGround = (name, imagen, type, id) => {
  let ground = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += ground;
};   

butGround.addEventListener("click", filterGround);  
function filterGround() {
  typeGround.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printGround(name, imagen, type, id);
  });
}
// Voladores
const typeFlying = data.filter(data => data.type.includes("Flying"));
const printFlying = (name, imagen, type, id) => {
  let flying = `<button class="pokedex" style='width:150px; height:200px'><img src="${imagen}"><br>Nùmero: ${id} <br> Nombre: ${name} <br> Tipo: ${type}</button>`;
  finalResult.innerHTML += flying;
};   

butFly.addEventListener("click", filterFlying);
function filterFlying() {
  typeFlying.forEach(data => {
    let name = data.name;
    let imagen = data.img;
    let type = data.type;
    let id = data.id;
    printFlying(name, imagen, type, id);
  });
}