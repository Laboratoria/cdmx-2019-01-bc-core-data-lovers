require('../src/data.js');
//require('../src/pokemon.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//    expect(example()).toBe('example');
//   });
// });
 
describe('pokesaurius', () => {

  it('debería ser un objeto', () => {
    expect(typeof pokesaurius).toBe('object');
  });
});

  describe('pokesaurius.typeFilter', () => {

    it('debería ser una función', () => {
      expect(typeof window.pokesaurius.typeFilter).toBe('function');
    });
  });
