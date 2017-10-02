import axios from 'axios';


export const getBeers = (page = 1) => {
  return (dispatch) => {
    return axios.get(`/api/all_beers?page=${page}&per_page=10`)
      .then( res => {
        let { data, headers } = res;
        dispatch(storeBeers(data.entries))
      }).catch(e => (console.error('Error getting beers!', e)))
  }
}

export const storeBeers = (beers) => {
  return {
    type: 'STORE_BEERS',
    beers
  }
}
