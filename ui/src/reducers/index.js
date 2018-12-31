import {combineReducers} from 'redux';
import lootSpecs from './lootSpecReducer';
import games from './gameReducer'
import loots from './lootReducer'
import lootCombinations from './lootCombinationReducer'

const rootReducer = combineReducers({
  games,
  loots,
  lootCombinations,
  lootSpecs
});

export default rootReducer;
