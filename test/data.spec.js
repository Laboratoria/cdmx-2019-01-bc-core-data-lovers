require ('../src/data.js');


describe('window.WorldBank deberia ser un objeto', () => {
  it('is a object', () => {
    expect(window.WorldBank).toBe('object');
  });
});

//hasta aqui todo bien
describe('filterCountry es una función', () => {
  it('is a function', () => {
    expect(window.WorldBank.filterCountry).toBe('function');
  })
});
