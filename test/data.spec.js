global.window = global;
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
  });
  it('debería retornar Charmander', () => {
    expect(pokemon.poketypos(dataPokemonTest, 'Fire')[0].name).toEqual('Charmander');
  });
});

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
