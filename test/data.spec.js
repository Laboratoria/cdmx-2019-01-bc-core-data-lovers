require('../src/data.js');



describe('iterarData', ()=>{
  it('is a function',() => {
    expect(typeof window.lol.iterarData).toBe('function');
  
 
 });
 
 });


describe('filtroDataRoles', ()=>{
  it('is a function',() => {
    expect(typeof window.lol.filtroDataRoles).toBe('function');
  });


    it('Deberia devolver el obj Alistar si es igual a Tank',()=>{
      expect(window.lol.filtroDataRoles('Tank',window.lol.dataToArray )).toEqual(window.dataToArray.Alistar.tags[0])
    })
 });




describe('filterByName', ()=>{
 it('is a function',() => {
   expect(typeof window.lol.filterByName).toBe('function');
});

})


