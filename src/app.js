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

const App = () => {
  return (
    <LangContext.Provider value="ru">
      <div>
        <h1>This is app</h1>
        {/* рендер-ф-ию можно передавать и как children */}
        <List>{(items) => <OrderedList items={items} />}</List>
        <List>{(items) => <UnorderedList items={items} />}</List>
        <PlanetInfo id="5" />
        <ComponentContext />
        <ComponentStateEffect />
        <CompCallbackMemo id="5" />
        <CompReducer initialCount={10} />
      </div>
    </LangContext.Provider>
  );
};

//задействовал HOC
export default propsToConsole(App);
