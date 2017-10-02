const beers = (state = [], action) => {
  switch (action.type) {
    case 'STORE_BEERS':
      return action.beers || [];
    default:
      return state;
    // case 'ADD_BEER':
    //  return [...state, action.beer]
    // case 'UPDATE_BEER':
    //  return state.map( beer => {
    //    if (beer.id === action.beer.id)
    //     return action.beer
    //   return beer
    //  })
    //  case 'DELETE_BEER':
    //   return state.filter( beer => beer.id !== action.id)
    // default:
    // return state;

  }
}

export default beers;
