window.data = {

  consult: (yearValue, userValue) => {
    const injuriesby = INJURIES;
    //traer data de injuries del año
    //  console.log(injuriesby[1].Year);

    const yearFound = injuriesby.find(element => element.Year === yearValue);
    

    for (const key in yearFound) {
      if (yearFound.hasOwnProperty(key)) {
        const element = yearFound[key];
        if (key == userValue) {
          console.log(element)
        }
      }
    }
   
    
    //let result = found.Total_Injured_Persons;
    //console.log(result);

  }
};
