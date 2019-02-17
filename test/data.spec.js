/*require('../src/data.js');

var WORLDBANK = {
  "MEX": {
    "indicators": [
      {
        "data": {
          "1960": "",
          "1961": "",
          "1962": "",
          "1963": "",
          "1964": "",
          "1965": "",
          "1966": "",
          "1967": "",
          "1968": "",
          "1969": "",
          "1970": "",
          "1971": "",
          "1972": "",
          "1973": "",
          "1974": "",
          "1975": "",
          "1976": "",
          "1977": "",
          "1978": "",
          "1979": "",
          "1980": "",
          "1981": "",
          "1982": "",
          "1983": "",
          "1984": "",
          "1985": "",
          "1986": "",
          "1987": "",
          "1988": "",
          "1989": "",
          "1990": "",
          "1991": "",
          "1992": "",
          "1993": "",
          "1994": "",
          "1995": "",
          "1996": "",
          "1997": "",
          "1998": "",
          "1999": "",
          "2000": "",
          "2001": "",
          "2002": "",
          "2003": "",
          "2004": "",
          "2005": "",
          "2006": "",
          "2007": "",
          "2008": "",
          "2009": "",
          "2010": "",
          "2011": "",
          "2012": "",
          "2013": "",
          "2014": "",
          "2015": "",
          "2016": "",
          "2017": ""
        },
        "countryName": "México",
        "countryCode": "MEX",
        "indicatorName": "Educacin terciaria, profesores (% de mujeres)",
        "indicatorCode": "SE.TER.TCHR.FE.ZS"
      },
    ],
  }
};

//const dataWorldBankTest = WORLDBANK.MEX.indicators;



describe('WorldBank', () => {
  it('WorldBank is an object', () => {
    expect(typeof window.WorldBank).toBe('object');
  });

  it('WorldBank.dataCountries is a function', () => {
    expect(typeof window.WorldBank.dataCountries).toBe('function');*/



let dataCountries = require('../src/data.js');
let data = require('../src/data.js');
let countries = require('../src/data.js');

describe('WorldBank.dataCountries', () => {
  it('is a function', () => {
    expect(typeof Array).toBe('{[]}');
  });

  it('returns `dataByCountries`', ([]) => {
    expect(data[countries].indicators).toBe('dataByCountries');
  });

  it('Debería retornar un array de objetos', () => {
    expect(window.WorldBank.dataCountries).toEqual(WORLDBANK.MEX)
  })
});







