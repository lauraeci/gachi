import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootCombinationResultSetReducer(state = initialState.lootCombinationResultSets, action) {
  switch (action.type) {
    case types.LOAD_LOOT_COMBINATION_RESULT_SET_SUCCESS:
      return [...state, ...action.payload];

    case types.SAVED_LOOT_COMBINATION_RESULT_SET_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
