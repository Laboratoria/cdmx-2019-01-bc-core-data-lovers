
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
  }
  }
  /funcion de calcular/
  /*computeStats:(data) =>{
    const todo= array ;
  }*/
  
  
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
            //alert('no')/
         /* }*/
    
    
   //Probando filter/
    /*const pokes = document.getElementById("probando");
     const filterElement= POKEMON.pokemon;
     let resultFilter = filterElement.filter(pokemon => pokemon.type.includes("Water"));
     
     console.log(resultFilter)*/
    
    /* Del arreglo resultFilter, necesito pintarlo en el HTML*/
    
    /*resultFilter.map((pokemon) => {
        pokes.innerHTML += `
        <article id="${pokemon.id}">
          <p>${pokemon.name}</p>
          <img src="${pokemon.img}" />
        </article>
        `
    })
    */
    
    
    
     //imprimir(resultFilter);/
    
     /*let newArr2 = datapokes.filter(pokemon => pokemon.type.includes("Water"));
     console.log(newArr2);
     let newArr3 = datapokes.filter(pokemon => pokemon.name.includes("Pikachu"));
     console.log(newArr3);*/
    /*
    
    const pokes=document.getElementById("probando");
    const filterElement=filterElement.filter(pokemon => pokemon.type.includes("Fire"));
    resultFilter.map((pokemon)=> { 
    pokes.innerHTML +=`
    <article id="${pokemon.id}">
    <p>${pokemon.name}</p>
    <img src="${pokemon.img}"/>
    </article>
    `
    })*/