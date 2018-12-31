import * as types from './actionTypes';
import { createAction } from "redux-actions";

export const loadLoots = () => {
  return dispatch => {
    return fetch('/gachi/loots', {credentials: "same-origin"}).then(
      response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(receivedLoots(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const saveLoot = (formData) => {
  return dispatch => {
    return fetch('/gachi/loots',
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
      dispatch(savedLoots(result));
    }).catch(error => {
      throw (error);
    });
  };
};


export const receivedLoots = createAction(types.LOAD_LOOTS_SUCCESS);
export const savedLoots = createAction(types.SAVE_LOOTS_SUCCESS);
