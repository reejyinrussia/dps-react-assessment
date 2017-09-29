import axios from 'axios';


export const getBeers = (callback) => {
  return(dispatch) => {
    axios.get('/api/all_beers')
    .then( res => dispatch({ type: 'BEERS', beers: res.data }))
    .then( callback() )
  }
}
