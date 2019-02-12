require('../src/data.js');

describe('data', () => {
  it('is a object', () => {
    expect(typeof window.data).toBe('object');
  });
});

describe('filterPokemon', () => {
  it('is a function', () => {
    expect(typeof window.data.filterPokemon).toBe('function');
  });
});


