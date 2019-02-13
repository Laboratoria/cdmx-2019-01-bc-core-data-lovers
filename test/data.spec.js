require('../src/data.js');
 
describe ('filterData', () => {
  it('is a function', () =>{
    expect(typeof window.data.filterData).toBe('function');
  });
})

describe ('sortData', () =>{
  it('is a function', ()=>{
    expect(typeof window.data.sortData).toBe('function');
  });
  })

describe ('computeStats', () => {
  it('is a function',() =>{
    expect (typeof window.data.computeStats).toBe('function');
  });
})


