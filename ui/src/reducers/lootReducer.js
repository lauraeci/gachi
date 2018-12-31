import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootReducer(state = initialState.loots, action) {
  switch (action.type) {
    case types.LOAD_LOOTS_SUCCESS:
      return [...state, ...action.payload];

    case types.CREATE_LOOTS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
