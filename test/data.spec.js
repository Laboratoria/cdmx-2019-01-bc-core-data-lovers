require('../src/data.js');


describe('buscar', () => {
  it('is a function', () => {
    expect(typeof buscar).toBe('function');
  });

  it('returns `buscar`', () => {
    expect(buscar()).toBe('buscar');
  });
});
