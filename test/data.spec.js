require('../src/data.js');


describe("WorldBank", () => {
  it("WorldBank is a object", () => {
    expect(typeof window.WorldBank).toBe("object");
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

/*describe ("filter", ()=>{
it ("is a function", () =>{
  expect (typeof example).toBe("function");
});

})*/



