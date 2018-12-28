import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootSpecReducer(state = initialState.lootSpecs, action) {
  switch (action.type) {
    case types.LOAD_LOOTSPECS_SUCCESS:
      return [...state, ...action.payload];

    case types.CREATE_LOOTSPECS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
