require ('../src/data.js');


describe('window.WorldBank deberia ser un objeto', () => {
  it('is a object', () => {
    expect(typeof WorldBank).toBe('object');
  });
});

//hasta aqui todo bien
describe('WorldBank should be a function', () => {
  it('is a function', () => {
    expect(typeof window.WorldBank.filterCountry).toBe('function');
  })
});
