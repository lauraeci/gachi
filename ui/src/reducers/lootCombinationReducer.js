import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootCombinationReducer(state = initialState.lootCombinations, action) {
  switch (action.type) {
    case types.LOAD_LOOTCOMBINATIONS_SUCCESS:
      return [...state, ...action.payload];

    case types.SAVE_LOOTCOMBINATIONS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
