import * as types from './actionTypes';
import {createAction} from "redux-actions";

export const loadGames = () => {
  return dispatch => {
    return fetch('/gachi/games', {credentials: "same-origin"}).then(
      response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 401) {
          return [];
        }

        return Promise.reject(Error(`StatusCode: ${response.status}`));
      }).then(result => {
      dispatch(receivedGames(result));
    }).catch(error => {
      throw (error);
    });
  };
};

export const saveGame = (game) => {
  return dispatch => {
    return fetch('/gachi/games?name=' + game.name,
      {
        credentials: "same-origin",
        method: "POST"
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
      dispatch(savedGames(result));
    }).catch(error => {
      throw (error);
    });
  };
};


export const receivedGames = createAction(types.LOAD_GAMES_SUCCESS);
export const savedGames = createAction(types.CREATE_GAMES_SUCCESS);
