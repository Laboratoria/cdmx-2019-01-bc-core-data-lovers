global.window=global;
const {filterData} = require('../src/data.js');
const dataPokemon = require('../src/data/pokemon/pokemon');

describe("filterData", () => {
  it('is a function', () => {
    expect(typeof filterData).toBe("function");
  });

  it('returns filterData', () => {
    expect(filterData(dataPokemon, ['Ghost']).length).toBe(3);
  });
});