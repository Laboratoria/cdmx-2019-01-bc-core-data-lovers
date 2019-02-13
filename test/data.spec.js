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

// describe('SORT', () => {
//   it('Debería ser una funcion', () => {
//     expect(typeof window.data.consult).toBe('function');
//   });
//   it('Debería devolver el año 2015 y 2443175, al elegir 2015 y TODOS', () =>{
//     expect(window.data.consult(window.INJURIES,"2015-01-04","Total_Injured_Persons")).toEqual(["2015", 2443175])
//   });
//   it('Debería devolver el año 2001 y 60236, al elegir 2001 y MOTOCICLISTAS', () =>{
//     expect(window.data.consult(window.INJURIES,"2001-01-04","Total_Injured_Persons_Motorcyclists")).toEqual(["2001", 60236])
//   });
// });
