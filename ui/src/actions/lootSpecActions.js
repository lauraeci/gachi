import * as types from './actionTypes';
import { createAction } from "redux-actions";

export const loadLootSpecs = () => {
  return dispatch => {
    return fetch('/gachi/loot_specs', {credentials: "same-origin"}).then(
      response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(receivedLootSpecs(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const saveLootSpec = (formData) => {
  return dispatch => {
    return fetch('/gachi/loot_specs',
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
      dispatch(savedLootSpecs(result));
    }).catch(error => {
      throw (error);
    });
  };
};


export const receivedLootSpecs = createAction(types.LOAD_LOOTSPECS_SUCCESS);
export const savedLootSpecs = createAction(types.SAVE_LOOTSPECS_SUCCESS);
