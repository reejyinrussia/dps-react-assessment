const breweries = (state = [], action) => {
  switch (action.type) {
    case 'STORE_BREWERIES':
      return action.breweries || [];
    default:
      return state;


  }
}

export default breweries;
