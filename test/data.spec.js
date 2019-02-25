require('../src/data.js');

const database = {
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
      }]
  }
};


const dataFilter = {
  "MEX": {
    "indicators": [
      {
        "data": {1960: "", 1961: "", 1962: "", 1963: "", 1964: "", 1965: "", 1966: "", 1967: "", 1968: "", 1969: "", 1970: "", 1971: 0.940060019493103, 1972: 0.910300016403198, 1973: "", 1974: 0.941980004310608, 1975: 0.926649987697601, 1976: 0.927869975566864, 1977: 0.958289980888367, 1978: 0.946680009365082, 1979: 0.973190009593964, 1980: 0.986440002918243, 1981: 0.977419972419739, 1982: 0.976310014724731, 1983: 0.960039973258972, 1984: 0.962130010128021, 1985: 0.972649991512299, 1986: 0.973439991474152, 1987: 0.97146999835968, 1988: 0.968739986419678, 1989: 0.968559980392456, 1990: 0.961399972438812, 1991: 0.96875, 1992: 0.969799995422363, 1993: 0.970939993858337, 1994: 0.967109978199005, 1995: 0.971340000629425, 1996: 0.971390008926392, 1997: 0.974449992179871, 1998: 0.978309988975525, 1999: 0.982140004634857, 2000: 0.98540997505188, 2001: 0.98650997877121, 2002: 0.98675000667572, 2003: 0.985859990119934, 2004: 0.985040009021759, 2005: 0.981620013713837, 2006: 0.97979998588562, 2007: 0.979659974575043, 2008: 0.98105001449585, 2009: 0.985059976577759, 2010: 0.991219997406006, 2011: 0.997300028800964, 2012: 1.00309002399445, 2013: 1.00528001785278, 2014: 1.00650000572205, 2015: 1.0064799785614, 2016: 1.00555002689362, 2017: ""},
        "countryName": "México",
        "countryCode": "MEX",
        "indicatorName": "Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)",
        "indicatorCode": "SE.TER.TCHR.FE.ZS"
      }]
  }
};

const objOrder = {
 1970: 44.0310401916504, 
 1971: 44.100040435791, 
 1972: 44.1003684997559, 
 1973: 44.0998191833496, 
 1974: 44.1655693054199, 
 1975: 42.7002105712891, 
 1976: 42.6476783752441, 
 1977: 45.9697914123535, 
 1978: 44.635799407959, 
 1979: 60.2808113098145, 
 1980: 40.128101348877, 
 2003: 70.5823211669922, 
 2004: 67.7231674194336, 
 2005: 70.2429962158203, 
 2006: 66.9079132080078, 
 2007: 64.5308380126953, 
 2008: 66.247428894043, 
 2009: 59.7417793273926, 
 2010: 56.0594482421875, 
 2011: 48.3022918701172, 
 2012: 48.9602317810059, 
 2013: 48.9428482055664, 
 2014: 54.0125694274902, 
 2015: 56.7083587646484, 
 2016: 54.6560211181641};

const newArrResultYear= [
["2003", 70.5823211669922],
["2005", 70.2429962158203],
["2004", 67.7231674194336],
["2006", 66.9079132080078],
["2008", 66.247428894043],
["2007", 64.5308380126953],
["1979", 60.2808113098145],
["2009", 59.7417793273926],
["2015", 56.7083587646484],
["2010", 56.0594482421875],
["2016", 54.6560211181641],
["2014", 54.0125694274902],
["2012", 48.9602317810059],
["2013", 48.9428482055664],
["2011", 48.3022918701172],
["1977", 45.9697914123535],
["1978", 44.635799407959],
["1974", 44.1655693054199],
["1972", 44.1003684997559],
["1971", 44.100040435791],
["1973", 44.0998191833496],
["1970", 44.0310401916504],
["1975", 42.7002105712891],
["1976", 42.6476783752441],
["1980", 40.128101348877]];

const sortAscend = [
["1980", 40.128101348877],
["1976", 42.6476783752441],
["1975", 42.7002105712891],
["1970", 44.0310401916504],
["1973", 44.0998191833496],
["1971", 44.100040435791],
["1972", 44.1003684997559],
["1974", 44.1655693054199],
["1978", 44.635799407959],
["1977", 45.9697914123535],
["2011", 48.3022918701172],
["2013", 48.9428482055664],
["2012", 48.9602317810059],
["2014", 54.0125694274902],
["2016", 54.6560211181641],
["2010", 56.0594482421875],
["2015", 56.7083587646484],
["2009", 59.7417793273926],
["1979", 60.2808113098145],
["2007", 64.5308380126953],
["2008", 66.247428894043],
["2006", 66.9079132080078],
["2004", 67.7231674194336],
["2005", 70.2429962158203],
["2003", 70.5823211669922]];


//Test para la función de filtrar por países
describe('WorldBank', () => {
  it('WorldBank is an object', () => {
    expect(typeof window.WorldBank).toBe('object');
  });

  it('WorldBank.dataCountries is a function', () => {
    expect(typeof window.WorldBank.dataCountries).toBe('function');
  })

  it('Debe retornar un array de objetos', () => {
    expect(window.WorldBank.dataCountries(database, 'MEX')).toEqual(database.MEX.indicators);
  })
});

//Test para la función de filtrar por indicador "educación"
it('PercentAndYear is a function', () => {
  expect(typeof window.WorldBank.percentAndYear).toBe('function');
})
it('Debe retornar un objeto', () => {
  expect(window.WorldBank.percentAndYear(dataFilter, 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')).toEqual(dataFilter.MEX.indicators[0].data)
});
/*it('Debe retornar un objeto', () => {
  expect(window.WorldBank.percentAndYear(dataFilter.forEach(objeto => {
    if( objeto.indicatorName === 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')
    return objeto.data})).toEqual(dataFilter.MEX.indicators[0].data)
  )
});*/

//Test para funciónde ordenar
it('SortPercentAndYear is a function', () => {
  expect(typeof window.WorldBank.sortPercentAndYear).toBe('function');
});
it('Debe retornar un array ordenado ascendente', () => {
  expect(window.WorldBank.sortPercentAndYear(objOrder,'ascend')).toEqual(sortAscend)
});
it('Debe retornar un array ordenado de forma descendente', () => {
  expect(window.WorldBank.sortPercentAndYear(objOrder, 'descend')).toEqual(newArrResultYear)
});

