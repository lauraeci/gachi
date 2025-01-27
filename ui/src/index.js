/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import {loadLootSpecs} from "./actions/lootSpecActions";
import {loadGames} from "./actions/gameActions";
import {loadLoots} from "./actions/lootActions";
import {loadLootCombinations} from "./actions/lootCombinationActions";
import {loadLootCombinationResultSet} from "./actions/lootCombinationResultSetActions";

const store = configureStore();
store.dispatch(loadLootSpecs());
store.dispatch(loadGames());
store.dispatch(loadLoots());
store.dispatch(loadLootCombinations());
store.dispatch(loadLootCombinationResultSet());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
