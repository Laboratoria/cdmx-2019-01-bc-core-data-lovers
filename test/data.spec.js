require('../src/data.js');
require('../src/data/worldbank/worldbank.js');
//require('../src/main.js');


const indicators= [{
  name: "Desempleo total",
  peru: {},
  mexico: {},
  chile: {},
  brasil: {}
},
{
  name: "Desempleo mujeres",
  peru: {},
  chile: {},
  mexico: {},
  brasil: {}
},
{
  name: "Desempleo hombres",
  peru: {},
  chile: {},
  mexico: {},
  brasil: {}
}];

describe('filter', () => {
  it('Is a function', () => {
    expect(typeof window.data.filter).toBe('function');
  });

  it('It should return the Desempleo total object', () => {
  });
  expect(window.data.filter(indicators,'Desempleo total')).toEqual(
    {
      name: "Desempleo total",
      peru: {},
      mexico: {},
      chile: {},
      brasil: {}
    });
});

describe('sort', ()=>{
  it('Is a function', ()=>{
    expect(typeof window.data.sort).toBe('function');
  });
  it('It should return the upward order of the years in the object', ()=>{
    expect(window.data.sort();
  })
})
