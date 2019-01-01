import {combineReducers} from 'redux';
import lootSpecs from './lootSpecReducer';
import games from './gameReducer'
import loots from './lootReducer'
import lootCombinations from './lootCombinationReducer'
import lootCombinationResultSets from './lootCombinationResultSetReducer'

const rootReducer = combineReducers({
  games,
  loots,
  lootCombinations,
  lootCombinationResultSets,
  lootSpecs
});

export default rootReducer;
