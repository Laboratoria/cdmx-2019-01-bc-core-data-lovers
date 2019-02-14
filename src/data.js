// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//esto a esta funcionando al 100
window.data={ 

//funcion de filtrar



filterData:(dataPokemon,types) =>{
const arrayPokemon= dataPokemon ;
  const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
  return arrayFilter;
}

}
/*
//funcion de ordenar
sortData:(dataPokemon,sortBy,sortOrder)=>{
  let orderDta = [];
  switch (sortBy){
    case"name":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.name>b.name)?1:-1);
    }
    else if (sortOrder === "desc"){
      console.log(sortBy);
        orderDta= dataPokemon.sort((a,b) => (a.name>b.name)?-1:1);
    }
    break;

    case "width":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.width>b.name)?1:-1);
    }else if (sortOrder === "desc"){
        orderDta= dataPokemon.sort((a,b) => (a.width>b.name)?-1:1);
    }break

  
  }
  sortData(dataPokemon,sortBy,sortOrder);
}*/













 */En esta seccion estoy extrayendo datos especificos de la data/*
  /*
 const datapokemon =POKEMON.pokemon;
 
  
 const imprimir = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
  
  const pokes = document.getElementById("pintar");
 
   let nombrePokemon = `<p> <img src="${imagen}">
   <br>Nombre:${nombre2}</br>
   <br> Su Id es :${id}</br>
   <br> Su candy es :${candy}</br>
   <br> Su altura es :${altura}</br>
   <br> Su peso es :${peso}</br>
   <br> debilidades :${debilidades}</br>
   </p>`;
   pokes.insertAdjacentHTML("beforeend",nombrePokemon);
   
 };
 datapokemon.forEach(elemento => {
   let imagen = elemento.img;
   let nombre2 = elemento.name;
   let id = elemento.id;
   let candy = elemento.candy;
   let altura = elemento.height;
   let peso =elemento.weight;
   let debilidades =elemento.weaknesses;
   imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
   alert(imprimir);
 });*/
