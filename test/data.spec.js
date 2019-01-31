require('../src/data.js');


describe('filter', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `filter`', () => {
    expect(filterTheme()).toBe('filter');
  });
});



