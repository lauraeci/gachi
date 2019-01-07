import {combineReducers} from 'redux';
import lootSpecs from './lootSpecReducer';
import games from './gameReducer'
import loots from './lootReducer'
import lootCombinations from './lootCombinationReducer'
import lootCombinationResultSets from './lootCombinationResultSetReducer'
import lootOutcomes from './lootOutcomeReducer'

const rootReducer = combineReducers({
  games,
  loots,
  lootCombinations,
  lootCombinationResultSets,
  lootSpecs,
  lootOutcomes
});

export default rootReducer;
