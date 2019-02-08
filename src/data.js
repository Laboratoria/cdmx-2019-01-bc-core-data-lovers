// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; 
*/
window.worldBank = {
  filter : (data, palabraComp) => {
    data.forEach(element => {
      let indicator = element.indicatorName;
      if((new RegExp(palabraComp, "i")).test(element.indicatorName)){
        console.log(element.indicatorName );
        
      }
    });
  }
  
}
