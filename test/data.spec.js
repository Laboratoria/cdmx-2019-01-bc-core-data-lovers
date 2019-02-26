require('../src/data.js');
require('../src/data/worldbank/worldbank.js');
//require('../src/main.js');


const indicators = [{
    name: "Desempleo total",
    peru: {},
    mexico: {},
    chile: {},
    brasil: {}
  },
  {
    name: "Desempleo mujeres",
    peru: {},
    chile: {},
    mexico: {},
    brasil: {}
  },
  {
    name: "Desempleo hombres",
    peru: {},
    chile: {},
    mexico: {},
    brasil: {}
  }
];

describe('filter', () => {
  it('Is a function', () => {
    expect(typeof window.data.filter).toBe('function');
  });

  it('It should return the Desempleo total object', () => {});
  expect(window.data.filter(indicators, 'Desempleo total')).toEqual({
    name: "Desempleo total",
    peru: {},
    mexico: {},
    chile: {},
    brasil: {}
  });
});

const sortingObject = ["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];

describe('sort', () => {
  it('Is a function', () => {
    expect(typeof window.data.sort).toBe('function');
  });
  it('It should return an array with the downward order of the years in the object data', () => {});
  expect(window.data.sort(sortingObject, 'downward')).toEqual(["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960"]);

  it('It should return an array with the upward order of the years in the object data', () => {});
  expect(window.data.sort(sortingObject, 'upward')).toEqual(["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]);
});

const values= [17, 22, 33, 35, 31, 34, 23, 34, 35, 35, 35, 37, 35, 36, 37, 36, 36, 34, 33, 32, 33, 34, 34, 35, 34, 33, 33, 33, 33, 33, 31, 31, 31, 30];
describe('average', ()=>{
  it('Is a function', ()=>{
    expect(typeof window.data.average).toBe('function');
  });
  it('It should return the average of the array', ()=>{});
  expect(window.data.average(values)).toEqual(32.588235294117645)
});
