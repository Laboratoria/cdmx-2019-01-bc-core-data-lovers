let dataCountries = require('../src/data.js');
let data = require('../src/data.js');
let countries = require('../src/data.js');
describe('WorldBank.dataCountries', () => {
  it('is a function', () => {
    expect(typeof Array).toBe('{[]}');
  });

  it('returns `dataByCountries`', ([]) => {
    expect(data[countries].indicators).toBe('dataByCountries');
  });
});
