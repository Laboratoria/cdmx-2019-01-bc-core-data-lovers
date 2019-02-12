

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

  //Trae los divs de cada personaje
  const character = document.getElementById('character')

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
      document.getElementById("mySidenav").style.width = "75%";};

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

    let nameList = `<div id="${champ.id}" class="nameList"><img class="lolIcons" src="${champ.img}"><img class="lolIcons" src="${champ.splash}"><div id="letras"><h1 id= "nombre" >${champ.name}</h1> <p id="titulo">${champ.title}</p></div></div>`;    showFirstChampionList.insertAdjacentHTML("beforeend",nameList);});}

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
      document.getElementById("mySidenav").style.width = "0%";
  
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

    
//selecciona un personaje dando click
//el click ejecuta la función que abre la info del personaje
//el click almacena el id del personaje que se seleccionó
//una función busca en el array los datos del personaje
//la función borra el contenido anterior
//la función extrae los elementos del personaje
//una función de impresión específica imprime los datos completos en la tarjeta del personaje

/*const characterSheet = () => {
  character.addEventListener('click', ()=>{
  const openCharacterSheet = window.lol.characterSelection(dataToArray);
 console.log (openCharacterSheet);})}
 characterSheet();*/


 //const characterSheet = () => {
  /*for ( let i=0; i<showFirstChampionList.length; i++){
    showFirstChampionList[i].addEventListener('click', () => {
      let characterName = showFirstChampionList[i].id;
      console.log(characterName);})}
    //  const characterDetail = window.lol.characterSelection(characterName,dataToArray);
    //  console.log(characterDetail);})}}*/


    let aatrox = document.getElementById("Aatrox")
    aatrox.addEventListener('click', () => { 
      console.log('sí funciono');

    })