
window.worldBnk = {

filterCountry:(dataWorld,countrySelect,indiSelect)=> {

  
const country= dataWorld[countrySelect].indicators;

const matchIndicator= country.filter (element => {
return element.indicatorName === indiSelect;

})


 let indicatorFilter=matchIndicator;

  indicatorFilter.forEach (element => {
   
   
   let dataIndicator= element.data;
console.log (dataIndicator);
   return (dataIndicator);
   
    
  })
  

}

}
 
