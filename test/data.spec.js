require('../src/data.js');
const newArrayInfo = window.lol.showData;

describe('window.lol', () => {
  it('is an object', () => {
    expect(typeof window.lol).toBe('object');
  });
});

//Test de la función para filtrar por rol
describe('filterByRol', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterByRol).toBe('function');
  });
  it('Should returns the object Aatrox if we select Tank', () => {
    expect(window.lol.filterByRol(newArrayInfo, 'Tank')[0].toEqual(window.LOL.data.Aatrox.tags[1]));
  });
});

// Test de la función para ordenar por ataque
describe('sorterByAttack', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByAttack).toBe('function');
  });
});

// Test de la función para ordenar por magia
describe('sorterByMagic', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByMagic).toBe('function');
  });
});

// Test de la función para ordenar por defensa
describe('sorterByDefense', () => {
  it('is a function', () => {
    expect(typeof window.lol.sorterByDefense).toBe('function');
  });
});

// Test de la función para buscar por nombre
describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterByName).toBe('function');
  });
});
