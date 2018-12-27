import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LootSpecsPage from './components/loot_spec/LootSpecsPage';
import ManageLootSpecPage from './components/loot_spec/ManageLootSpecPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="loot_specs" component={LootSpecsPage} />
    <Route path="loot_spec" component={ManageLootSpecPage} />
    <Route path="loot_spec/:id" component={ManageLootSpecPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
