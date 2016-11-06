import {
  UPDATE_STARWARS,
  LOADING_STARWARS,
  FAIL_STARWARS } from '../constants/ActionTypes';

export default function forecast(state = { data: {} }, action) {
  switch (action.type) {
    case LOADING_STARWARS:
      return state;
    case UPDATE_STARWARS:
      return { data: action.data };
    case FAIL_STARWARS:
      return state;
    default:
      return state;
  }
}
