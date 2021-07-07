require('../src/data.js');

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
}];

//Tests for all data
describe('data', () => {

  test('debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });

  describe('showAllData', () => {

    test('debería ser una función', () => {
      expect(typeof window.data.showAllData).toBe('function');
    });

    const processedData = window.data.showAllData(dataPokemonTest);
    test('deberia retornar un arreglo con todos los pokémones', () => {
      expect(processedData).toHaveLength(4);
    });
  });

  //Tests Filter Data
  describe('filterByType', () => {

    test('debería ser una funcion', () => {
      expect(typeof window.data.filterByType).toBe('function');
    });

    test('debería regresar un arreglo con los pokémones que correspondan con el tipo Poison', () => {
      const processedDataFilter = window.data.filterByType(dataPokemonTest, 'Poison');
      processedDataFilter.forEach(element => {
        expect(element.type).toEqual(expect.arrayContaining(['Poison']));
      });
    });
  });

  describe('filterByLetter', () => {
    const processedFilterLetter = window.data.filterByLetter(dataPokemonTest, 'C');

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

  //Tests order data
  describe('sortData', () => {

    test('debería ser una funcion', () => {
      expect(typeof window.data.sortData).toBe('function');
    });

    test('debería retornar un arreglo ordenado de forma ascendente por nombre', () => {
      expect(window.data.sortData(dataPokemonTest, 'name', 'asc')[0].name).toBe('Bulbasaur');
      expect(window.data.sortData(dataPokemonTest, 'name', 'asc')[3].name).toBe('Venusaur');
    });

    test('deberia retornar un arreglo ordenado de forma descendente por nombre', () => {
      expect(window.data.sortData(dataPokemonTest, 'name', 'desc')[0].name).toBe('Venusaur');
      expect(window.data.sortData(dataPokemonTest, 'name', 'desc')[3].name).toBe('Bulbasaur');
    });

    test('debería retornar un arreglo ordenado de forma ascendente por altura', () => {
      expect(window.data.sortData(dataPokemonTest, 'height', 'asc')[0].height).toBe(0.61);
      expect(window.data.sortData(dataPokemonTest, 'height', 'asc')[3].height).toBe(2.01);
    });

    test('debería retornar un arreglo ordenado de forma descendente por altura', () => {
      expect(window.data.sortData(dataPokemonTest, 'height', 'desc')[0].height).toBe(2.01);
      expect(window.data.sortData(dataPokemonTest, 'height', 'desc')[3].height).toBe(0.61);
    });

    test('debería retornar una arreglo ordenado de forma ascendente por peso', () => {
      expect(window.data.sortData(dataPokemonTest, 'weight', 'asc')[0].weight).toBe(6.9);
      expect(window.data.sortData(dataPokemonTest, 'weight', 'asc')[3].weight).toBe(100.0);
    });

    test('debería retornar una arreglo ordenado de forma descendente por peso', () => {
      expect(window.data.sortData(dataPokemonTest, 'weight', 'desc')[0].weight).toBe(100.0);
      expect(window.data.sortData(dataPokemonTest, 'weight', 'desc')[3].weight).toBe(6.9);

      expect(window.data.sortData(dataPokemonTest, 'weight')[3].weight).toBe(6.9);
    });
  });
  //Tests for Stats and average
  describe('computeStats', () => {
    test('debería ser una funcion', () => {
      expect(typeof window.data.computeStats).toBe('function');
    });
    test('debería regresar el valor mínimo para candy_count', () => {
      expect(window.data.computeStats(dataPokemonTest, 'candy_count').minimum).toBe(25);
    });
    test('debería regresar el valor máximo para candy_count', () => {
      expect(window.data.computeStats(dataPokemonTest, 'candy_count').maximum).toBe(100);
    });
    test('debería regresar el promedio para candy_count', () => {
      expect(window.data.computeStats(dataPokemonTest, 'candy_count').average).toBe(50.00);
    });
  });
});
