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