import axios from 'axios';


export const getBreweries = (page = 1) => {
  return (dispatch) => {
    return axios.get(`/api/all_breweries?page=${page}&per_page=10`)
      .then( res => {
        let { data, headers } = res;
        dispatch(storeBreweries(data.entries))
      }).catch(e => (console.error('Error getting breweries!', e)))
  }
}

export const storeBreweries = (breweries) => {
  return {
    type: 'STORE_BREWERIES',
    breweries
  }
}
