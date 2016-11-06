import axios from 'axios';

import { UPDATE_WEATHER, LOADING_WEATHER, FAIL_WEATHER,
} from '../constants/ActionTypes';

const BROOKLYN_LONG_LAT = '40.672566, -73.982878';
const DARKSKY_KEY = 'a4256e6308c45307dae8c585e8d8f43a';
const TEMP_URL = `https://api.darksky.net/forecast/${DARKSKY_KEY}/${BROOKLYN_LONG_LAT}`;

export function updateWeather(data) {
  return {
    type: UPDATE_WEATHER,
    forecast: data,
  };
}

export function loadingWeather() {
  return {
    type: LOADING_WEATHER,
  };
}

export function failWeather() {
  return {
    type: FAIL_WEATHER,
  };
}

export function fetchWeather() {
  return dispatch => {
    dispatch(loadingWeather());
    return axios.get('https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589')
      .then(response => dispatch(updateWeather(response.data)))
      .catch(err => {});
  };
}
