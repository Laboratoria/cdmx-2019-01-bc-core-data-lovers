require('../src/data.js');
//const dataFile ={

//}


describe("WorldBank", () => {
  it("WorldBank is a object", () => {
    expect(typeof window.WorldBank).toBe("object");
  });

  it("WorldBank.dataCountries is a function", () => {
    expect(typeof window.WorldBank.dataCountries).toBe("function");
  });
});

  //it('returns `example`', () => {
    //expect(example()).toBe('example');
  //});
//});

/*describe ("filter", ()=>{
it ("is a function", () =>{
  expect (typeof example).toBe("function");
});

})*/



