require('../src/data.js');

/* var POKEMON = {
  "pokemon": [{
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

  },
  {
    "id": 37,
    "num": "037",
    "name": "Vulpix",
    "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
    "type": [
      "Fire"
    ],
    "height": "0.61 m",
    "weight": "9.9 kg",
    "candy": "Vulpix Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.22,
    "avg_spawns": 22,
    "spawn_time": "13:43",
    "multipliers": [
      2.74,
      2.81
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "next_evolution": [{
      "num": "038",
      "name": "Ninetales"
    }]
  },

  {
    "id": 104,
    "num": "104",
    "name": "Cubone",
    "img": "http://www.serebii.net/pokemongo/pokemon/104.png",
    "type": [
      "Ground"
    ],
    "height": "0.41 m",
    "weight": "6.5 kg",
    "candy": "Cubone Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 0.61,
    "avg_spawns": 61,
    "spawn_time": "01:51",
    "multipliers": [1.67],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "105",
      "name": "Marowak"
    }]
  },

],}; */



describe ('filterData', () => {
  it('is a function', () =>{
    expect(typeof window.data.filterData).toBe('function');
  });
})


describe ('sortData', () =>{
  it('is a function', ()=>{
    expect(typeof window.data.sortData).toBe('function');
  });
  })

describe ('computeStats', () => {
  it('is a function',() =>{
    expect (typeof window.data.computeStats).toBe('function');
  });
})


