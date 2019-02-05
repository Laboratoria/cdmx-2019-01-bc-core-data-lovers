document.getElementById("next").addEventListener("click", ()=>{ 
  //se le marca a la compu que se le de click en el boton jugar para realizar la sig funcion Ya se ingreso el nombre (pablo) en el input-->
    let inputNombre = document.getElementById("inputName").value; //el valor (pablo) se va a guardar en mi variable inputNombre
    sessionStorage.setItem("Nombre", inputNombre);
    let nom = sessionStorage.getItem("Nombre");//GET: estpy obteniendo el valor que guarde en set bajo la referencia nombre
    document.getElementById("NombreDeUsuario").innerHTML = nom;
    document.getElementById("getName").style.display="none";
    document.getElementById("aparicion").style.display="block";
})
// document.getElementById("next").addEventListener("click", function(){
// let nom = sessionStorage.getItem("Nombre");//GET: estpy obteniendo el valor que guarde en set bajo la referencia nombre
//
//
// document.getElementById("NombreDeUsuario").innerHTML = nom;
// })

document.getElementById("showPokemons").addEventListener("click", ()=> {
    let dataPokemon = POKEMON.pokemon;
    window.pokemon.show(dataPokemon);
    document.getElementById("aparicion").style.display="none";
  })

    
//document.getElementById("showPokemons").addEventListener("click", ()=> {
//    const dataPokemon = POKEMON.pokemon;
 //   window.pokemon.show(dataPokemon);

//})
