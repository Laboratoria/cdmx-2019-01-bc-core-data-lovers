require('../src/data.js');
require('../src/data/worldbank/worldbank.js')

describe('window.WorldBank deberia ser un objeto', () => {
 it('is a object', () => {
   expect(typeof WorldBank).toBe('object');
 });
});
//hasta aqui todo bien
describe('filterCountry, encargado de filtrar', () => {
 const result = { 1960: "", 1961: "", 1962: "", 1963: "", 1964: "", 1965: "", 1966: "", 1967: "", 1968: "", 1969: "", 1970: "", 1971: "", 1972: "", 1973: "", 1974: "", 1975: "", 1976: "", 1977: "", 1978: "", 1979: "", 1980: "", 1981: "", 1982: "", 1983: "", 1984: "", 1985: "", 1986: "", 1987: "", 1988: "", 1989: "", 1990: 33.1, 1991: 31.8, 1992: 30.6, 1993: 29.4, 1994: 28.4, 1995: 27.5, 1996: 26.7, 1997: 25.9, 1998: 25.1, 1999: 24.3, 2000: 23.6, 2001: 22.9, 2002: 22.2, 2003: 21.5, 2004: 20.8, 2005: 20, 2006: 19.2, 2007: 18.2, 2008: 17.3, 2009: 16.4, 2010: 15.6, 2011: 14.9, 2012: 14.5, 2013: 14.2, 2014: 14, 2015: 14.1, 2016: 14.4, 2017: "" };
 it('is a function', () => {
   expect(typeof window.WorldBank.filterCountry).toBe('function');
 })
 it('Deberia devolver un arreglo de años que corresponde a result', () => {
   expect(window.WorldBank.filterCountry(window.WORLDBANK, "MEX", "SH.ANM.NPRG.ZS")).toEqual(result);
 })
});

describe('orderData', function () {
  it('is a function', () => {
    expect(typeof window.WorldBank.orderData).toBe('function');
  });

  const data = { 1960: "", 1961: "", 1962: "", 1963: "", 1964: "", 1965: "", 1966: "", 1967: "", 1968: "", 1969: "", 1970: "", 1971: "", 1972: "", 1973: "", 1974: "", 1975: "", 1976: "", 1977: "", 1978: "", 1979: "", 1980: "", 1981: "", 1982: "", 1983: "", 1984: "", 1985: "", 1986: "", 1987: "", 1988: "", 1989: "", 1990: 33.1, 1991: 31.8, 1992: 30.6, 1993: 29.4, 1994: 28.4, 1995: 27.5, 1996: 26.7, 1997: 25.9, 1998: 25.1, 1999: 24.3, 2000: 23.6, 2001: 22.9, 2002: 22.2, 2003: 21.5, 2004: 20.8, 2005: 20, 2006: 19.2, 2007: 18.2, 2008: 17.3, 2009: 16.4, 2010: 15.6, 2011: 14.9, 2012: 14.5, 2013: 14.2, 2014: 14, 2015: 14.1, 2016: 14.4, 2017: "" };

  it('Deberia de retornar un arreglo de orderDataYear de años ordenado de forma ascentente si le mando "asc" para Mexico, Chile, Peru, Brasil', () => {
    expect(window.WorldBank.orderData(data, "years", "asc")[0]).toEqual('1960');
  });
  it('Deberia de retornar un arreglo de orderDataYear de años ordenado de forma descentente si le mando "desc" para Mexico, Chile, Peru, Brasil', () => {
    expect(window.WorldBank.orderData(data, "years", "desc")[0]).toEqual('2017');
  });
  it('Deberia de retornar un arreglo de orderDataYear de la propiedad años ordenado de forma ascentente si le mando "asc" para Mexico, Chile, Peru, Brasil', () => {
    expect(window.WorldBank.orderData(data, "values", "asc")[0]).toEqual("1989","");
  });
  it('Deberia de retornar un arreglo de orderDataYear de la propiedad años ordenado de forma descentente si le mando "desc" para Mexico, Chile, Peru, Brasil', () => {
    expect(window.WorldBank.orderData(data, "values", "desc")[0]).toEqual("1990","33.1");
  });
})

describe('getMathMedia es  una funcion que obtiene la media de los porcentajes', ()=>{
  it('es una funcion', ()=>{
    expect(typeof window.WorldBank.getMathMedia).toBe('function');
  });
  it('para los datos [10, 50.5, 10.777, 23.923, 33.0345] deberia devolver 25.6469', ()=>{
    const dataPrueba = [10, 50.5, 10.777, 23.923, 33.0345];
    expect(window.WorldBank.getMathMedia(dataPrueba)).toBe(25.6469);
  });
  it('para los datos [1, 2, 3, 4] deberia devolver 2.5', ()=>{
    const dataPrueba = [1,2,3,4];
    expect(window.WorldBank.getMathMedia(dataPrueba)).toBe(2.5);
  });
  it('para los datos [1, 2, 3, ""] deberia devolver 2', ()=>{
    const dataPrueba = [1, 2, 3, ""];
    expect(window.WorldBank.getMathMedia(dataPrueba)).toBe(2);
  })
})