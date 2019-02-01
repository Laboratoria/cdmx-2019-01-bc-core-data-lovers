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

    /* botones*/
    const inicio = document.getElementById('inicio')


   /*esta función imprime los nombres de los personajes*/
   /*let imprimirImagen = "";
            const printImg = (img)=>{
            let resultImg = `<img class= "listaCampeones" src="${img}">`;
            es.insertAdjacentHTML("beforeend",resultImg);}

    let imprimirDatos = "";
        const print = (datos)=>{
        let result = `<div class ="lista"> ${datos} </div>`;
        es.insertAdjacentHTML("beforeend",result);}*/
   inicio.onclick = ()=>{
     document.getElementById("primera-pantalla").style.display = 'none';
     document.getElementById("fondo-de-lista-de-campeones").style.display = 'block';}

const print =(name,img,title) => {
 let nameList = `<div class="nameList"><img class="lolIcons" src="${img}">${name} ${title}</div>`;
 es.insertAdjacentHTML("beforeend",nameList)}
    
   /* const buscadora =() => {*/
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

            console.log(name);}}
        
  
    