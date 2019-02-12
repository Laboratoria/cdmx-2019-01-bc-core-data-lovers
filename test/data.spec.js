require('../src/data.js');
/*const dataEstudent = [
  {
    nombre:'Silvana',
    edad:'32',
    altura:'1.69'
  },
  {
    nombre:'Jonh',
    edad:'33',
    altura:'1.80'
  },
  {
    nombre:'Mike',
    edad:'30',
    altura:'1.70'
  },
  {
    nombre:'Dení',
    edad:'35',
    altura:'1.50'
  },
]

/*
describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/

const dataPokemonTest = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
} ]; 

describe ('data', () => {
  test('debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

  describe ('showAllData', () => {
    
    test('debería ser una función', () => {
      expect (typeof window.data.showAllData).toBe('function');
    });

    const processedData = window.data.showAllData(dataPokemonTest);
    test('deberia retornar un arreglo con todos los pokémones', () => {
      expect(processedData).toHaveLength(4);
    });
  }); 

  describe ('filterByType', () => {
    test('debería ser una funcion', ()=>{
      expect(typeof window.data.filterByType).toBe('function');
    });

    test('debería regresar un arreglo con los pokémones que correspondan con el tipo Poison', () => {
      const processedDataFilter = window.data.filterByType(dataPokemonTest, 'Poison');
      processedDataFilter.forEach(element => {
        expect (element.type).toEqual(expect.arrayContaining(['Poison']));

      });
    });

  });

  describe('filterByLetter',() => { 
    const processedFilterLetter = window.data.filterByLetter (dataPokemonTest, 'C');
  
    test('debería ser una funcion', () => {
      expect(typeof window.data.filterByLetter).toBe('function');
    });
  
    test('debería regresar un arreglo con los pokémones cuyo nombre coincidan con la C', () => {
      processedFilterLetter.forEach(element => {
        expect(element.name).toMatch('C');
      });
    });

    test('debería regresar un arreglo con el pokémon cuyo nombre coincidan con Ivysaur', () => {
      window.data.filterByLetter(dataPokemonTest, 'Ivysaur').forEach(element => {
        expect(element.name).toMatch('Ivysaur');
      });
    });
  
  });
  
  describe('sortData',() => {
    test('debería ser una funcion', () => {
      expect(typeof window.data.sortData).toBe('function');
    });
  });

  describe('computeStats', () => {
    test('debería ser una funcion', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });
    test('debería regresar el valor mínimo para candy_count', () => {
      expect(window.data.computeStats(dataPokemonTest)).toBe(25);
    });
    test('debería regresar el valor máximo para candy_count', () => {
      expect(window.data.computeStats(dataPokemonTest)).toBe(100);
    });
  });


});



/*
  describe('filterByType',() => {
  const processedFilterType = window.filterByType (dataPokemonTest, 'Grass');
  //const expected = ['Grass'];
    test('debería ser una funcion', ()=>{
      expect(typeof filterByType).toBe('function');
    });
  
    test('debería regresar un arreglo con los pokemones coincidan el tipo Fire', ()=>{
      processedFilterType.forEach((elemento) => {
  
        elemento.type.forEach((elementType) => {
          expect(elementType).toContain('Grass');
        })
      })
  
    });
  
  });  */  



/*

describe('filterByLetter',() => { 
  const processedFilterLetter = window.filterByLetter (dataPokemonTest, 'C');

  test('debería ser una funcion', ()=>{
    expect(typeof filterByLetter).toBe('function');
  });

  test('debería regresar un arreglo con los pokemones cuyo nombre coincidan con la C', ()=>{
    expect(processedFilterLetter[0].name).toBe('Charmander');
  });

});

describe('sortData',() => {
  //const processedDescName = window.sortData(dataPokemonTest, 'name', 'desc' );
  //const processedDescHeight = window.sortData (dataPokemonTest, 'height', 'desc');
  //const processedDescWeight = window.sortData (dataPokemonTest, 'weight', 'desc'); 
  test('debería ser una funcion', ()=>{
    expect(typeof sortData).toBe('function');
  });

  describe("Sort by Name", () => {
    const processedAscName = window.sortDataNew(dataPokemonTest, 'name', 'asc');
    
    test('debería retornar una arreglo ordenado de forma ascendente por nombre', ()=>{
      console.log(processedAscName)
      expect(processedAscName[0].name).toBe('Bulbasaur');
      expect(processedAscName[3].name).toBe('Venusaur');
    }); 
    
    /*test('debería retornar un arreglo ordenado de forma descendente por nombre', ()=>{
    expect(processedDescName[0].name).toBe('Venusaur');
    expect(processedDescName[3].name).toBe('Bulbasaur');
  });
  });

  describe("Sort by Height", () => {
    const processedAscHeight = window.sortDataNew(dataPokemonTest, 'height', 'asc');
    
    test('debería retornar un arreglo ordenado de forma ascendente por altura', ()=>{
      console.log(processedAscHeight);
      expect(processedAscHeight[0].height).toBe('0.61 m');
      expect(processedAscHeight[3].height).toBe('2.01 m');
    });
       
    /*test('debería retornar un arreglo ordenado de forma descendente por altura', ()=>{
      expect(processedDescHeight[0].height).toBe('2.01 m');
      expect(processedDescHeight[3].height).toBe('0.61 m');
    });
  });

  describe("Sort by Weight", () => {
    const processedAscWeight = window.sortDataNew(dataPokemonTest, 'weight', 'asc');
    
    test('debería retornar una arreglo ordenado de forma ascendente por peso', ()=>{
      console.log(processedAscWeight);

      expect(processedAscWeight[0].weight).toBe('6.9 kg');
      expect(processedAscWeight[3].weight).toBe('100.0 kg');
    });
    
    /*test('debería retornar una arreglo ordenado de forma descendente por peso', ()=>{
      expect(processedDescWeight[0].weight).toBe('100.0 kg');
      expect(processedDescWeight[3].weight).toBe('6.9 kg');
    });
  }); 
});
*/