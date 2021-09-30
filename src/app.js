import React from 'react';
import propsToConsole from './hoc/props-to-console';
import List from './renderProp/list';
import OrderedList from './renderProp/ordered-list';
import UnorderedList from './renderProp/unordered-list';
import PlanetInfo from './components/planet-info';
import ComponentContext from './components/component-context';
import { LangContext } from './contexts';
import ComponentStateEffect from './components/component-state-effect';
import CompCallbackMemo from './components/comp-callback-memo';
import CompReducer from './components/comp-reducer';
import Navigation from './components/navigation';
import { Route } from 'react-router';

const App = () => {
  return (
    <LangContext.Provider value="ru">
      <Navigation />
      <div>
        <h1>This is app</h1>
        {/* рендер-ф-ию можно передавать и как children */}

        <Route path="/hoc">
          <div>Cамо приложение App использует hoc</div>
        </Route>

        <Route path="/renderProp">
          <List>{(items) => <OrderedList items={items} />}</List>
          <List>{(items) => <UnorderedList items={items} />}</List>
        </Route>

        <Route path="/hooks/" exact>
          <div>Please choose the item in the submenu</div>
        </Route>

        <Route path="/hooks/custom-hook">
          <PlanetInfo id="5" />
        </Route>

        <Route path="/hooks/context">
          <ComponentContext />
        </Route>

        <Route path="/hooks/state-effect">
          <ComponentStateEffect />
        </Route>

        <Route path="/hooks/callback-memo">
          <CompCallbackMemo id="5" />
        </Route>

        <Route path="/hooks/reducer">
          <CompReducer initialCount={10} />
        </Route>
      </div>
    </LangContext.Provider>
  );
};

//задействовал HOC
export default propsToConsole(App);
