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
searchData: (lolData)=> {

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
