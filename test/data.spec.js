require ('../src/data');
const baseDatos={"MEX": {
  "indicators": [
    {
     "data": {
            "1960": 0.477000990365496,
            "1961": 0.500530703391948,
            "1962": 0.517743351560372,
            "1963": 0.529013236809819,
            "1964": 0.535453494954306,
            "1965": 0.53799863043845,
            "1966": 0.557730362828123,
            "1967": 0.572858329436388,
            "1968": 0.583214916183584,
            "1969": 0.588280254051365,
            "1970": 0.58821822058975,
            "1971": 0.606953515758334,
            "1972": 0.619562466417442,
            "1973": 0.627323944446844,
            "1974": 0.632544633600884,
            "1975": 0.636904556870847,
            "1976": 0.660818824677235,
            "1977": 0.68238324581952,
            "1978": 0.701399974977085,
            "1979": 0.717583641305361,
            "1980": 0.731158037387352,
            "1981": 0.765851370911571,
            "1982": 0.795263754231047,
            "1983": 0.818878441055679,
            "1984": 0.836504158242404,
            "1985": 0.8487710914887,
            "1986": 0.876477393600115,
            "1987": 0.897210553230549,
            "1988": 0.913344236320798,
            "1989": 0.927416609226621,
            "1990": 0.940933801659178,
            "1991": 0.971415045053082,
            "1992": 0.99939200954129,
            "1993": 1.02232681754758,
            "1994": 1.03709713905929,
            "1995": 1.04353971808075,
            "1996": 1.06432965318294,
            "1997": 1.07603370457936,
            "1998": 1.08405487751152,
            "1999": 1.09487292291743,
            "2000": 1.11202520107766,
            "2001": 1.15510281680918,
            "2002": 1.19833794343877,
            "2003": 1.24074243970418,
            "2004": 1.280688472261,
            "2005": 1.31787479191798,
            "2006": 1.38231016396952,
            "2007": 1.44042995816282,
            "2008": 1.49262000968598,
            "2009": 1.54039247412813,
            "2010": 1.58559498004968,
            "2011": 1.64341352297498,
            "2012": 1.69554115400294,
            "2013": 1.74114362209355,
            "2014": 1.77801699089274,
            "2015": 1.80619548971902,
            "2016": 1.84208290833137,
            "2017": 1.86760083613396
          },
          "countryName": "México",
          "countryCode": "MEX",
          "indicatorName": "Población de 80 años en adelante, mujeres (% de la población femenina)",
          "indicatorCode": "SP.POP.80UP.FE.5Y"
        }]

        }
      }
describe ('es un Objeto llamado WorldBank', () => {
  it ('is an object', () => { 
expect(typeof window.worldBank).toBe('object');
  });
});

describe('es una función llamada filtroPaís', () => {
  it('is a function', () => {
    expect(typeof window.worldBank.filtroPais).toBe('function');
  });

it('regresa data', () => {
  expect(window.worldBank.filtroPais(baseDatos, 'MEX','Población de 80 años en adelante, mujeres (% de la población femenina)')).toEqual(baseDatos.MEX.indicators[0].data)
   
  });
  });

  //it('returns `enviaIndicador`', () => {
    //expect(window.worldBank.filtroPais()).toBe('EnviaIndicador');
  //});

describe ('es una función llamada OrderByAsc', () => {
  it ('is a function', () => { 
expect(typeof window.worldBank.orderByAsc).toBe('function');
  });
});


 


/*

describe('filtroPais', () => {
  it('is a function', () => {
    expect(typeof filtroPais).toBe('function');
  });

  it('denería devolver el objeto de juana cuando ingresamos j', () => {
    expect(filter.dataStudents()).toBe('filtroPais');
  });
});
import '/src/data.js'

describe('filtroPais', () => {
  test('llama a la data de Mex', () => {
    const nomIndicator = jest.fn();
    filtroPais(nomIndicator, 'MEX', );
    expect(nomIndicator).toHaveBeenCalled();
  });
});
const orderByObject = require('./data');
test('la lista contiene el año 2016', () => {
  expect(orderByObject()).toContain('2016');
});*/
