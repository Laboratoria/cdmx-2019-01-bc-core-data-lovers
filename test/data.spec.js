require('../src/data.js');


describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
