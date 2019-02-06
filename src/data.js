window.lol = {
  showData: (lolData) => {
  for (const key in lolData) {
    if (lolData.hasOwnProperty(key)) {
      const element = lolData[key];
      let img = element.splash;
      let name = element.name;
      let tags = element.tags;
      let tags2 = element.tags;
      if (typeof tags2[1] == "undefined"){
        tags2[1]="";
      }
      print(img, name, tags[0], tags2[1]);
    }
  }
},

searchData: (rol, arrayData)=> {
  for( let i= 0; i<rol.length; i++){
     rol[i].addEventListener("click",() => {
     let rolId = rol[i].id;

      let newArray = [];
      arrayData.forEach(element => {
      let img = element.splash;
      let name = element.name;
      const tags = element.tags[0];
      const tags2 = element.tags[1];
       if(tags === rolId){
         newArray.push(element);
         print(img, name, tags, tags2);
     }
      if (tags2 === rolId){
        newArray.push(element);
        print(img, name, tags, tags2);
      }
  });
  })}
}
//esta llave cierra window.lol
}


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/* const example = () => {
  return 'example';
};

window.example = example;

*/
