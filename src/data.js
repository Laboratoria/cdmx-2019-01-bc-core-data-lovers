const dataBase =  WORLDBANK;
 
 function filterCountry(select)
  { 
    let sendIndicator;
    let indicatorFilter;
    let IndicatorsName;
     if (select === "MEX")
     {
       const country =  dataBase.MEX.indicators;
       const indicatorsName = country.filter(element=>{ 
      return element.indicatorName === "mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria)";
      })
  
    indicatorFilter=IndicatorsName;
    } 
     else if (select==="PER")
     {
      const country =  dataBase.PER.indicators;
      const IndicatorsName = country.filter(element=>{ 
      return element.indicatorName === "mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria)";
     })
     indicatorFilter=IndicatorsName;
    } 
     else if (select==="BRA")
    {
        const country =  dataBase.PER.indicators;
        const IndicatorsName = country.filter(element=>{ 
        return element.indicatorName === "mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria)";
       })
       indicatorFilter=IndicatorsName;
    } 

    else if (select==="CHL")
    {
        const country =  dataBase.PER.indicators;
        const IndicatorsName = country.filter(element=>{ 
        return element.indicatorName === "mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria)";
       })
       indicatorFilter=IndicatorsName;
    }

   
    indicatorFilter.forEach(element => { 
      let indicatorsData = element.data;
      console.log(indicatorsData); 
      sendIndicator= indicatorsData; 
    })   
  return sendIndicator;
}
window.filterCountry = filterCountry;










