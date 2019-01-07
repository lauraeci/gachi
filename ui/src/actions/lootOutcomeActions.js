import * as types from './actionTypes';
import { createAction } from "redux-actions";


export const generateLootOutcome = (formData) => {
  return dispatch => {
    return fetch('/gachi/loot_outcomes',
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
      dispatch(generatedLootOutcome(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const generatedLootOutcome = createAction(types.GENERATED_LOOT_OUTCOME);
