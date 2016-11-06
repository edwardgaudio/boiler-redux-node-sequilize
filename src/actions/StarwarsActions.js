import axios from 'axios';

import { UPDATE_STARWARS, LOADING_STARWARS, FAIL_STARWARS,
} from '../constants/ActionTypes';

const STARWARS_URL = 'http://swapi.co/api/people/';

export function updateStarwars(data) {
  return {
    type: UPDATE_STARWARS,
    data,
  };
}

export function loadingStarwars() {
  return {
    type: LOADING_STARWARS,
  };
}

export function failStarwars() {
  return {
    type: FAIL_STARWARS,
  };
}

export function fetchStarwars() {
  return dispatch => {
    dispatch(loadingStarwars());
    return axios.get(STARWARS_URL)
      .then(response => dispatch(updateStarwars(response.data)))
      .catch(err => {});
  };
}
