window.data = {

  consult: (yearValue, userValue) => {
const injuriesby = INJURIES;
    //traer data de injuries del año
  //  console.log(injuriesby[1].Year);

    let found = injuriesby.find(element => element.Year === yearValue);
let result = found.Total_Injured_Persons;
console.log(result);

// const obj = found.map(found => `${found.Year}`);
// console.log(obj);

//   let total = element.Total_Injured_Persons;
//       let moto = element.Total_Injured_Persons_Motorcyclists;
//       let bike = element.Total_Injured_Persons_Pedalcyclists;
//       let walk = element.Total_Injured_Persons_Pedestrians;
//      let transit = element.Total_Injured_Persons_Transit_Total;

}



};

//
//       let year = element.Year;
//      //console.log(Object.keys(element));
//     //  console.log(year);
//       let total = element.Total_Injured_Persons;
//       let moto = element.Total_Injured_Persons_Motorcyclists;
//       let bike = element.Total_Injured_Persons_Pedalcyclists;
//       let walk = element.Total_Injured_Persons_Pedestrians;
//       let transit = element.Total_Injured_Persons_Transit_Total;
//       if (year === yearValue && userValue === moto
//         || userValue === bike || userValue === walk || userValue === transit ||
//         userValue === total) {
//       };
// //console.log(yearValue, userValue);
//};
// //console.log(yearValue, userValue);
 //}
//


//Le digo qué quiero que imprima. Deben ir en orden.
//  printpage(year, total, moto, bike, walk, transit)
//ConsoleLog si muestra todos los elementos console.log(total)
