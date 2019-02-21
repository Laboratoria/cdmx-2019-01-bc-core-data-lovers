require('../src/data.js');
require('../src/data/pokemon/pokemon.js')

const dataBase = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
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
  "id": 13,
  "num": "013",
  "name": "Weedle",
  "img": "https://www.serebii.net/pokemongo/pokemon/013.png",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.30 m",
  "weight": "3.2 kg",
  "candy": "Weedle Candy",
  "candy_count": 12,
  "egg": "2 km",
  "spawn_chance": 7.12,
  "avg_spawns": 712,
  "spawn_time": "02:21",
  "multipliers": [
    1.01,
    1.09
  ],
  "weaknesses": [
    "Fire",
    "Flying",
    "Psychic",
    "Rock"
  ],
  "next_evolution": [{
    "num": "014",
    "name": "Kakuna"
  }, {
    "num": "015",
    "name": "Beedrill"
  }]
}, {
  "id": 18,
  "num": "018",
  "name": "Pidgeot",
  "img": "https://www.serebii.net/pokemongo/pokemon/018.png",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "1.50 m",
  "weight": "39.5 kg",
  "candy": "Pidgey Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.13,
  "avg_spawns": 13,
  "spawn_time": "01:50",
  "multipliers": null,
  "weaknesses": [
    "Electric",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "016",
    "name": "Pidgey"
  }, {
    "num": "017",
    "name": "Pidgeotto"
  }]
}, {
  "id": 14,
  "num": "014",
  "name": "Kakuna",
  "img": "https://www.serebii.net/pokemongo/pokemon/014.png",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.61 m",
  "weight": "10.0 kg",
  "candy": "Weedle Candy",
  "candy_count": 50,
  "egg": "Not in Eggs",
  "spawn_chance": 0.44,
  "avg_spawns": 44,
  "spawn_time": "02:30",
  "multipliers": [
    3.01,
    3.41
  ],
  "weaknesses": [
    "Fire",
    "Flying",
    "Psychic",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "013",
    "name": "Weedle"
  }],
  "next_evolution": [{
    "num": "015",
    "name": "Beedrill"
  }]
}, {
  "id": 15,
  "num": "015",
  "name": "Beedrill",
  "img": "https://www.serebii.net/pokemongo/pokemon/015.png",
  "type": [
    "Bug",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "29.5 kg",
  "candy": "Weedle Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.051,
  "avg_spawns": 5.1,
  "spawn_time": "04:50",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Flying",
    "Psychic",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "013",
    "name": "Weedle"
  }, {
    "num": "014",
    "name": "Kakuna"
  }]
}, {
  "id": 16,
  "num": "016",
  "name": "Pidgey",
  "img": "https://www.serebii.net/pokemongo/pokemon/016.png",
  "type": [
    "Normal",
    "Flying"
  ],
  "height": "0.30 m",
  "weight": "1.8 kg",
  "candy": "Pidgey Candy",
  "candy_count": 12,
  "egg": "2 km",
  "spawn_chance": 15.98,
  "avg_spawns": 1.598,
  "spawn_time": "01:34",
  "multipliers": [
    1.71,
    1.92
  ],
  "weaknesses": [
    "Electric",
    "Rock"
  ],
  "next_evolution": [{
    "num": "017",
    "name": "Pidgeotto"
  }, {
    "num": "018",
    "name": "Pidgeot"
  }]
}, ]

describe('data', () => {
  it('data is a object', () => {
    expect(typeof window.data).toBe('object');
  });

  it('filterPokemon is a function', () => {
    expect(typeof window.data.filterPokemon).toBe('function');
  });

  it('Deberia devolver el arr de Poison si elegimos Poison ', () => {
    expect(window.data.filterPokemon(dataBase, "Grass")[0].type[0]).toEqual("Grass");
  });

  it('Deberia devolver el arr de Bug si elegimos Bug ', () => {
    expect(window.data.filterPokemon(dataBase, "Bug")[0]).toEqual(dataBase[1]);
  });

  it('Deberia devolver el arr de Normal si elegimos Normal ', () => {
    expect(window.data.filterPokemon(dataBase, "Normal")[0]).toEqual(dataBase[2]);
  });

  it('sortDataPokemon is a function', () => {
    expect(typeof window.data.sortDataPokemon).toBe('function');
  });

  it('Deberia devolver el arr con peso Ascendente', () => {
    expect(window.data.sortDataPokemon(dataBase, "weight", "asc")[0].weight).toEqual("1.8 kg");
  });
  it('Deberia devolver el arr con peso Descendente', () => {
    expect(window.data.sortDataPokemon(dataBase, "weight", "dsc")[0].weight).toEqual("39.5 kg");
  });
  it('Deberia devolver el arr con Altura Ascendente', () => {
    expect(window.data.sortDataPokemon(dataBase, "height", "asc")[0].height).toEqual("0.30 m");
  });
  it('Deberia devolver el arr con Altura Descendente', () => {
    expect(window.data.sortDataPokemon(dataBase, "height", "dsc")[0].height).toEqual("1.50 m");
    expect(window.data.sortDataPokemon(dataBase, "height")[0].height).toEqual("1.50 m");

  });

  it('filterLetterPokemon is a function', () => {
    expect(typeof window.data.filterLetterPokemon).toBe('function');
  });

  it('Deberia devolver la coincidencia de Bul Bulbasaur', () => {
    expect(window.data.filterLetterPokemon(dataBase, "Bul")[0].name).toEqual("Bulbasaur");
  });

  it('Deberia devolver la coincidencia de Kakuna', () => {
    expect(window.data.filterLetterPokemon(dataBase, "Kakuna")[0]).toEqual(dataBase[3]);
  });


});
