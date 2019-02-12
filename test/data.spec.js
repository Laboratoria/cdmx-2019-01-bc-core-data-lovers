require('../src/data.js');


describe('showme', () => {
  it('is a function', () => {
    expect(typeof showme).toBe('showme');
  });
  

  it('returns `showme`', () => {
    expect(showme()).toBe('showme');
  });
});