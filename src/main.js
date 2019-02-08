
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
    

    

   /*esta función imprime los nombres de los personajes*/
   /*let imprimirImagen = "";
            const printImg = (img)=>{
            let resultImg = `<img class= "listaCampeones" src="${img}">`;
            es.insertAdjacentHTML("beforeend",resultImg);}

    let imprimirDatos = "";
        const print = (datos)=>{
        let result = `<div class ="lista"> ${datos} </div>`;
        es.insertAdjacentHTML("beforeend",result);}*/

  //Funcion de botones

   inicio.onclick = ()=>{
     document.getElementById("primera-pantalla").style.display = 'none';
     document.getElementById("fondo-de-lista-de-campeones").style.display = 'block';
     
  
   
    
   menu.onclick = ()=> {
      document.getElementById("mySidenav").style.width = "250px";};

   cerrar.onclick = ()=> {
        document.getElementById("mySidenav").style.width = "0px";};
  





// Pintar en HTML
const print =(name,img,title) => {
 let nameList = `<div class="nameList"><img class="lolIcons" src="${img}"><div id="letras"><h1 id= "nombre" >${name}</h1> <p id="titulo">${title}</p></div></div>`;
 es.insertAdjacentHTML("beforeend",nameList);}
    
   //const buscadora =() => {
        for(const key in dataLol){
            if(dataLol.hasOwnProperty(key)){
            const element = dataLol[key];
            let name = element.name;
            let tag = element.tags[0];
            let img = element.img;
            let title = element.title;
            let datos = [`${name}  ${title} ${tag}`]
            /*print (datos);
            printImg(img);*/
            print(name, img, title)

             console.log(name);
          }}; 
        
        
  const support =document.getElementById('support');
   
//const showD ata = window.lol.showData

    for ( let i=0; i<rol.length; i++) {                                        
      rol[i].addEventListener('click', () => {
        let rolId = rol[i].id;
        const dataToArray = Object.values(dataLol); 
        filtrado =dataToArray.filter(element => element.tags[0]===rolId);
      console.log(filtrado);
      })
    
    
    }; 
  }
      
    


        







  /*for ( let i=0; i<rol.length; i++){
    rol[i].addEventListener('click', () => {
      let rolId = rol[i].id;
        let arr=[];
        const dataToArray = Object.values(dataLol);
        dataToArray.forEach(element => {
          const roles = element.tags[0];
          if (roles === rolId){
            arr.push(element);
          }
          });

          return arr;
        })} */
 
    


//Funcion para imprimir//


    
      //const filtroSupport = Object.values(dataLol)
        //    filtroSupport.forEach(element => {
          //  const roles = element.tags[0];
          /*if (roles === "Support"){
              console.log(element);}
            });
              
            }

          support.addEventListener('click',filtroPorRol)*/
 