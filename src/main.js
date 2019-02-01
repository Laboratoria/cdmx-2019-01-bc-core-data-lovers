<<<<<<< HEAD


=======
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
  
   /*esta función imprime los nombres de los personajes*/
    let name = "";
    const print = (name)=>{
        let result = `<p>${name}</p>`;
        es.insertAdjacentHTML("beforeend",result);}
    
   /* const buscadora =() => {*/
        for(const key in dataLol){
            if(dataLol.hasOwnProperty(key)){
            const element = dataLol[key];
            let name = element.name;
            let tag = element.tags[0];
            let img = element.img;

            print (name,tag);
>>>>>>> upstream/master

            console.log(name);}}
        
  
    