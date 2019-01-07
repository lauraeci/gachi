import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootOutcomeReducer(state = initialState.lootOutcomes, action) {
  switch (action.type) {
    case types.GENERATED_LOOT_OUTCOME:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
    default:
      return state;
  }
}
