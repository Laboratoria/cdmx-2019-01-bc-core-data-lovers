require('../src/data.js');

const pokemon = [{
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
}];

const arregloConTipos = [{
    "id": 147,
    "num": "147",
    "name": "Dratini",
    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
    "type": [
      "Dragon"
    ],
    "height": "1.80 m",
    "weight": "3.3 kg",
    "candy": "Dratini Candy",
    "candy_count": 25,
    "egg": "10 km",
    "spawn_chance": 0.30,
    "avg_spawns": 30,
    "spawn_time": "06:41",
    "multipliers": [
      1.83,
      1.84
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "next_evolution": [{
      "num": "148",
      "name": "Dragonair"
    }, {
      "num": "149",
      "name": "Dragonite"
    }]
  }, {
    "id": 148,
    "num": "148",
    "name": "Dragonair",
    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
    "type": [
      "Dragon"
    ],
    "height": "3.99 m",
    "weight": "16.5 kg",
    "candy": "Dratini Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "11:57",
    "multipliers": [2.05],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }],
    "next_evolution": [{
      "num": "149",
      "name": "Dragonite"
    }]
  }, {
    "id": 149,
    "num": "149",
    "name": "Dragonite",
    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
    "type": [
      "Dragon",
      "Flying"
    ],
    "height": "2.21 m",
    "weight": "210.0 kg",
    "candy": "Dratini Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0011,
    "avg_spawns": 0.11,
    "spawn_time": "23:38",
    "multipliers": null,
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "prev_evolution": [{
      "num": "147",
      "name": "Dratini"
    }, {
      "num": "148",
      "name": "Dragonair"
    }]
  }];

describe ('Es un objeto Pokemon', () => {
  it ('is an object', () => { 
expect(typeof window.allPokemon).toBe('object');
  });
});

describe('es una función para filtrar Pokemones', () => {
  it('is a function', () => {
    expect(typeof window.allPokemon.dataFiltered).toBe('function');
  });


  it('Filtra/ Regresa la data solicitada', () => {
    expect(window.allPokemon.dataFiltered(pokemon, 'Grass')[0])
    .toEqual(pokemon[0])
     
    });
  });
  
    describe ('orderData es una función para ordenar los resultados de la A a la Z', () => {
      it ('is a function', () => { 
    expect(typeof window.allPokemon.orderData).toBe('function');
      });
    });

    it('Ordena los nombres de la A a la Z' , () => {
      expect(window.allPokemon.orderData(arregloConTipos))
      .toEqual(arregloConTipos.sort((a, b) => a.name > b.name ? 1 : - 1))});