const botonMenu = document.getElementById('menuHide') ;
const returnFilter = document.getElementById('returnFilter');
const botonFilter = Array.from(document.getElementsByClassName("boton-filter"));
const pokemon = POKEMON.pokemon;

//seleccionando un boton
botonFilter.forEach(function(boton){
  boton.addEventListener("click", function(event){
    const optionfilter = event.target.id;
    console.log(optionfilter);


    //console.log(event.target.id);
    //filterdata(pokemon,optionfilter)
    return optionfilter;
  });
filterdata(optionfilter);
})

//funcion pura del filtrado
const filterdata = (pokemon, optionfilter) => {
  // Filtrar el tipo de pokemon mediante dos parámetros
  // Uno es el array "pokemon" y el otro parámetro es un evento que
  // me regresa el tipo

  // Capturar el primer parámetro (el array Pokemon)
  // Capturar el evento el cual este debe retornar el tipo
  const newDataA = pokemon.filter(pokemon => pokemon.type.includes(optionfilters));
  console.log(newDataA);
  //console.log(pokemon , optionfilter);
}
console.log(filterdata);
