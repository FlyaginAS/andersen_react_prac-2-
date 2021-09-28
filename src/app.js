import React from 'react';
import propsToConsole from './hoc/props-to-console';
import List from './renderProp/list';
import OrderedList from './renderProp/ordered-list';
import UnorderedList from './renderProp/unordered-list';
import PlanetInfo from './components/planet-info';

const App = () => {
  return (
    <div>
      <h1>This is app</h1>
      {/* рендер-ф-ию можно передавать и как children */}
      <List>{(items) => <OrderedList items={items} />}</List>
      <List>{(items) => <UnorderedList items={items} />}</List>
      <PlanetInfo id="5" />
    </div>
  );
};

//задействовал HOC
export default propsToConsole(App);
