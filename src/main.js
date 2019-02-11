

    const search = document.getElementById('search')

    /* Convierte la base de datos en una variable*/
    const dataLol = LOL.data;

    /*trae el div de nombre "es" para identificarlo e imprimirlo ahí*/
    const showFirstChampionList = document.getElementById('showFirstChampionList')

 //Trae la class que contiene el rol de la lista del menú desplegable 
    const rol = document.getElementsByClassName("rolPersonajes");

  //almacena en variable los id del primer evento de cambio de pantalla, la interacción para abrir y cerrar el menú
    const inicio = document.getElementById('inicio')
    const menu = document.getElementById('menu')
    const cerrar = document.getElementById('titleChampions')

  //almacena el valor del input para la busqueda por nombre
  const searchInput = document.getElementById("searchInput")
    
  
  //vuelve la base de datos a un arreglo
 const dataToArray = Object.values(dataLol); 

  //Funcion de botones
  //click que hace cambio de la primera pantalla a la lista de personajes

   inicio.onclick = ()=>{
     document.getElementById("primera-pantalla").style.display = 'none';
     document.getElementById("fondo-de-lista-de-campeones").style.display = 'block';};

     // función del menú desplegable donde se encuentran los roles para filtrar 
     
   menu.onmouseover = ()=> {
      document.getElementById("mySidenav").style.width = "250px";};

   showFirstChampionList.onmouseover = ()=> {
        document.getElementById("mySidenav").style.width = "0px";};

   cerrar.onmouseover = ()=> {
          document.getElementById("mySidenav").style.width = "0px";};
  


/* ----------------------------------------------*/
  
  //Trae el resultado de la función filtrado de data.js
  const datos  = window.lol.iterarData(dataLol)

// función que imprime la primera iteración que da la lista completa de campeones
  const print = (datos) => {
    showFirstChampionList.innerHTML = "";
    datos.forEach(champ => {
    let nameList = `<div class="nameList"><img class="lolIcons" src="${champ.img}"><img class="lolIcons" src="${champ.splash}"><div id="letras"><h1 id= "nombre" >${champ.name}</h1> <p id="titulo">${champ.title}</p></div></div>`;
    showFirstChampionList.insertAdjacentHTML("beforeend",nameList);});}

               print(datos)
   
    
//toma el id de las "a" del menu desplegable
//las itera, a cada una le asigna un addEventListener
//las prepara para recibir click
//extrae el ID de cada opción
//llama a la sección donde se va a imprimir
//llama la función de filtro del window, busca el id seleccionado dentro de la data y forma un nuevo arreglo con la data filtrada
//limpia la sección previa 
//itera el arreglo y va acumulando los resultados dentro de divs de impresión
const selectByRol = () => {
  for ( let i=0; i<rol.length; i++){
    rol[i].addEventListener('click', () => {
      let rolId = rol[i].id;

      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, dataToArray);
      print(arrayRolesFiltered);})}}
    selectByRol();
      

  
const searchByName = () => {
  searchInput.addEventListener("keyup", ()=>{
    let searchValue = searchInput.value;
    const showSearch = window.lol.filterByName(searchValue,dataToArray);
    print(showSearch);
  })};
 searchByName();

    




    
      //const filtroSupport = Object.values(dataLol)
        //    filtroSupport.forEach(element => {
          //  const roles = element.tags[0];
          /*if (roles === "Support"){
              console.log(element);}
            });
              
            }
            support.addEventListener('click',filtroPorRol)*/


            //cuando yo eliga un rol en mi lista dentro del menu desplegable, con la clase de rol
            // obtener el class (nombre)
            //obener el arreglo completo
            // lo inserto en filtroDataRoles para obtener el arreglo filtrado y lo asigno a una variable
            //con un map recorro el arreglo de objetos y en cadauno voy sacando las caracteristicas
            // y boy pintando
