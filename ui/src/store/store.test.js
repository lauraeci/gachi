import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as lootSpecActions from '../actions/lootSpecActions';

describe('Store', function() {
  it('Should handle creating lootSpecs', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const lootSpec = {
      title: "Clean Code"
    };

    // act
    const action = lootSpecActions.savedLootSpecs(lootSpec);
    store.dispatch(action);

    // assert
    const actual = store.getState().lootSpecs[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
