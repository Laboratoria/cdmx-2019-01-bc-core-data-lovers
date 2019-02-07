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
      let indicator = element.indicatorName
      if(`/${palabraComp}/i.test(indicator)`){
        filteredIndicators.push(element);
       
      }
      console.log(filteredIndicators)
    });
  }
  
}

