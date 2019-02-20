  require('../src/data.js');

  const pokemon = [
    {
      "id": 7,
      "num": "007",
      "name": "Squirtle",
      "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
      "type": [
        "Water"
      ],
      "height": "0.51 m",
      "weight": "9.0 kg",
      "candy": "Squirtle Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.58,
      "avg_spawns": 58,
      "spawn_time": "04:25",
      "multipliers": [2.1],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "next_evolution": [{
        "num": "008",
        "name": "Wartortle"
      }, {
        "num": "009",
        "name": "Blastoise"
      }]
    }, {
      "id": 12,
      "num": "012",
      "name": "Butterfree",
      "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
      "type": [
        "Bug",
        "Flying"
      ],
      "height": "1.09 m",
      "weight": "32.0 kg",
      "candy": "Caterpie Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.022,
      "avg_spawns": 2.2,
      "spawn_time": "05:23",
      "multipliers": null,
      "weaknesses": [
        "Fire",
        "Electric",
        "Ice",
        "Flying",
        "Rock"
      ],
      "prev_evolution": [{
        "num": "010",
        "name": "Caterpie"
      }, {
        "num": "011",
        "name": "Metapod"
      }]
    }, {
      "id": 15,
      "num": "015",
      "name": "Beedrill",
      "img": "http://www.serebii.net/pokemongo/pokemon/015.png",
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
    }
  ]


  describe('data', () => {
    it('is an object', () => {
      expect(typeof window.data).toBe('object');
    });

    describe('filterData', () => {
      it('is a function', () => {
        expect(typeof window.data.filterData).toBe('function');
      });
      it('Should return an array with the water type', () => {
          expect(window.data.filterData(pokemon, "Water")[0]).toEqual(pokemon[0]);
      });
    });

  describe('filterInput', () => {
    it('is a function', () => {
      expect(typeof window.data.filterInput).toBe('function');
    });
  });

  describe('sortData', () => {
    it('is a function', () => {
      expect(typeof window.data.sortData).toBe('function');
    });
    it('Should return an array ordered by A to Z', () => {
      expect(window.data.sortData(pokemon)[2]).toEqual(pokemon[2]);
      expect(window.data.sortData(pokemon)[1]).toEqual(pokemon[1]);
      expect(window.data.sortData(pokemon)[0]).toEqual(pokemon[0]);
    });
  });

    describe('computeStats', () => {
      it('is a function', () => {
        expect(typeof window.data.computeStats).toBe('function');
      });
        it('Should return the average of candy_count', () => {
          expect(window.data.computeStats(pokemon)).toBeCloseTo(25);
        });
    });
  });
