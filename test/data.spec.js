require('../src/data.js');
const pokemonSortTest = {
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
  }, {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  }]
}

const pokemonSortedAscending = [{
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
  },

  {
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
  {
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
  },

]

const pokemonSortedDescending = [{
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
  {
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
  },
  {
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
  },

]

const sortedWeightDescending = [

  {
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
  {
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
  },
  {
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
  },

  {
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

]

const sortedWeightAscending = [{
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
  },
  {
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
  {
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
  },

]

const filteredLight = [




  {
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
  },

  {
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },

]

const filteredHeavy = [{
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
}, ]

const filteredSmall = [{
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
  },
  {
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
  },

]

const filteredMedium = [{
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  }

]

const filteredTall = [
  {
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
  }, 
]

const filteredType =[
  {
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
  }, 
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
]






const string = "Fire";

const numberOfPokemon = 5;

const sortedName = [
  {
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
  },
  {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "candy": "Charmander Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.012,
    "avg_spawns": 1.2,
    "spawn_time": "19:00",
    "multipliers": [1.79],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "004",
      "name": "Charmander"
    }],
    "next_evolution": [{
      "num": "006",
      "name": "Charizard"
    }]
  },
  {
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
  },
  {
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
  },
]
const height = "height";
const weight = "weight";

describe('window.pokemonFunction debería ser un objeto', () => {
  it('Es un objeto', () => {
    expect(typeof window.pokemonFunction).toBe('object')
  });
})
describe('sortByName debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.sortByName).toEqual('function')
})
})
describe('La función sortByName debería ordenar los pokémon de manera alfabética', () => {
  it("Ordena los pokémon de manera alfabética", () => {
    expect(window.pokemonFunction.sortByName(pokemonSortTest.pokemon)).toEqual(sortedName)
  });
});

describe('sortFunction debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.sortFunction).toEqual('function')
  })

});
describe('La función sortFunction debería ordenar la estatura de los pokémon de manera ascendente', () => {
  it("Ordena la estatura de los pokémon de manera ascendente", () => {
    expect(window.pokemonFunction.sortFunction(pokemonSortTest.pokemon,height)).toEqual(pokemonSortedAscending);
  });
  it("Ordena el peso de los pokémon de manera ascendente", () => {
    expect(window.pokemonFunction.sortFunction(pokemonSortTest.pokemon,weight)).toEqual(sortedWeightAscending);
  });
});

describe('La función sortByDescending debería ordenar la estatura de los pokémon de manera descendente', () => {
  it("Ordena la estatura de los pokémon de manera descendente", () => {
    expect(window.pokemonFunction.sortByDescending(pokemonSortTest.pokemon,height)).toEqual(pokemonSortedDescending);
  });

  it("Ordena el peso de los pokémon de manera descendente", () => {
    expect(window.pokemonFunction.sortByDescending(pokemonSortTest.pokemon,weight)).toEqual(sortedWeightDescending);
  });

})


describe('filterByWeightLight debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.filterByWeightLight).toEqual('function')
  })
});
describe('La función filterByWeightLight debería ordenar el peso de los pokémon de menos de 30 kg', () => {
  it("Ordena el peso de los pokémon de menos de 30 kg", () => {
    expect(window.pokemonFunction.filterByWeightLight(pokemonSortTest.pokemon)).toEqual(expect.arrayContaining(filteredLight))
  });
})

describe('filterByWeightHeavy debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.filterByWeightHeavy).toEqual('function')
  })
});
describe('La función filterByWeightHeavy debería ordenar el peso de los pokémon de más de 30 kg', () => {
  it("Ordena el peso de los pokémon de más de 30 kg", () => {
    expect(window.pokemonFunction.filterByWeightHeavy(pokemonSortTest.pokemon)).toEqual(expect.arrayContaining(filteredHeavy))
  });
})

describe('filterByHeightSmall debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.filterByHeightSmall).toEqual('function')
  })
});
describe('La función filterByHeightSmall debería ordenar la altura de los pokémon de menos de 1m', () => {
  it("Ordena la altura de los pokémon de menos de 1m", () => {
    expect(window.pokemonFunction.filterByHeightSmall(pokemonSortTest.pokemon)).toEqual(expect.arrayContaining(filteredSmall))
  });
})


describe('filterByHeightMedium debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.filterByHeightMedium).toEqual('function')
  })
});
describe('La función filterByHeightMedium debería ordenar la altura de los pokémon de más de 1m y menos de 1.80m', () => {
  it("Ordena la altura de los pokémon de más de 1m y menos de 1.80m", () => {
    expect(window.pokemonFunction.filterByHeightMedium(pokemonSortTest.pokemon)).toEqual(expect.arrayContaining(filteredMedium))
  });
})


describe('filterByHeightTall debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.filterByHeightTall).toEqual('function')
  })
});
describe('La función filterByHeightTall debería ordenar la altura de los pokémon de más de 1.80m', () => {
  it("Ordena la altura de los pokémon de más 1.80m", () => {
    expect(window.pokemonFunction.filterByHeightTall(pokemonSortTest.pokemon)).toEqual(expect.arrayContaining(filteredTall))
  });
})

describe('pokemonFilterType debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.pokemonFilterType).toEqual('function')
  })
});
describe('La función pokemonFilterType debería filtrar los pokemon por tipo', () => {
  it("Filtra los pokemon por tipo", () => {
    expect(window.pokemonFunction.pokemonFilterType(pokemonSortTest.pokemon, string)).toEqual(expect.arrayContaining(filteredType))
  });
})

describe('averageHeight debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.averageHeight).toEqual('function')
  })
});
describe('La función averageHeight debería dar el promedio total de la altura de los pokémon', () => {
  it("Da el promedio total de altura de los pokémon", () => {
    expect(window.pokemonFunction.averageHeight(pokemonSortTest.pokemon, numberOfPokemon)).toEqual(1.082)
  });
})

describe('totalWeight debería ser una función', () => {
  it('Es una función', () => {
    expect(typeof window.pokemonFunction.averageWeight).toEqual('function')
  })
});
describe('La función totalWeight debería dar el promedio total de la peso de los pokémon', () => {
  it("Da el promedio total de peso de los pokémon", () => {
    expect(window.pokemonFunction.averageWeight(pokemonSortTest.pokemon, numberOfPokemon)).toEqual(29.48)
  });
})
