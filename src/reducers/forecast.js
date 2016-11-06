import {
  UPDATE_WEATHER,
  LOADING_WEATHER,
  FAIL_WEATHER } from '../constants/ActionTypes';

export default function forecast(state = { isLoading: false, forecast: {} }, action) {
  switch (action.type) {
    case LOADING_WEATHER:
      return { isLoading: true, forecast: {} };
    case UPDATE_WEATHER:
      return { isLoading: false, forecast: action.forecast };
    case FAIL_WEATHER:
      return { isLoading: true, forecast: {} };
    default:
      return state;
  }
}
