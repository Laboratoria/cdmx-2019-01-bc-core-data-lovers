
/* const search = document.getElementById('search')
const buscadora = () => {
  console.log(search.value)
  for (const key in dataLol) {
    if (dataLol.hasOwnProperty(key)) {
      const element = dataLol[key];
      let name = element.name;
      let tag = element.tags[0];
      let img = element.img;
  
      if(search.value === 'A'){
        console.log(name)
      }
  
  
      //console.log(element.info.defense)
      
    }
  }
}
search.addEventListener('keyup', buscadora)
console.log(LOL.data.Aatrox)
const dataLol = LOL.data
for (const key in dataLol) {
  if (dataLol.hasOwnProperty(key)) {
    const element = dataLol[key];
    let name = element.name;
    let tag = element.tags[0];
    let img = element.img;
    if(search.value === 'A'){
      console.log('encontrado')
    } */

    const search = document.getElementById('search')
    /* Convierte la base de datos en una variable*/
    const dataLol = LOL.data;
    /*trae el div de nombre "es" para identificarlo e imprimirlo ahí*/
    const es = document.getElementById('es')

    //Variable class del menu//
    const rol= document.getElementsByClassName("rolPersonajes");

   
    


    /* Variales botones*/
    const inicio = document.getElementById('inicio')
    const menu = document.getElementById('menu')
    const cerrar = document.getElementById('cerrar')
    
  //Funcion de botones

   inicio.onclick = ()=>{
     document.getElementById("primera-pantalla").style.display = 'none';
     document.getElementById("fondo-de-lista-de-campeones").style.display = 'block';
     
  
   
    
   menu.onclick = ()=> {
      document.getElementById("mySidenav").style.width = "250px";};

   cerrar.onclick = ()=> {
        document.getElementById("mySidenav").style.width = "0px";};
  





  const result = window.lol.iterarData(dataLol)

  const print =(result) => {
    result.forEach(champ => {
    let nameList = `<div class="nameList"><img class="lolIcons" src="${champ.img}"><div id="letras"><h1 id= "nombre" >${champ.name}</h1> <p id="titulo">${champ.title}</p></div></div>`;
    es.insertAdjacentHTML("beforeend",nameList);});}

               print(result)
   
   //este hay que subirlo porque es global 
 const dataToArray = Object.values(dataLol);     

 
    


//Funcion para imprimir//


    
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

