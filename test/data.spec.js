require('../src/data.js');
require('../src/data/injuries/injuries.js');

describe('DATA', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('CONSULT', () => {
    it('Debería ser una funcion', () => {
      expect(typeof window.data.consult).toBe('function');
    });
    it('Debería devolver el año 2015 y 2443175, al elegir 2015 y TODOS', () =>{
      expect(window.data.consult(window.INJURIES,"2015-01-04","Total_Injured_Persons")).toEqual(["2015", 2443175])
    });
    it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () =>{
      expect(window.data.consult(window.INJURIES,"2001-01-04","Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
    });
  });

describe('ORDER', () => {
   it('Debería ser una funcion', () => {
    expect(typeof window.data.order).toBe('function');
   });
   it('Debería devolver el año 2010 y 82000,52000,70000,25222,  al elegir 2010 y TODOS LOS HERIDOS', () =>{
     expect(window.data.order(window.INJURIES,"2010-01-04","all")).toEqual(["2010", 82000,52000,70000,25222])
   });
   it('Debería devolver el año 2015 y 88000,45000,70000,24252,  al elegir 2015 y TODOS LOS HERIDOS', () =>{
     expect(window.data.order(window.INJURIES,"2015-01-04","all")).toEqual(["2015", 88000,45000,70000,24252])
   });
   });


//   it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () =>{
//     expect(window.data.consult(window.INJURIES,"2001-01-04","Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
//   });
// });
