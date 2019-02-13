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
  
    describe ('orderData es una función', () => {
      it ('is a function', () => { 
    expect(typeof window.allPokemon.orderData).toBe('function');
      });
    });
