import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lootSpecReducer(state = initialState.lootSpecs, action) {
  switch (action.type) {
    case types.LOAD_LOOTSPECS_SUCCESS:
      alert("ACTION")
      alert(action.lootSpecs)
      return action.lootSpecs;

    case types.CREATE_LOOTSPECS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.lootSpec)
      ];

    default:
      return state;
  }
}
