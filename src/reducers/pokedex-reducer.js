export default (state = {}, action) => {
  const { name, pokemonType, level, location, description, id } = action;
  switch (action.type) {
    case 'ADD_POKEMON':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          pokemonType: pokemonType,
          level: level,
          location: location,
          description: description,
          id: id
        }
      });
      case 'DELETE_POKEMON':
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
        return state;
  }
};