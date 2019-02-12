const getData = require('../src/data.js');

describe('getData', () => {
  it('is a object', () => {
    expect(typeof getData).toBe('object');
  });

  describe('data.getData', () => {
    it('is a function',() => {
      expect(typeof window.data.getData).toBe('function');
    });
  });

   it('should return Year', () => {
    expect(window.data.getData('Total_Injured_Persons_Pedestrians')['0']).toEqual('2001');
   });
});
