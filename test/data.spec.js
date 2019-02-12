
require ('../src/data');
describe ('es un Objeto llamado WorldBank', () => {
  it ('is an object', () => { 
expect(typeof window.worldBank).toBe('object');
  });
});

describe('es una función llamada filtroPaís', () => {
  it('is a function', () => {
    expect(typeof window.worldBank.filtroPais).toBe('function');
  });

  //it('returns `example`', () => {
    //expect(example()).toBe('example');
  //});
});
describe ('es una función llamada OrderByAsc', () => {
  it ('is a function', () => { 
expect(typeof window.worldBank.orderByAsc).toBe('function');
  });
});
describe('es una función llamada filtroPaís', () => {
  it('is a function', () => {
    expect(typeof window.worldBank.filtroPais).toBe('function');
  });

 
});

/*

describe('filtroPais', () => {
  it('is a function', () => {
    expect(typeof filtroPais).toBe('function');
  });

  it('returns `filtroPais`', () => {
    expect(filtroPais()).toBe('filtroPais');
  });
});
import '/src/data.js'

describe('filtroPais', () => {
  test('llama a la data de Mex', () => {
    const nomIndicator = jest.fn();
    filtroPais(nomIndicator, 'MEX', );
    expect(nomIndicator).toHaveBeenCalled();
  });
});
const orderByObject = require('./data');
test('la lista contiene el año 2016', () => {
  expect(orderByObject()).toContain('2016');
});*/