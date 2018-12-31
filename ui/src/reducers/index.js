import {combineReducers} from 'redux';
import lootSpecs from './lootSpecReducer';
import games from './gameReducer'
import loots from './lootReducer'

const rootReducer = combineReducers({
  games,
  loots,
  lootSpecs
});

export default rootReducer;
