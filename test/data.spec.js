global.window = global;
<<<<<<< HEAD
require('../src/data');
require('./data.spec.js');

const dataPokemon = [{
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
    expect(typeof pokemon.azordena).toBe('function');
=======
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPokemonTest = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'type': ['Grass', 'Poison'],
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'type': ['Grass', 'Poison'],
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
}, {
  'id': 3,
  'name': 'Venusaur',
  'type': ['Grass', 'Poison'],
  'egg': '10 km',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'type': ['Fire'],
  'egg': '5 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'weaknesses': ['Water', 'Ground', 'Rock']
}];


describe('azordena', () => {
  it('debería ser una función', () => {
    expect(typeof pokemon.azordena).toEqual('function');
  });
  it('debería retornar Bulbasaur', () => {
    expect(pokemon.azordena(dataPokemonTest, '0')[0].name).toEqual('Bulbasaur');
  });
  it('debería retornar Venusaur', () => {
    expect(pokemon.azordena(dataPokemonTest, '1')[0].name).toEqual('Venusaur');
  });
});
describe('poketypos', () => {
  it('debería ser una función', () => {
    expect(typeof pokemon.poketypos).toEqual('function');
>>>>>>> f20cd6cbef70d461c91741e1856c95ad088a362d
  });
  it('debería retornar Charmander', () => {
    expect(pokemon.poketypos(dataPokemonTest, 'Fire')[0].name).toEqual('Charmander');
  });
});

<<<<<<< HEAD
  it('debería retornar un array de objetos ordenado en forma alfabetica ', () => {
    expect(azordena()[0].name).toEqual('Bulbasaur','Ekans');
  });

})
=======
describe('ordenpoder', () => {
  it('debería ser una función', () => {
    expect(typeof pokemon.ordenpoder).toEqual('function');
  });
  it('debería retornar 1.7', () => {
    expect(pokemon.ordenpoder(dataPokemonTest, '0')[0].avg_spawns).toEqual(1.7);
  });
  it('debería retornar 69', () => {
    expect(pokemon.ordenpoder(dataPokemonTest, '1')[0].avg_spawns).toEqual(69);
  });
});

describe('pokedebilidades', () => {
  it('debería ser una función', () => {
    expect(typeof pokemon.pokedebilidades).toEqual('function');
  });
  it('debería retornar Charmander', () => {
    expect(pokemon.pokedebilidades(dataPokemonTest, 'Water')[0].name).toEqual('Charmander');
  });
});

describe('huevos', () => {
  it('debería ser una función', () => {
    expect(typeof pokemon.huevos).toEqual('function');
  });
  it('debería retornar huevos de 2km', () => {
    expect(pokemon.huevos(dataPokemonTest, '2 km')[0].egg).toEqual('2 km');
  });
  it('debería retornar huevos de 5km', () => {
    expect(pokemon.huevos(dataPokemonTest, '5 km')[0].egg).toEqual('5 km');
  });
  it('debería retornar huevos de 10km', () => {
    expect(pokemon.huevos(dataPokemonTest, '10 km')[0].egg).toEqual('10 km');
  });
});
>>>>>>> f20cd6cbef70d461c91741e1856c95ad088a362d
