/*
const data = POKEMON.pokemon;
console.log(data);

data.forEach(element => {
  let id = id.element;
  let num = num.element;
  let name = name.element;
  print(id, num, name );
  console.log(print);
})*/


//Trying with JSON
document.getElementById('botonjson').addEventListener("click", loadjson);

function loadjson() {
  fetch("pokemon.json").then(function(response){
    return response.json();
  })
  .then(function(data){
    let html = "";
    data.forEach(function(pokm){
      html += `<li>${pokm.name} - ${pokm.id}</li>`;
    })
    document.getElementById("resultadojson").innerHtml = html;
  })
}
