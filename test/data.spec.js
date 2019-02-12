require ('../src/data.js');


describe('window.WorldBank deberia ser un objeto', () => {
  it('is a object', () => {
    expect(window.WorldBank).toBe('object');
  });
});