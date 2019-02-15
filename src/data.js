//esto ya esta funcionando al 100
window.data = {

  //funcion de filtrar

  filterData: (dataPokemon, types) => {
    const arrayPokemon = dataPokemon;

    const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));

    return arrayFilter;

  },
   sortData: (result, sortBy, sortOrder) => {
    //data.map(element =>{
      //element.name = parseFloat(element.name);

    //});
    if (sortOrder == 'asc'){
      return result.sort((a,b)=>(a[sortBy]>b[sortBy])?1:-1);
    }
    else if (sortOrder == 'desc'){
      return result.sort((a,b)=>(a[sortBy]<b[sortBy])?1:-1);
    }

   
    
  }


    










/*En esta seccion estoy extrayendo datos especificos de la data*/
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



























/*funcion de calcular*/
/*computeStats:(data) =>{
  const todo= array ;
}*/


/*En esta Seccion estoy trabajando en la seccion de busqueda*/
/*
    
function searching() {
  document.getElementById("result").innerHTML = '';
  let filtro = [
    "Dragonair",
    "pikachu",
    "mew",
    "mewtwo",
    "moltres"
  ];
  let elemento = document.getElementById("busqueda").value;
  let proceso = elemento.length;
  for (indice in filtro) {
    let name = filtro[indice];
    let str = name.substring(0, proceso);
    if (elemento.length <= name.length && elemento.length != 0 && name.length != 0) {
      if (elemento.toLowerCase() == str.toLowerCase()) {
        let node = document.createElement("LI");
        let textnode = document.createTextNode(filtro[indice]);
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
      } else {*/
/*alert('no')*
/* }*/







/*
    
let mostrar = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
 
    let nombrePokemon = `<p> <img src="${imagen}">
    <br>Nombre:${nombre2}</br>
    <br> Su Id es :${id}</br>
    <br> Su candy es :${candy}</br>
    <br> Su altura es :${altura}</br>
    <br> Su peso es :${peso}</br>
    <br> debilidades :${debilidades}</br>
    </p>`;
  }
datapokes.forEach(elemento => {
  let imagen = elemento.img;
  let nombre2 = elemento.name;
  let id = elemento.id;
  let candy = elemento.candy;
  let altura = elemento.height;
  let peso =elemento.weight;
  let debilidades =elemento.weaknesses;
  mostrar(imagen ,nombre2,id,candy,altura,peso,debilidades);
 
  
});*/
}
