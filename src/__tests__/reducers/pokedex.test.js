import pokedexReducer from '../../reducers/pokedex-reducer';

let action;
const pokeData = {
  name: "Squirtle",
  pokemonType: "water",
  level: "69",
  location: "lake minatanka",
  description: 'the best starter pokemon for sure',
  id: 1,
};

const updatedData = { // if its stored correctly after editing
  name: "not squirtle",
  pokemonType: "not water",
  level: '420',
  location: "bottom of the barrel",
  description: "blah blah",
  id: 1,
};

const currentState = { // stored correctly after deleted
  1: {
    name: "Squirtle",
    pokemonType: "water",
    level: "69",
    location: "lake minatanka",
    description: 'the best starter pokemon for sure',
    id: 1
  }
};

describe('pokedexReducer', () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(pokedexReducer({}, {type: null})).toEqual({});
  });
  
  test('Should successfully add new pokemon to pokedex', () => {
    const { name, pokemonType, level, location, description, id } = pokeData;
    action = {
      type: 'ADD_POKEMON',
      name: name,
      pokemonType: pokemonType,
      level: level,
      location: location,
      description: description,
      id: id
    };
    expect(pokedexReducer ({}, action)).toEqual({
      [id]: {
        name: name,
        pokemonType: pokemonType,
        level: level,
        location: location,
        description: description,
        id: id
      }
    })
  })
});