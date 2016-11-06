import { combineReducers } from 'redux';
import counter from './counter';
import forecast from './forecast';
import starwars from './starwars';

const rootReducer = combineReducers({
  counter,
  forecast,
  starwars,
});

export default rootReducer;
