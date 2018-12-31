import * as types from './actionTypes';
import { createAction } from "redux-actions";

export const loadLootCombinations = () => {
  return dispatch => {
    return fetch('/gachi/loot_combinations', {credentials: "same-origin"}).then(
      response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(receivedLootCombinations(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const saveLootCombination = (formData) => {
  return dispatch => {
    return fetch('/gachi/loot_combinations',
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
      dispatch(savedLootCombinations(result));
    }).catch(error => {
      throw (error);
    });
  };
};


export const receivedLootCombinations = createAction(types.LOAD_LOOTCOMBINATIONS_SUCCESS);
export const savedLootCombinations = createAction(types.SAVE_LOOTCOMBINATIONS_SUCCESS);
