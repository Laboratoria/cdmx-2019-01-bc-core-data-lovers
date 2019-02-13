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
  it('is a function', () => {
    expect(typeof window.data.filter).toBe('function');
  });

  it('Debería devolver el obj de Desempleo total', () => {
  });
  expect(window.data.filter(indicators,'Desempleo total')).toEqual(
    {
      name: "Desempleo total",
      peru: {},
      mexico: {},
      chile: {},
      brasil: {}
    });
})
