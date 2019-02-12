global.window=global;
 require('../src/data.js');
require('../src/data/pokemon/pokemon');

describe("data", () => {
  it('is a function', () => {
    expect(typeof window.data).toBe("object");
  });
  

  it('returns filterData', () => {
   
  });
});