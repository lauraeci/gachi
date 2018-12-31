import {combineReducers} from 'redux';
import lootSpecs from './lootSpecReducer';
import games from './gameReducer'

const rootReducer = combineReducers({
  lootSpecs,
  games
});

export default rootReducer;
