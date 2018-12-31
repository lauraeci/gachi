import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LootSpecsPage from './components/loot_spec/LootSpecsPage';
import ManageLootSpecPage from './components/loot_spec/ManageLootSpecPage';
import LootPage from './components/loot/LootPage';
import ManageLootPage from './components/loot/ManageLootPage';
import ManageGamePage from './components/game/ManageGamePage';
import GamePage from './components/game/GamePage';
import LootCombinationPage from "./components/loot_combinations/LootCombinationPage";
import ManageLootCombinationPage from "./components/loot_combinations/ManageLootCombinationPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="loot_specs" component={LootSpecsPage}/>
    <Route path="loot_spec" component={ManageLootSpecPage}/>
    <Route path="loot_spec/:id" component={ManageLootSpecPage}/>
    <Route path="loot_combinations" component={LootCombinationPage}/>
    <Route path="loot_combination" component={ManageLootCombinationPage}/>
    <Route path="loot_combination/:id" component={ManageLootCombinationPage}/>
    <Route path="loots" component={LootPage}/>
    <Route path="loot" component={ManageLootPage}/>
    <Route path="loot/:id" component={ManageLootPage}/>
    <Route path="game" component={ManageGamePage}/>
    <Route path="games" component={GamePage}/>
    <Route path="game/:id" component={ManageGamePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
