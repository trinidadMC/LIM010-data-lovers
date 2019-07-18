global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

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
  }],

  "id": 23,
    "num": "023",
    "name": "Ekans",
    "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
    "type": [
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "6.9 kg",
    "candy": "Ekans Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 2.27,
    "avg_spawns": 227,
    "spawn_time": "12:20",
    "multipliers": [
      2.21,
      2.27
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "024",
      "name": "Arbok"
    }]
  }, {
    "id": 106,
    "num": "106",
    "name": "Hitmonlee",
    "img": "http://www.serebii.net/pokemongo/pokemon/106.png",
    "type": [
      "Fighting"
    ],
    "height": "1.50 m",
    "weight": "49.8 kg",
    "candy": "None",
    "egg": "10 km",
    "spawn_chance": 0.02,
    "avg_spawns": 2,
    "spawn_time": "03:59",
    "multipliers": null,
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ]
}]


describe('azordena', () => {
  
  it('debería ser una función', () => {
    expect(typeof azordena).toEqual('funcion');
  });

  it('debería retornar de A-Z', () => {
    expect(azordena('pokemonesnombres',pokemon)[0].name).toEqual('Ekans');
  });

})
