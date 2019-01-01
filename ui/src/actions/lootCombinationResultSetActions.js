import * as types from './actionTypes';
import { createAction } from "redux-actions";

export const loadLootCombinationResultSet = () => {
  return dispatch => {
    return fetch('/gachi/loot_combination_result_sets', {credentials: "same-origin"}).then(
      response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(receivedLootCombinationResultSetCombinations(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const saveLootCombinationResultSet = (formData) => {
  return dispatch => {
    return fetch('/gachi/loot_combination_result_sets',
      {
        credentials: "same-origin",
        method: "POST",
        body: formData
      }
    ).then(
      response => {
        if (response.status == 201) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(savedLootCombinationResultSetCombinations(result));
    }).catch(error => {
      throw (error);
    });
  };
};


export const receivedLootCombinationResultSetCombinations = createAction(types.LOAD_LOOT_COMBINATION_RESULT_SET_SUCCESS);
export const savedLootCombinationResultSetCombinations = createAction(types.SAVED_LOOT_COMBINATION_RESULT_SET_SUCCESS);
