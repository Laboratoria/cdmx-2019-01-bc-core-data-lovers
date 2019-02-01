//const lol = LOL;
//Convierte la base de datos en una variable 

const dataLol = LOL.data;

const imprimirPersonajes = document.getElementById('imprimirPersonajes')
//Funci{on para imprimir nombres

let name ="";
const print=(name)=>{
    let result = `<p>${name}</p>`
    imprimirPersonajes.insertAdjacentHTML("beforeend", result);}

    for (const key in dataLol) {
        if (dataLol.hasOwnProperty(key)) {
          const element = dataLol[key];
          let name = element.name;
          let tag = element.tags[0];
          let img = element.img;

print (name);
 console.log(name);}}






/*console.log(lol);
 console.log(lol.data)
 console.log("++++++++++++++++++++++++")



 //
const search = document.getElementById('search')
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
    }
  }} */

  