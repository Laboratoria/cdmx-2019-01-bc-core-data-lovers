window.data = {
  
  consult: (yearValue, userValue) => {
const injuriesby = INJURIES;
    //traer data de injuries del año
  //  console.log(injuriesby[1].Year);

    let found = injuriesby.find(element => element.Year === yearValue);
let result = found.Total_Injured_Persons;
console.log(result);

  }
};

