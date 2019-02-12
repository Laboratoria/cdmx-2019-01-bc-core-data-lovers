require('../src/data.js');
const pokemonPrueba= [
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
}]

const ivysaur= pokemonPrueba[0];
const venusaur=pokemonPrueba[2];


describe('pokesaurius', () => {

  it('is an object', () => {
      expect(typeof window.pokesaurius).toBe('object');
  })
},

  describe('typeFilter', () => {
    it('is a function', () => {
      expect(typeof window.pokesaurius.typeFilter).toBe('function');
    })

  it('Deberia devolver el array de Ivysaur si ingresamos tipo Poison',()=>{
    expect(window.pokesaurius.typeFilter(pokemonPrueba,'Poison')[0]).toEqual(ivysaur)
  })

  it('Deberia devolver el array de Charmander si ingresamos tipo Water',()=>{
    expect(window.pokesaurius.typeFilter(pokemonPrueba,'Fire')[0]).toEqual(venusaur)
  })
})
)




