require('../src/data.js');



describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  )};

describe('showme', () => {
  it('is a function', () => {
    expect(typeof showme).toBe('showme');
  });

  it('returns `showme`', () => {
    expect(showme()).toBe('showme');
  });
});

